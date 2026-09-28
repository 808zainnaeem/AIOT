import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = process.env.REPO_ROOT
  ? path.resolve(process.env.REPO_ROOT)
  : path.resolve(__dirname, "..");
const LANG_DIR = path.join(REPO_ROOT, "src", "Languages");

const LOCALES = ["ar", "da", "de", "es", "fr", "sv", "zh"];

const BRAND_EXACT = new Set(
  [
    "PeopleHub",
    "ProcessHub",
    "CommerceHub",
    "SAP",
    "Oracle",
    "NetSuite",
    "Microsoft",
    "AIOT",
    "Nizam365",
    "HANA",
    "ERP",
    "CRM",
    "IoT",
    "AI",
    "API",
    "SaaS",
    "PaaS",
    "IaaS",
    "HR",
    "IT",
    "UI",
    "UX",
    "SEO",
    "GDPR",
    "ISO",
    "PCI",
    "HIPAA",
    "LinkedIn",
    "Facebook",
    "Instagram",
    "Twitter",
    "YouTube",
    "WhatsApp",
  ].map((s) => s.toLowerCase())
);

const URL_RE =
  /^(https?:\/\/|www\.|[a-z0-9-]+\.(com|org|net|io|co|pk|edu)(\/|$))/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,}$/;

function hasLatinLetters(s) {
  return /[A-Za-z]/.test(s);
}

function normalizeForCompare(s) {
  return s.trim().replace(/\s+/g, " ").toLowerCase();
}

function isNearlyIdentical(a, b) {
  if (a === b) return true;
  const na = normalizeForCompare(a);
  const nb = normalizeForCompare(b);
  if (na === nb) return true;
  if (na.length > 0 && nb.length > 0) {
    const longer = na.length >= nb.length ? na : nb;
    const shorter = na.length >= nb.length ? nb : na;
    if (longer.startsWith(shorter) && longer.length - shorter.length <= 3) {
      return true;
    }
  }
  return false;
}

function shouldSkipUntranslated(enValue) {
  const t = enValue.trim();
  if (!t) return true;
  if (URL_RE.test(t)) return true;
  if (EMAIL_RE.test(t)) return true;
  if (PHONE_RE.test(t) && hasLatinLetters(t) === false) return true;
  if (PHONE_RE.test(t) && !/[a-zA-Z]{3,}/.test(t.replace(/[\d\s+\-().]/g, ""))) {
    return true;
  }
  const lower = t.toLowerCase();
  if (BRAND_EXACT.has(lower)) return true;
  if (/^[\d\s+\-().,]+$/.test(t)) return true;
  if (/^[\W\d]+$/.test(t) && !hasLatinLetters(t)) return true;
  if (t.length <= 3 && /^[A-Z0-9&]+$/.test(t)) return true;
  return false;
}

function collectLeaves(obj, prefix = "") {
  const out = [];
  if (obj === null || obj === undefined) return out;
  if (typeof obj === "string") {
    out.push({ path: prefix, value: obj });
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      out.push(...collectLeaves(item, prefix ? `${prefix}[${i}]` : `[${i}]`));
    });
    return out;
  }
  if (typeof obj === "object") {
    for (const key of Object.keys(obj).sort()) {
      const p = prefix ? `${prefix}.${key}` : key;
      out.push(...collectLeaves(obj[key], p));
    }
  }
  return out;
}

function getAtPath(obj, dotPath) {
  if (!dotPath) return obj;
  const parts = dotPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[part];
  }
  return cur;
}

function pathExists(obj, dotPath) {
  const v = getAtPath(obj, dotPath);
  return v !== undefined;
}

function preview(s, max = 80) {
  const one = s.replace(/\s+/g, " ").trim();
  if (one.length <= max) return one;
  return one.slice(0, max - 1) + "…";
}

function loadJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

const en = loadJson(path.join(LANG_DIR, "en.json"));
const enLeaves = collectLeaves(en);
const enByPath = new Map(enLeaves.map((l) => [l.path, l.value]));

const report = {};
const consoleSummaries = [];

for (const locale of LOCALES) {
  const localePath = path.join(LANG_DIR, `${locale}.json`);
  const loc = loadJson(localePath);
  const locLeaves = collectLeaves(loc);
  const locByPath = new Map(locLeaves.map((l) => [l.path, l.value]));

  const gaps = [];
  const missing = [];

  for (const { path: p, value: enVal } of enLeaves) {
    if (typeof enVal !== "string") continue;

    if (!pathExists(loc, p)) {
      missing.push({ path: p, en: enVal, current: null, kind: "missing" });
      continue;
    }

    const cur = locByPath.get(p);
    if (typeof cur !== "string") continue;

    if (!hasLatinLetters(enVal)) continue;
    if (shouldSkipUntranslated(enVal)) continue;
    if (isNearlyIdentical(enVal, cur)) {
      gaps.push({ path: p, en: enVal, current: cur, kind: "untranslated" });
    }
  }

  const combined = [
    ...missing.map((m) => ({ path: m.path, en: m.en, current: m.current })),
    ...gaps.map((g) => ({ path: g.path, en: g.en, current: g.current })),
  ];

  report[locale] = combined;

  const untranslatedCount = gaps.length;
  const missingCount = missing.length;
  const total = combined.length;

  consoleSummaries.push({ locale, untranslatedCount, missingCount, total, combined });

  console.log(`\n=== ${locale.toUpperCase()} ===`);
  console.log(
    `Untranslated (same/near-same as EN): ${untranslatedCount} | Missing paths: ${missingCount} | Total issues: ${total}`
  );
  console.log("First 80 paths:");
  combined.slice(0, 80).forEach((item, i) => {
    const tag = item.current === null ? "[MISSING]" : "[SAME]";
    console.log(`  ${i + 1}. ${tag} ${item.path}`);
    console.log(`      EN: ${preview(item.en)}`);
  });
}

const outPath = path.join(REPO_ROOT, "tmp-i18n-gaps.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
console.log(`\nFull report written to: ${outPath}`);

const importantPatterns = [
  /^navbar\b/,
  /^dropdown\b/,
  /^footer\b/,
  /^hero\b/i,
  /hero/i,
  /^home\b/,
  /whatWeDo/i,
  /whatwedo/i,
  /services/i,
];

console.log("\n=== IMPORTANT GAPS SAMPLE (navbar, hero, dropdown, footer, home) ===");
for (const { locale, combined } of consoleSummaries) {
  const hits = combined.filter((item) =>
    importantPatterns.some((re) => re.test(item.path))
  );
  if (hits.length === 0) continue;
  console.log(`\n--- ${locale} (${hits.length} important) ---`);
  hits.slice(0, 25).forEach((item) => {
    console.log(`  ${item.path}: ${preview(item.en, 60)}`);
  });
}

console.log("\n=== COUNTS ===");
for (const s of consoleSummaries) {
  console.log(
    `${s.locale}: untranslated=${s.untranslatedCount}, missing=${s.missingCount}, total=${s.total}`
  );
}

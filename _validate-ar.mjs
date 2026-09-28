import { readFileSync } from 'fs';

const en = JSON.parse(readFileSync('./src/Languages/en.json', 'utf8'));
const ar = JSON.parse(readFileSync('./src/Languages/ar.json', 'utf8'));

function walk(a, b, path, missing, extra) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) { missing.push(path + ' (array mismatch)'); return; }
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) {
      if (i >= b.length) missing.push(path + '[' + i + ']');
      else if (i >= a.length) extra.push(path + '[' + i + ']');
      else walk(a[i], b[i], path + '[' + i + ']', missing, extra);
    }
  } else if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') { missing.push(path + ' (object mismatch)'); return; }
    for (const k of Object.keys(a)) {
      if (!(k in b)) missing.push(path + '.' + k);
      else walk(a[k], b[k], path + '.' + k, missing, extra);
    }
    for (const k of Object.keys(b)) {
      if (!(k in a)) extra.push(path + '.' + k);
    }
  }
}

const missing = [], extra = [];
walk(en, ar, '', missing, extra);
console.log('JSON valid: true');
console.log('Missing in ar (present in en):', missing.length);
missing.forEach(m => console.log('  MISSING:', m));
console.log('Extra in ar (not in en):', extra.length);
extra.forEach(m => console.log('  EXTRA:', m));

// Count leaf strings that are identical to English (likely untranslated), excluding whitelisted brand/url/email/phone-like values
let sameCount = 0;
const sameList = [];
function isPreserved(str) {
  if (/^https?:\/\//.test(str)) return true;
  if (/^\+?\d[\d\s-]+$/.test(str)) return true;
  if (/@/.test(str) && /\./.test(str)) return true;
  return false;
}
function walk2(a, b, path) {
  if (Array.isArray(a)) {
    a.forEach((v, i) => { if (b && b[i] !== undefined) walk2(v, b[i], path + '[' + i + ']'); });
  } else if (a && typeof a === 'object') {
    for (const k of Object.keys(a)) {
      if (b && k in b) walk2(a[k], b[k], path + '.' + k);
    }
  } else if (typeof a === 'string') {
    if (a === b && a.trim() !== '' && !isPreserved(a) && !/^[\d\s.,+%-]+$/.test(a)) {
      sameCount++;
      sameList.push(path + ' => "' + a + '"');
    }
  }
}
walk2(en, ar, '');
console.log('Identical EN/AR leaf strings (excluding urls/emails/phones/numbers):', sameCount);
sameList.forEach(s => console.log('  SAME:', s));

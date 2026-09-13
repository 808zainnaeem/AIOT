export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'Arabic' },
    { code: 'da', name: 'Danish' },
    { code: 'de', name: 'German' },
    { code: 'es', name: 'Spanish' },
    { code: 'zh', name: 'Chinese' },
    { code: 'fr', name: 'French' },
    { code: 'sv', name: 'Swedish' },
];

export const RTL_LANGUAGES = ['ar'];

const SUPPORTED_CODES = new Set(SUPPORTED_LANGUAGES.map((lang) => lang.code));

export const COUNTRY_LANGUAGE = {
    DE: 'de', AT: 'de', LI: 'de', CH: 'de',
    DK: 'da',
    SE: 'sv', AX: 'sv',
    FR: 'fr', MC: 'fr', BE: 'fr', LU: 'fr', SN: 'fr', CI: 'fr', ML: 'fr',
    BF: 'fr', NE: 'fr', TG: 'fr', BJ: 'fr', GA: 'fr', CG: 'fr', CD: 'fr',
    CM: 'fr', MG: 'fr', HT: 'fr', GN: 'fr', RW: 'fr', BI: 'fr', TD: 'fr', CF: 'fr',
    ES: 'es', MX: 'es', GT: 'es', HN: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
    CU: 'es', DO: 'es', CO: 'es', VE: 'es', EC: 'es', PE: 'es', BO: 'es', PY: 'es',
    CL: 'es', AR: 'es', UY: 'es', PR: 'es', GQ: 'es',
    CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
    SA: 'ar', AE: 'ar', QA: 'ar', KW: 'ar', BH: 'ar', OM: 'ar', EG: 'ar', JO: 'ar',
    LB: 'ar', IQ: 'ar', SY: 'ar', YE: 'ar', PS: 'ar', LY: 'ar', TN: 'ar', DZ: 'ar',
    MA: 'ar', SD: 'ar', MR: 'ar', SO: 'ar', DJ: 'ar', KM: 'ar',
};

const TIMEZONE_LANGUAGE = {
    'Europe/Berlin': 'de',
    'Europe/Vienna': 'de',
    'Europe/Zurich': 'de',
    'Europe/Paris': 'fr',
    'Europe/Monaco': 'fr',
    'Europe/Brussels': 'fr',
    'Europe/Luxembourg': 'fr',
    'Europe/Madrid': 'es',
    'Atlantic/Canary': 'es',
    'Europe/Stockholm': 'sv',
    'Europe/Copenhagen': 'da',
    'Asia/Riyadh': 'ar',
    'Asia/Dubai': 'ar',
    'Asia/Qatar': 'ar',
    'Asia/Kuwait': 'ar',
    'Asia/Bahrain': 'ar',
    'Asia/Muscat': 'ar',
    'Asia/Amman': 'ar',
    'Asia/Beirut': 'ar',
    'Asia/Baghdad': 'ar',
    'Africa/Cairo': 'ar',
    'Africa/Casablanca': 'ar',
    'Africa/Algiers': 'ar',
    'Africa/Tunis': 'ar',
    'Asia/Shanghai': 'zh',
    'Asia/Hong_Kong': 'zh',
    'Asia/Macau': 'zh',
    'Asia/Taipei': 'zh',
    'America/Mexico_City': 'es',
    'America/Bogota': 'es',
    'America/Lima': 'es',
    'America/Santiago': 'es',
    'America/Argentina/Buenos_Aires': 'es',
    'America/Madrid': 'es',
};

export function languageFromCountry(countryCode) {
    if (!countryCode) return null;
    return COUNTRY_LANGUAGE[String(countryCode).toUpperCase()] || null;
}

export function languageFromBrowserLocale() {
    if (typeof navigator === 'undefined') return 'en';

    const locales = [...(navigator.languages || []), navigator.language].filter(Boolean);

    for (const locale of locales) {
        const parts = String(locale).replace('_', '-').split('-');
        const langCode = parts[0]?.toLowerCase();
        if (SUPPORTED_CODES.has(langCode)) return langCode;

        const region = parts.find((part, index) => index > 0 && part.length === 2);
        const fromCountry = languageFromCountry(region);
        if (fromCountry) return fromCountry;
    }

    return 'en';
}

export function languageFromTimeZone() {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return TIMEZONE_LANGUAGE[timeZone] || null;
    } catch {
        return null;
    }
}

async function fetchCountryCode() {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 2500);

    try {
        const response = await fetch('https://get.geojs.io/v1/ip/country.json', {
            signal: controller.signal,
        });
        if (!response.ok) return null;
        const data = await response.json();
        return data.country || data.country_code || null;
    } catch {
        return null;
    } finally {
        window.clearTimeout(timer);
    }
}

export async function detectLanguageFromLocation() {
    const country = await fetchCountryCode();
    return languageFromCountry(country) || languageFromTimeZone() || languageFromBrowserLocale();
}

import React, { createContext, useState, useEffect, useMemo } from 'react';
import en from '../Languages/en.json';
import {
    SUPPORTED_LANGUAGES,
    RTL_LANGUAGES,
    detectLanguageFromLocation,
    languageFromBrowserLocale,
} from '../Languages/languages';

export { SUPPORTED_LANGUAGES, RTL_LANGUAGES };

const localeLoaders = {
    en: () => Promise.resolve({ default: en }),
    ar: () => import('../Languages/ar.json'),
    da: () => import('../Languages/da.json'),
    de: () => import('../Languages/de.json'),
    es: () => import('../Languages/es.json'),
    zh: () => import('../Languages/zh.json'),
    fr: () => import('../Languages/fr.json'),
    sv: () => import('../Languages/sv.json'),
};

export const LanguageContext = createContext();

function deepMerge(base, override) {
    if (!override || typeof override !== 'object' || Array.isArray(override)) {
        return override === undefined ? base : override;
    }

    const result = Array.isArray(base) ? [...base] : { ...base };

    Object.keys(override).forEach((key) => {
        const baseValue = base?.[key];
        const nextValue = override[key];

        if (
            nextValue &&
            typeof nextValue === 'object' &&
            !Array.isArray(nextValue) &&
            baseValue &&
            typeof baseValue === 'object' &&
            !Array.isArray(baseValue)
        ) {
            result[key] = deepMerge(baseValue, nextValue);
        } else if (nextValue !== undefined) {
            result[key] = nextValue;
        }
    });

    return result;
}

function getSavedLanguage() {
    if (typeof window === 'undefined') return null;
    const saved = window.localStorage.getItem('aiot-language');
    return localeLoaders[saved] ? saved : null;
}

function getInitialLanguage() {
    return getSavedLanguage() || languageFromBrowserLocale();
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);
    const [localePack, setLocalePack] = useState(en);

    const setLanguage = (code) => {
        if (!localeLoaders[code]) return;
        setLanguageState(code);
        window.localStorage.setItem('aiot-language', code);
    };

    useEffect(() => {
        let cancelled = false;
        const load = localeLoaders[language] || localeLoaders.en;

        load().then((mod) => {
            if (cancelled) return;
            setLocalePack(mod.default || mod);
        });

        return () => {
            cancelled = true;
        };
    }, [language]);

    const translations = useMemo(() => {
        return language === 'en' ? en : deepMerge(en, localePack);
    }, [language, localePack]);

    useEffect(() => {
        document.documentElement.dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
        const displayLang =
            SUPPORTED_LANGUAGES.find((lang) => lang.code === language)?.displayCode ||
            (language === 'zh' ? 'zh-CN' : language);
        document.documentElement.lang = displayLang || 'en';
    }, [language]);

    useEffect(() => {
        if (getSavedLanguage()) return;

        let cancelled = false;

        // Defer geo detection so it never blocks first paint / LCP
        const timer = window.setTimeout(() => {
            detectLanguageFromLocation().then((code) => {
                if (cancelled || !localeLoaders[code]) return;
                if (getSavedLanguage()) return;
                setLanguageState(code);
            });
        }, 4000);

        return () => {
            cancelled = true;
            window.clearTimeout(timer);
        };
    }, []);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            translations,
            localePack,
            languages: SUPPORTED_LANGUAGES,
        }),
        [language, translations, localePack]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

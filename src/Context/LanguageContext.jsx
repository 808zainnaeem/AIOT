import React, { createContext, useState, useEffect, useMemo } from 'react';
import en from '../Languages/en.json';
import ar from '../Languages/ar.json';
import da from '../Languages/da.json';
import de from '../Languages/de.json';
import es from '../Languages/es.json';
import zh from '../Languages/zh.json';
import fr from '../Languages/fr.json';
import sv from '../Languages/sv.json';
import {
    SUPPORTED_LANGUAGES,
    RTL_LANGUAGES,
    detectLanguageFromLocation,
    languageFromBrowserLocale,
} from '../Languages/languages';

export { SUPPORTED_LANGUAGES, RTL_LANGUAGES };

const translationsMap = { en, ar, da, de, es, zh, fr, sv };

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
    return translationsMap[saved] ? saved : null;
}

function getInitialLanguage() {
    return getSavedLanguage() || languageFromBrowserLocale();
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);

    const setLanguage = (code) => {
        if (!translationsMap[code]) return;
        setLanguageState(code);
        window.localStorage.setItem('aiot-language', code);
    };

    const localePack = useMemo(() => translationsMap[language] || en, [language]);

    const translations = useMemo(() => {
        const selected = translationsMap[language] || en;
        return language === 'en' ? en : deepMerge(en, selected);
    }, [language]);

    useEffect(() => {
        document.documentElement.dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
        const displayLang =
            SUPPORTED_LANGUAGES.find((lang) => lang.code === language)?.displayCode ||
            (language === 'zh' ? 'zh-CN' : language);
        document.documentElement.lang = displayLang;
    }, [language]);

    useEffect(() => {
        if (getSavedLanguage()) return;

        let cancelled = false;

        detectLanguageFromLocation().then((code) => {
            if (cancelled || !translationsMap[code]) return;
            if (getSavedLanguage()) return;
            setLanguageState(code);
        });

        return () => {
            cancelled = true;
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

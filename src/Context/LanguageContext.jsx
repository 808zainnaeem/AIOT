import React, { createContext, useState, useEffect } from 'react';
import en from '../Languages/en.json';
import ar from '../Languages/ar.json';
import da from '../Languages/da.json';
import de from '../Languages/de.json';
import es from '../Languages/es.json';
import zh from '../Languages/zh.json';
import fr from '../Languages/fr.json';
import sv from '../Languages/sv.json';
import { SUPPORTED_LANGUAGES, RTL_LANGUAGES } from '../Languages/languages';

export { SUPPORTED_LANGUAGES, RTL_LANGUAGES };

const translationsMap = { en, ar, da, de, es, zh, fr, sv };

export const LanguageContext = createContext();

function getInitialLanguage() {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('aiot-language');
    return translationsMap[saved] ? saved : 'en';
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);

    const setLanguage = (code) => {
        if (!translationsMap[code]) return;
        setLanguageState(code);
        window.localStorage.setItem('aiot-language', code);
    };

    const translations = translationsMap[language] || en;

    useEffect(() => {
        document.documentElement.dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations, languages: SUPPORTED_LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
}

// src/Context/LanguageContext.js (Unchanged as provided, assuming ar.json exists similarly)
import React, { createContext, useState, useEffect } from 'react';

// Import JSON files
import en from '../Languages/en.json';
import ar from '../Languages/ar.json';

// Export the context
export const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(en);

    useEffect(() => {
        if (language === 'en') {
            setTranslations(en);
        } else if (language === 'ar') {
            setTranslations(ar);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
}
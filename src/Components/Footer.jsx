import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import { LanguageContext, SUPPORTED_LANGUAGES } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { getSolutionsProducts, getMoreSolutionsProducts } from '../Utils/productCatalog';

export default function FooterSection() {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const footerTrans = translations.footer || {};

    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const languages = SUPPORTED_LANGUAGES;
    const solutionsProducts = getSolutionsProducts(translations);
    const moreSolutionsProducts = getMoreSolutionsProducts(translations);

    const socialIcons = [
        { Icon: Facebook, url: 'https://www.facebook.com/OfficialAIoTis/', label: 'Facebook' },
        { Icon: Twitter, url: 'https://x.com/WEAIOT', label: 'Twitter' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/company/weaiot', label: 'LinkedIn' },
    ];

    const handleNavClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            navigate(link);
        }
    };

    return (
        <div className="w-full bg-white">
            {/* Main Footer Content */}
            <div className="bg-white px-6 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        <img src="/NewLogo.png" alt="AIOT Logo" className="h-auto w-28" style={{ opacity: 1 }} />
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {footerTrans.description || 'Reshaping your future.'}
                        </p>
                        <div className="flex gap-4">
                            {socialIcons.map(({ Icon, url, label }) => (
                                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Icon size={24} className="text-gray-600 hover:text-orange-600 transition" style={{ color: '#7A7A7A', '&:hover': { color: colors.logo } }} />
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: colors.logo }}>
                            {footerTrans.quickLinks || 'Quick Links'}
                        </h4>
                        <ul className="space-y-4">
                            <li><button onClick={() => handleNavClick('/')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.home || 'Home'}</button></li>
                            <li><button onClick={() => handleNavClick('/about')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.about || 'About'}</button></li>
                            <li><button onClick={() => handleNavClick('/contact')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.contact || 'Contact Us'}</button></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: colors.logo }}>
                            {footerTrans.solutions || 'Solutions'}
                        </h4>
                        <ul className="space-y-4">
                            {solutionsProducts.map((product) => (
                                <li key={product.id}>
                                    <button
                                        type="button"
                                        onClick={() => product.url && handleNavClick(product.url)}
                                        className={`text-gray-700 text-start transition ${product.url ? 'hover:text-orange-600 cursor-pointer' : 'cursor-default'}`}
                                    >
                                        {product.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Solutions & Language */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: colors.logo }}>
                            {footerTrans.moreSolutions || 'More Solutions'}
                        </h4>
                        <ul className="space-y-4 mb-8">
                            {moreSolutionsProducts.map((product) => (
                                <li key={product.id}>
                                    <button
                                        type="button"
                                        onClick={() => product.url && handleNavClick(product.url)}
                                        className={`text-gray-700 text-start transition ${product.url ? 'hover:text-orange-600 cursor-pointer' : 'cursor-default'}`}
                                    >
                                        {product.title}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                                className="flex items-center gap-2 text-gray-700 font-medium"
                            >
                                <Globe size={20} />
                                {languages.find(l => l.code === language)?.name}
                            </button>
                            {languageDropdownOpen && (
                                <div className="absolute bottom-full mb-2 w-44 max-h-80 overflow-y-auto bg-white shadow-lg rounded-md z-10">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLanguageDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ backgroundColor: colors.logo }} className="text-white text-center py-6">
                <p className="text-sm">
                    Copyright © 2025 <span className="font-bold">AIOT</span>. All rights reserved.
                </p>
            </div>
        </div>
    );
}
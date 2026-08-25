import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function FooterSection() {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const colors = Colors[language];
    const footerTrans = translations.footer || {};

    const [email, setEmail] = useState('');
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' }
    ];

    const socialIcons = [
        { Icon: Facebook, url: 'https://www.facebook.com/OfficialAIoTis/', label: 'Facebook' },
        { Icon: Twitter, url: 'https://x.com/WEAIOT', label: 'Twitter' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/company/weaiot', label: 'LinkedIn' },
    ];

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (email) {
            console.log('Newsletter subscription:', email); // Replace with actual API call
            setEmail('');
        }
    };

    const handleNavClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            navigate(link);
        }
    };

    return (
        <div className="w-full bg-white">
            {/* Newsletter Hero Section */}
            <div className="relative h-96 md:h-80 bg-gradient-to-r from-gray-900 to-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/70"></div>
                <img
                    src="https://static.tildacdn.com/tild3238-6535-4637-b761-646136306562/AdobeStock_621130299.jpeg"
                    alt="Technology Team Collaboration"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.6 }}
                />
                <div className="relative z-10 text-center w-full px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        {footerTrans.newsletterTitle || 'GET UPDATES'}
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={footerTrans.emailPlaceholder || 'Enter your email...'}
                            className="px-6 py-4 w-full bg-white text-gray-800 focus:outline-none rounded-l-full sm:rounded-l-full sm:rounded-r-none"
                            required
                        />
                        <button
                            type="submit"
                            style={{ backgroundColor: colors.logo }}
                            className="text-white px-8 py-4 flex items-center justify-center gap-2 hover:opacity-90 transition rounded-r-full sm:rounded-r-full sm:rounded-l-none"
                        >
                            <Send size={20} />
                            <span className="hidden sm:inline">{footerTrans.subscribe || 'Subscribe'}</span>
                        </button>
                    </form>
                </div>
            </div>


            {/* Main Footer Content */}
            <div className="bg-white px-6 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        <img src="/NewLogo.png" alt="AIOT Logo" className="h-auto w-28" style={{ opacity: 1 }} />
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {footerTrans.description || 'We aim to create a future where technology is a catalyst for innovation, growth, and positive change.'}
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
                            <li><button onClick={() => handleNavClick('/solutions/all-in-one')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.allInOneSuit || 'All In One Suit'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/sap-ui')} className="text-gray-700 hover:text-orange-600 transition text-start" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.sapUI || 'SAP Business One User Interface'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/hr-system')} className="text-gray-700 hover:text-orange-600 transition text-start" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.hrSystem || 'HR Management System'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/hire-lawyer')} className="text-gray-700 hover:text-orange-600 transition text-start" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.hireLawyer || 'Hire Lawyer Online'}</button></li>
                        </ul>
                    </div>

                    {/* More Solutions & Language */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: colors.logo }}>
                            {footerTrans.moreSolutions || 'More Solutions'}
                        </h4>
                        <ul className="space-y-4 mb-8">
                            <li><button onClick={() => handleNavClick('/solutions/attendee')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.attendee || 'Attendee'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/pos')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.pos || 'POS'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/connector')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.connector || 'Connector'}</button></li>
                            <li><button onClick={() => handleNavClick('/solutions/hcm')} className="text-gray-700 hover:text-orange-600 transition" style={{ '&:hover': { color: colors.logo } }}>{footerTrans.hcm || 'HCM'}</button></li>
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
                                <div className="absolute bottom-full mb-2 w-40 bg-white shadow-lg rounded-md z-10">
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
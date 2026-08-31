// src/Components/Navbar.js (Updated with colors and language integration; design and all other things remain the same)
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight, GlobeIcon, Zap, Layers, Building, Settings, Cloud, Briefcase, Newspaper, BookOpen, Lightbulb, Users, Phone, Database, Store, Workflow, Scale, Eye, HeartPulse, Building2, Compass, RefreshCw, ClipboardList, Network, Shield, Server, Headset, HardDrive, AppWindow, Box, Lock } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
} from 'lucide-react';

import { LanguageContext, SUPPORTED_LANGUAGES } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { getSolutionsProducts, getMoreSolutionsProducts } from '../Utils/productCatalog';

const Navbar = () => {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const navbarTrans = translations.navbar || {};
    const dropdownTrans = translations.dropdown || {};
    const footerTrans = translations.footer || {};

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileDropdownItem, setMobileDropdownItem] = useState(null);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const languages = SUPPORTED_LANGUAGES;
    useEffect(() => {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
        setHoveredItem(null);
        setLanguageDropdownOpen(false);
    }, [language]);

    const socialIcons = [
        { Icon: Facebook, url: 'https://www.facebook.com/WEAIOT/', label: 'Facebook' },
        { Icon: Twitter, url: 'https://x.com/WEAIOT', label: 'Twitter' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/company/weaiot', label: 'LinkedIn' },
        { Icon: Instagram, url: 'https://www.instagram.com/weaiot/', label: 'Instagram' },
        { Icon: Youtube, url: 'https://www.youtube.com/@WEAIOT', label: 'YouTube' },
    ];

    const menuItems = [
        { id: 'home', title: navbarTrans.menu?.home || 'HOME', link: '/' },
        { id: 'aboutUs', title: navbarTrans.menu?.aboutUs || 'ABOUT US', link: '/About' },
        { id: 'whatWeDo', title: navbarTrans.menu?.whatWeDo || 'WHAT WE DO', link: '/' },
        { id: 'solutions', title: navbarTrans.menu?.solutions || 'SOLUTIONS', link: '/' },
        { id: 'resources', title: navbarTrans.menu?.resources || 'RESOURCES', link: '/' },
        { id: 'partners', title: navbarTrans.menu?.partners || 'PARTNERS', link: '/' },
        { id: 'marketplace', title: navbarTrans.menu?.marketplace || 'MARKETPLACE', link: 'https://www.nizam365.com' },
    ];

    const partners = [
        {
            name: 'SAP',
            logo: 'data:image/png;base64,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',
            desc: dropdownTrans.partners?.sapDesc || 'Partner with us to transform how SMEs operate globally using cutting-edge, cloud-based solutions.',
            url: 'https://www.sap.com',
        },
        {
            name: 'Oracle NetSuite',
            logo: 'data:image/png;base64,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',
            desc: dropdownTrans.partners?.oracleNetsuiteDesc || 'Discover the benefits of partnering with Oracle NetSuite for comprehensive business solutions.',
            url: 'https://www.netsuite.com',
        },
        {
            name: 'Microsoft',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////zUSN/uQICpO//uQH///39//r//fLr///tsxD//+Z5qQDxUSX//9wAkdHu///+/+vQjXz/9O1pudHQjXPR+PnTSx1/tAD7+coAo/HhUCXu+dP5//oAm+N4rgCAuAGnwm0Ak9e2QRXESCHBiXv/9fLu+NlvnwBzmgDVUivHiYT/9Pbr+stwqAB4pADAinLCkGfVs6Srv3T9+P/3/+/J+fr+87f7+MoAgbkNjslqqsb+78TqvD7frCJssME4QYTWAAACUElEQVR4nO3dXXPSQBSA4ZV4diEFkqKtDa6iVuoH9atUW9T6/39WN9DYXtSZwslKyLxvh7A3zeyTXTq92cEYIiIiIiIiIiIiIiIiIiIiIqKGJlJetj2LmMntpXKuNWh6d+fZfmFDUz5Lqe6irAbJv2bolK0+gTZPVeXRjOLeHKo6fjsVL3Lybk/V+zzaKrrDvqrx/sh7sc9fdjqTyaTTWb6tPZjspTGFjzQFoQ1rWAo1Idyu0CPceWH7d2n7he3fpQgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOEGwv7yZ+1Bf7w/tV7saWOF4o7Hqj58nDln5PTTM1Wf4wntl6eqvn6biTfm5OyVqjMXbZeKG2nKB84Yn4lLc12NPU8szhqTeTeaWk1iI07x78Nba3DbvGTm4aOoI8Zbw/IY9ebnr8XMZEnzmW4WNWnuvbfi2YffFevDAs7n/ly1hOFe8YgHur4fZOfOzPMfRxt3EV6DeH9Ls8vXNw1vXg8aVG/Dxc+udWJ//e6puor3P013mBRFkRSr64MHSTV48SQzYZMd9R6r6g1iCsNEN6lIdkeoqBJeINx5Yft3KUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPh/hZxGQBhTuFAJkzp3aZyDpNnlYqhp8WclvKrhdF6krwXOuqqy8nisiEsHqtKIR53rqcHf6UxERERERERERERERERERERERERb7hpQ1W08w53kmAAAAABJRU5ErkJggg==',
            desc: dropdownTrans.partners?.microsoftDesc || 'Our Microsoft Partnership enhances business capabilities with cutting-edge solutions.',
            url: 'https://partner.microsoft.com',
        },
        {
            name: 'Cloudiax',
            logo: 'https://www.cloudiax.com/wp-content/themes/cloud/image/logo_cloudiax.svg',
            desc: dropdownTrans.partners?.cloudiaxDesc || 'Cloudiax enables businesses to enhance SAP capabilities with powerful cloud solutions.',
            url: 'https://www.cloudiax.com',
        },
        {
            name: 'Cloud Solutions',
            logo: '/partners/cloud-solutions.png',
            cover: true,
            desc: dropdownTrans.partners?.cloudSolutionsDesc || 'Our expertise ensures seamless cloud migration and multi-cloud integration.',
            url: 'https://bmp-erp.com',
        },
    ];

    const getDropdownContent = (menuId) => {
        const content = {
            aboutUs: {
                cols: [
                    {
                        title: dropdownTrans.aboutUs?.whoWeAre || 'Who We Are',
                        desc: dropdownTrans.aboutUs?.whoWeAreDesc || 'We blend Artificial Intelligence and the Internet of Things to drive innovation and deliver future-ready tech solutions.',
                        url: '/about',
                        icon: Users,
                    },
                    {
                        title: dropdownTrans.aboutUs?.clientWall || 'Client wall',
                        desc: dropdownTrans.aboutUs?.clientWallDesc || 'Proudly serving industry leaders with innovative technology solutions that deliver real results.',
                        url: '/clientwall',
                        icon: Building2,
                    },
                    {
                        title: dropdownTrans.aboutUs?.contactUs || 'Contact Us',
                        desc: dropdownTrans.aboutUs?.contactUsDesc || 'Get in touch with AIOT IT Solutions your gateway to smart, innovative, and transformative tech solutions.',
                        url: '/contact',
                        icon: Phone,
                    },
                ],
                image: null,
                customPanel: true,
                imageLabel: dropdownTrans.aboutUs?.panelLabel || 'About AIOT',
            },
            whatWeDo: {
                cols: [
                    {
                        title: dropdownTrans.whatWeDo?.consulting || 'Consulting',
                        list: [
                            { text: dropdownTrans.whatWeDo?.itStrategy || 'IT Strategy & Advisory', icon: Compass, url: '/consulting' },
                            { text: dropdownTrans.whatWeDo?.digitalTransformation || 'Digital Transformation Consulting', icon: RefreshCw, url: '/consulting' },
                            { text: dropdownTrans.whatWeDo?.businessProcess || 'Business Process Consulting', icon: Workflow, url: '/consulting' },
                            { text: dropdownTrans.whatWeDo?.techAssessment || 'Technology Assessment & Roadmapping', icon: ClipboardList, url: '/consulting' },
                            { text: dropdownTrans.whatWeDo?.cloudEnterpriseArch || 'Cloud & Enterprise Architecture', icon: Network, url: '/consulting' },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.implementation || 'Implementation',
                        list: [
                            { text: dropdownTrans.whatWeDo?.enterpriseTech || 'Enterprise Technology Solutions', icon: Layers, url: '/technology-driven' },
                            { text: dropdownTrans.whatWeDo?.sapHana || 'SAP & HANA Solutions', icon: Database, url: '/sap-solutions' },
                            { text: dropdownTrans.whatWeDo?.oracleNetsuite || 'Oracle NetSuite Solutions', icon: Cloud, url: '/oracle-netsuite' },
                            { text: dropdownTrans.whatWeDo?.microsoftProduct || 'Microsoft & Product Solutions', icon: Box, url: '/next-genration' },
                            { text: dropdownTrans.whatWeDo?.utilityModernization || 'Utility Modernization', icon: Settings, url: '/utility-transformation' },
                            { text: dropdownTrans.whatWeDo?.dataSecurity || 'Data & Security Solutions', icon: Shield, url: '/technology-driven' },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.managedServices || 'Managed Services',
                        list: [
                            { text: dropdownTrans.whatWeDo?.appManagement || 'Application Management Services', icon: AppWindow, url: '/outsoursing' },
                            { text: dropdownTrans.whatWeDo?.cloudInfra || 'Cloud & Infrastructure Management', icon: Server, url: '/outsoursing' },
                            { text: dropdownTrans.whatWeDo?.itSupport || 'IT Support & Service Desk', icon: Headset, url: '/outsoursing' },
                            { text: dropdownTrans.whatWeDo?.cyberMonitoring || 'Cybersecurity & Monitoring', icon: Lock, url: '/outsoursing' },
                            { text: dropdownTrans.whatWeDo?.backupDr || 'Data, Backup & Disaster Recovery', icon: HardDrive, url: '/outsoursing' },
                        ]
                    },
                ],
                image: null,
                customPanel: true,
                imageLabel: dropdownTrans.whatWeDo?.panelLabel || 'What We Deliver',
            },
            solutions: {
                cols: [
                    {
                        title: footerTrans.solutions || dropdownTrans.solutions?.solutions || 'Solutions',
                        list: getSolutionsProducts(translations).map((product, index) => ({
                            text: product.title,
                            url: product.url,
                            brand: product.brand,
                            icon: [Database, Users, Workflow, Store, Scale][index],
                        })),
                    },
                    {
                        title: footerTrans.moreSolutions || 'More Solutions',
                        list: getMoreSolutionsProducts(translations).map((product, index) => ({
                            text: product.title,
                            url: product.url,
                            brand: product.brand,
                            icon: [Eye, HeartPulse, Building2, Cloud][index],
                        })),
                    },
                ],
                image: null
            },
            resources: {
                cols: [
                    {
                        title: dropdownTrans.resources?.news || 'News',
                        desc: dropdownTrans.resources?.newsDesc || 'Stay updated with the latest news and innovations from AIOT IT Solutions.',
                        url: '',
                        icon: Newspaper,
                    },
                    {
                        title: dropdownTrans.resources?.blogs || 'Blogs',
                        desc: dropdownTrans.resources?.blogsDesc || 'Explore insights, trends, and expert opinions on technology and innovation.',
                        url: '',
                        icon: BookOpen,
                    },
                    {
                        title: dropdownTrans.resources?.innovateWithInsights || 'Innovate with Insights',
                        desc: dropdownTrans.resources?.innovateWithInsightsDesc || 'Discover strategies to enhance your business through emerging trends and thought leadership.',
                        url: null,
                        icon: Lightbulb,
                    },
                ],
                image: null,
                customPanel: true,
                imageLabel: dropdownTrans.resources?.panelLabel || 'Knowledge Hub',
            },
            partners: {
                cols: partners.map(partner => ({
                    title: partner.name,
                    desc: partner.desc,
                    logo: partner.logo,
                    cover: partner.cover,
                    url: partner.url
                })),
            },
        };
        return content[menuId] || content.aboutUs;
    };

    const handleNavClick = (link) => {
        if (link && link.startsWith('http')) {
            const openInNewTab = !link.includes('/Plans');
            window.open(link, openInNewTab ? '_blank' : '_self', openInNewTab ? 'noopener,noreferrer' : undefined);
        } else if (link) {
            navigate(link);
        }
        setSidebarOpen(false);
        setMobileDropdownItem(null);
        setHoveredItem(null);
    };

    const toggleMobileDropdown = (index) => {
        setMobileDropdownItem(mobileDropdownItem === index ? null : index);
    };

    return (
        <>
            {/* Top Bar */}
            <div style={{ backgroundColor: colors.logo }} className="text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                        <div className="flex flex-col gap-2 text-xs font-bold ">
                            <div className="flex items-center gap-5 font-[500]">
                                <span>{navbarTrans.topBar?.phone || '+92 3123456778'}</span>
                                <span>{navbarTrans.topBar?.email || 'info@aiotcons.com'}</span>
                            </div>
                            <span className="hidden lg:block text-xs font-[500]">
                                {navbarTrans.topBar?.address || '15/1C, GECHS, PHASE III, PECO ROAD, LAHORE 54100, PUNJAB, PAKISTAN'}
                            </span>
                        </div>
                        <div className="flex items-center gap-6 justify-center">
                            <div className="flex gap-4">
                                {socialIcons.map(({ Icon, url, label }) => (
                                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label={label}>
                                        <Icon size={18} color="white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                style={{ backgroundColor: colors.background }}
                className="shadow-md sticky top-0 z-50 relative"
                onMouseLeave={() => setHoveredItem(null)}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center h-20 ${language === 'ar' ? 'justify-between gap-35' : 'justify-between'}`}>
                        <div className='flex items-center gap-40'>

                        <div onClick={() => handleNavClick('/')} className="cursor-pointer">
                            <img src="/NewLogo.png" alt="AIOT Logo" className="h-auto w-13" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 relative h-[80px]">
                            {menuItems.map((item, index) => {
                                const hasDropdown = !['home', 'marketplace'].includes(item.id);
                                const isOpen = hoveredItem === index;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.link)}
                                        onMouseEnter={() => hasDropdown && setHoveredItem(index)}
                                        className="relative h-full text-sm tracking-wider font-[500] transition-colors duration-200"
                                        style={{ color: isOpen ? colors.logo : '#111111' }}
                                    >
                                        {item.title}
                                        <span
                                            className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full transition-opacity duration-200"
                                            style={{ backgroundColor: colors.logo, opacity: isOpen ? 1 : 0 }}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                        </div>

                        <div className="relative">
                                <button
                                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                                    className="flex items-center gap-2 text-sm tracking-wider transition-all duration-200 font-[450]"
                                    style={{ color: '#000000ff' }}
                                >
                                    <GlobeIcon size={18} />
                                    {language.toUpperCase()}
                                    <svg className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {languageDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-44 max-h-80 overflow-y-auto bg-white shadow-lg rounded-md z-5000">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setLanguageDropdownOpen(false);
                                                }}
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden" style={{ color: colors.logo }}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Mega Dropdown */}
                <AnimatePresence>
                {hoveredItem !== null && !['home', 'marketplace'].includes(menuItems[hoveredItem]?.id) && (
                    <motion.div
                        key={menuItems[hoveredItem].id}
                        className="absolute top-full left-0 w-full z-50"
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
                            borderTop: `3px solid ${colors.logo}`,
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onMouseEnter={() => setHoveredItem(hoveredItem)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            {(() => {
                                const hoveredId = menuItems[hoveredItem].id;
                                const { cols, image, imageLabel, customPanel } = getDropdownContent(hoveredId);
                                const isPartners = hoveredId === 'partners';
                                const isSolutions = hoveredId === 'solutions';
                                const isWhatWeDo = hoveredId === 'whatWeDo';
                                const isResources = hoveredId === 'resources';
                                const isAboutUs = hoveredId === 'aboutUs';

                                return (
                                    <div
                                        className="grid gap-5"
                                        style={{
                                            gridTemplateColumns:
                                                isPartners
                                                    ? 'repeat(5, minmax(0, 1fr))'
                                                    : isSolutions
                                                        ? '1fr 1fr'
                                                        : 'repeat(3, 1fr) 0.95fr',
                                        }}
                                    >
                                        {cols.map((col, idx) => (
                                            <div key={idx} className="min-h-0">
                                                {isPartners ? (
                                                    <a
                                                        href={col.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group h-full rounded-2xl border bg-white p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                                        style={{ borderColor: `${colors.logo}22` }}
                                                    >
                                                        <div
                                                            className="w-full h-20 mb-4 rounded-xl flex items-center justify-center px-4"
                                                            style={{ backgroundColor: `${colors.logo}0A` }}
                                                        >
                                                            <img
                                                                src={col.logo || 'https://via.placeholder.com/150?text=Logo'}
                                                                alt={col.title}
                                                                className="max-h-12 max-w-full object-contain"
                                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
                                                            />
                                                        </div>
                                                        <h3 className="text-sm font-bold mb-2 text-gray-900">{col.title}</h3>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3 flex-1">
                                                            {col.desc}
                                                        </p>
                                                        <span
                                                            className="mt-4 text-xs font-semibold inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition"
                                                            style={{ color: colors.logo }}
                                                        >
                                                            {navbarTrans.learnMore || 'Learn More'}
                                                            <ArrowRight size={12} />
                                                        </span>
                                                    </a>
                                                ) : col.content ? (
                                                    col.content
                                                ) : col.list ? (
                                                    <div className="h-full rounded-2xl border border-orange-100 bg-[#fffaf7] p-5">
                                                        <h2 className="text-lg font-bold mb-4" style={{ color: colors.logo }}>
                                                            {col.title}
                                                        </h2>
                                                        <ul className="space-y-1">
                                                            {col.list.map((item, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-gray-700 cursor-pointer transition hover:bg-white hover:shadow-sm"
                                                                    onClick={() => handleNavClick(item.url)}
                                                                >
                                                                    {item.brand ? (
                                                                        <span
                                                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
                                                                            style={{
                                                                                backgroundColor: item.brand.innerBg || '#fff',
                                                                                border: `1px solid ${item.brand.color}22`,
                                                                            }}
                                                                        >
                                                                            <img
                                                                                src={item.brand.logo}
                                                                                alt=""
                                                                                className="w-[72%] h-[72%] object-contain"
                                                                            />
                                                                        </span>
                                                                    ) : item.icon ? (
                                                                        <span
                                                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                                                            style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                                                        >
                                                                            <item.icon size={16} />
                                                                        </span>
                                                                    ) : null}
                                                                    <span
                                                                        className="text-sm font-medium flex-1 group-hover:translate-x-0.5 transition leading-snug"
                                                                        style={
                                                                            item.brand?.gradient
                                                                                ? {
                                                                                    backgroundImage: item.brand.gradient,
                                                                                    WebkitBackgroundClip: 'text',
                                                                                    backgroundClip: 'text',
                                                                                    color: 'transparent',
                                                                                    WebkitTextFillColor: 'transparent',
                                                                                }
                                                                                : undefined
                                                                        }
                                                                    >
                                                                        {item.text}
                                                                    </span>
                                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition shrink-0" style={{ color: item.brand?.color || colors.logo }} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <div className="h-full rounded-2xl border border-orange-100 bg-[#fffaf7] p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                        {col.icon && (
                                                            <div
                                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                                                style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                                            >
                                                                <col.icon size={22} />
                                                            </div>
                                                        )}
                                                        <h2 className="text-lg font-bold mb-3" style={{ color: colors.logo }}>
                                                            {col.title}
                                                        </h2>
                                                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{col.desc}</p>
                                                        {col.url ? (
                                                            <button
                                                                onClick={() => handleNavClick(col.url)}
                                                                className="mt-5 text-sm font-semibold inline-flex items-center gap-1 w-fit"
                                                                style={{ color: colors.logo }}
                                                            >
                                                                {navbarTrans.explore || 'Explore'} {col.title}
                                                                <ArrowRight size={14} />
                                                            </button>
                                                        ) : !isSolutions && (
                                                            <button
                                                                onClick={() => handleNavClick('/contact')}
                                                                className="mt-5 text-sm font-semibold inline-flex items-center gap-1 w-fit"
                                                                style={{ color: colors.logo }}
                                                            >
                                                                {navbarTrans.explore || 'Explore'} {col.title}
                                                                <ArrowRight size={14} />
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {isAboutUs && customPanel && (
                                            <div
                                                className="relative min-h-[280px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
                                                style={{
                                                    background: `linear-gradient(155deg, ${colors.logo} 0%, #ff7a45 48%, #F65314 100%)`,
                                                }}
                                            >
                                                <div className="absolute -top-12 -left-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                                                <div className="absolute bottom-10 -right-6 w-28 h-28 rounded-full border border-white/20 pointer-events-none" />
                                                <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl rotate-12 border border-white/15 pointer-events-none" />

                                                <div className="relative">
                                                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4 text-white">
                                                        <Users size={20} />
                                                    </div>
                                                    <p className="text-white/70 text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.aboutUs?.panelTitle || 'Innovation with real impact'}
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        {dropdownTrans.aboutUs?.panelDesc || 'Discover who we are, the clients we serve, and how to start a conversation with our team.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-2.5 mt-6">
                                                    {[
                                                        { label: dropdownTrans.aboutUs?.whoWeAre || 'Who We Are', url: '/about' },
                                                        { label: dropdownTrans.aboutUs?.clientWall || 'Client wall', url: '/clientwall' },
                                                        { label: dropdownTrans.aboutUs?.contactUs || 'Contact Us', url: '/contact' },
                                                    ].map((item) => (
                                                        <button
                                                            key={item.label}
                                                            type="button"
                                                            onClick={() => handleNavClick(item.url)}
                                                            className="w-full flex items-center gap-2.5 rounded-xl bg-white/12 backdrop-blur-sm px-3 py-2.5 border border-white/15 text-left hover:bg-white/20 transition"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white text-sm font-medium flex-1">{item.label}</span>
                                                            <ArrowRight size={13} className="text-white/70" />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {isWhatWeDo && customPanel && (
                                            <div
                                                className="relative min-h-[280px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
                                                style={{
                                                    background: `linear-gradient(160deg, ${colors.logo} 0%, #F65314 55%, #c2410c 100%)`,
                                                }}
                                            >
                                                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                                                <div className="absolute bottom-8 -left-8 w-32 h-32 rounded-full border border-white/20 pointer-events-none" />
                                                <div className="absolute top-1/2 right-4 w-16 h-16 rounded-2xl rotate-12 border border-white/15 pointer-events-none" />

                                                <div className="relative">
                                                    <p className="text-white/70 text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.whatWeDo?.panelTitle || 'End-to-end digital excellence'}
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        {dropdownTrans.whatWeDo?.panelDesc || 'From strategy to run — consulting, implementation, and managed services under one partner.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-3 mt-6">
                                                    {[
                                                        dropdownTrans.whatWeDo?.consulting || 'Consulting',
                                                        dropdownTrans.whatWeDo?.implementation || 'Implementation',
                                                        dropdownTrans.whatWeDo?.managedServices || 'Managed Services',
                                                    ].map((label) => (
                                                        <div
                                                            key={label}
                                                            className="flex items-center gap-2.5 rounded-xl bg-white/12 backdrop-blur-sm px-3 py-2.5 border border-white/15"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white text-sm font-medium">{label}</span>
                                                        </div>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleNavClick('/contact')}
                                                        className="w-full mt-1 rounded-full bg-white py-2.5 text-sm font-bold hover:bg-orange-50 transition inline-flex items-center justify-center gap-1.5"
                                                        style={{ color: colors.logo }}
                                                    >
                                                        {footerTrans.contact || 'Contact Us'}
                                                        <ArrowRight size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {isResources && customPanel && (
                                            <div
                                                className="relative min-h-[280px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
                                                style={{
                                                    background: `linear-gradient(165deg, #1e293b 0%, #334155 45%, ${colors.logo} 120%)`,
                                                }}
                                            >
                                                <div className="absolute -top-8 -right-6 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                                                <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full border border-white/15 pointer-events-none" />
                                                <div
                                                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                                                    style={{
                                                        backgroundImage:
                                                            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                                                        backgroundSize: '28px 28px',
                                                    }}
                                                />

                                                <div className="relative">
                                                    <div
                                                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                                                        style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
                                                    >
                                                        <Lightbulb size={20} />
                                                    </div>
                                                    <p className="text-white/65 text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.resources?.panelTitle || 'Stay informed. Stay ahead.'}
                                                    </h3>
                                                    <p className="text-white/75 text-sm leading-relaxed">
                                                        {dropdownTrans.resources?.panelDesc || 'News, blogs, and insights to help you navigate technology trends and business transformation.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-2.5 mt-6">
                                                    {[
                                                        dropdownTrans.resources?.news || 'News',
                                                        dropdownTrans.resources?.blogs || 'Blogs',
                                                        dropdownTrans.resources?.innovateWithInsights || 'Innovate with Insights',
                                                    ].map((label) => (
                                                        <div
                                                            key={label}
                                                            className="flex items-center gap-2.5 rounded-xl bg-white/10 backdrop-blur-sm px-3 py-2.5 border border-white/10"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colors.logo }} />
                                                            <span className="text-white text-sm font-medium">{label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {!isPartners && !isSolutions && !isWhatWeDo && !isResources && !isAboutUs && image && (
                                            <div className="relative min-h-[240px] rounded-2xl overflow-hidden">
                                                <img src={image} alt={imageLabel} className="absolute inset-0 w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm tracking-wide">
                                                    {imageLabel}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </nav>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <>
                    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />
                    <div className="fixed left-0 top-0 w-72 h-full bg-white shadow-2xl z-50 overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-800">{navbarTrans.menuLabel || 'Menu'}</h3>
                            <button onClick={() => setSidebarOpen(false)} style={{ color: colors.logo }}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="py-4">
                            {menuItems.map((item, index) => {
                                const hasDropdown = !['home', 'marketplace'].includes(item.id);
                                const isOpen = mobileDropdownItem === index;
                                return (
                                    <div key={item.id}>
                                        <button
                                            onClick={() => hasDropdown ? toggleMobileDropdown(index) : handleNavClick(item.link)}
                                            className={`w-full text-left px-6 py-4 font-semibold hover:bg-gray-50 flex justify-between items-center `}
                                        >
                                            <span style={{ color: item.id === 'marketplace' ? colors.logo : '#000000ff' }}>{item.title}</span>
                                            {hasDropdown && (
                                                <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </button>
                                        {hasDropdown && isOpen && (
                                            <div className="bg-[#fffaf7] px-4 py-5 border-t border-orange-100 text-sm">
                                                {getDropdownContent(item.id).cols.filter((col) => !col.content).map((col, i) => (
                                                    <div key={i} className="mb-5 last:mb-0">
                                                            <>
                                                                <h4 className="font-bold mb-3 px-1" style={{ color: colors.logo }}>{col.title || col.name}</h4>
                                                                {col.list ? (
                                                                    <ul className="space-y-1">
                                                                        {col.list.map((li, idx) => (
                                                                            <li
                                                                                key={idx}
                                                                                className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-gray-700 cursor-pointer active:bg-white"
                                                                                onClick={() => handleNavClick(li.url)}
                                                                            >
                                                                                {li.brand ? (
                                                                                    <span
                                                                                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
                                                                                        style={{
                                                                                            backgroundColor: li.brand.innerBg || '#fff',
                                                                                            border: `1px solid ${li.brand.color}22`,
                                                                                        }}
                                                                                    >
                                                                                        <img
                                                                                            src={li.brand.logo}
                                                                                            alt=""
                                                                                            className="w-[72%] h-[72%] object-contain"
                                                                                        />
                                                                                    </span>
                                                                                ) : li.icon ? (
                                                                                    <span
                                                                                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                                                                        style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                                                                    >
                                                                                        <li.icon size={16} />
                                                                                    </span>
                                                                                ) : null}
                                                                                <span
                                                                                    className="text-sm font-medium flex-1 leading-snug"
                                                                                    style={
                                                                                        li.brand?.gradient
                                                                                            ? {
                                                                                                backgroundImage: li.brand.gradient,
                                                                                                WebkitBackgroundClip: 'text',
                                                                                                backgroundClip: 'text',
                                                                                                color: 'transparent',
                                                                                                WebkitTextFillColor: 'transparent',
                                                                                            }
                                                                                            : undefined
                                                                                    }
                                                                                >
                                                                                    {li.text}
                                                                                </span>
                                                                                <ArrowRight size={14} className="shrink-0 opacity-40" style={{ color: li.brand?.color || colors.logo }} />
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <div className="rounded-xl border border-orange-100 bg-white px-3 py-3">
                                                                        {col.logo && (
                                                                            <div
                                                                                className="w-full h-14 mb-3 rounded-lg flex items-center justify-center px-3"
                                                                                style={{ backgroundColor: `${colors.logo}0A` }}
                                                                            >
                                                                                <img
                                                                                    src={col.logo}
                                                                                    alt={col.title}
                                                                                    className="max-h-10 max-w-full object-contain"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {col.icon && (
                                                                            <div
                                                                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                                                                                style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                                                            >
                                                                                <col.icon size={18} />
                                                                            </div>
                                                                        )}
                                                                        <p className="text-gray-600 text-xs leading-relaxed mb-3">{col.desc}</p>
                                                                        {col.url && (
                                                                            <button
                                                                                onClick={() => handleNavClick(col.url)}
                                                                                className="text-sm font-semibold inline-flex items-center gap-1"
                                                                                style={{ color: colors.logo }}
                                                                            >
                                                                                {navbarTrans.exploreArrow || 'Explore →'}
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            {/* <a
                                href="https://www.nizam365.com/Plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-white px-6 py-4 font-bold mt-4 block text-center"
                                style={{ backgroundColor: colors.logo }}
                            >
                                {navbarTrans.viewPlans || 'VIEW PLANS'}
                            </a> */}
                            {/* Language Selector for Mobile */}
                            <div className="px-6 py-4 border-t border-gray-200">
                                <h4 className="font-bold mb-3" style={{ color: colors.logo }}>Language</h4>
                                <div className="flex flex-col gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setLanguage(lang.code)}
                                            className={`text-left text-sm ${language === lang.code ? 'font-bold' : 'text-gray-600'}`}
                                            style={{ color: language === lang.code ? colors.logo : undefined }}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    );
};

export default Navbar;
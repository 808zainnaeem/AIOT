// src/Components/Navbar.js (Updated with colors and language integration; design and all other things remain the same)
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight, GlobeIcon, Layers, Settings, Cloud, Newspaper, BookOpen, Lightbulb, Users, Phone, Database, Store, Workflow, Scale, Eye, HeartPulse, Building2, Compass, RefreshCw, ClipboardList, Network, Shield, Server, Headset, HardDrive, AppWindow, Box, Lock, FileText } from 'lucide-react';
import { LanguageContext, SUPPORTED_LANGUAGES } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { getSolutionsProducts, getMoreSolutionsProducts } from '../Utils/productCatalog';
import { ROUTES } from '../Utils/routes';
import { getNavPartners } from '../Utils/navPartners';
import { AIOT_SOCIAL_LINKS } from './SocialIcons';

const Navbar = () => {
    const { language, setLanguage, translations, localePack } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const navbarTrans = localePack?.navbar || translations.navbar || {};
    const dropdownTrans = localePack?.dropdown || translations.dropdown || {};
    const footerTrans = localePack?.footer || translations.footer || {};

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileDropdownItem, setMobileDropdownItem] = useState(null);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const languages = SUPPORTED_LANGUAGES; // English labels only never localize option names
    useEffect(() => {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
        setHoveredItem(null);
        setLanguageDropdownOpen(false);
    }, [language]);

    const socialIcons = AIOT_SOCIAL_LINKS;

    const menuItems = [
        { id: 'home', title: navbarTrans.menu?.home || 'Home', link: ROUTES.home },
        { id: 'aboutUs', title: navbarTrans.menu?.aboutUs || 'About Us', link: ROUTES.about, dropdown: true },
        { id: 'whatWeDo', title: navbarTrans.menu?.whatWeDo || 'What We Do', dropdown: true },
        { id: 'solutions', title: navbarTrans.menu?.solutions || 'Solutions', dropdown: true },
        { id: 'resources', title: navbarTrans.menu?.resources || 'Resources', dropdown: true },
        { id: 'partners', title: navbarTrans.menu?.partners || 'Partners', dropdown: true },
        { id: 'marketplace', title: navbarTrans.menu?.marketplace || 'Marketplace', link: 'https://www.nizam365.com' },
    ];

    const partners = getNavPartners(dropdownTrans);

    const getDropdownContent = (menuId) => {
        const content = {
            aboutUs: {
                cols: [
                    {
                        title: dropdownTrans.aboutUs?.whoWeAre || 'Who We Are',
                        desc: dropdownTrans.aboutUs?.whoWeAreDesc || 'We are a forward-thinking technology consulting company that delivers practical, scalable, and secure solutions to help businesses embrace innovation and prepare for a connected digital future.',
                        url: ROUTES.about,
                        icon: Users,
                    },
                    {
                        title: dropdownTrans.aboutUs?.clientWall || 'Client wall',
                        desc: dropdownTrans.aboutUs?.clientWallDesc || 'Proudly serving industry leaders with innovative technology solutions that deliver real results.',
                        url: ROUTES.clientWall,
                        icon: Building2,
                    },
                    {
                        title: dropdownTrans.aboutUs?.contactUs || 'Contact Us',
                        desc: dropdownTrans.aboutUs?.contactUsDesc || 'Get in touch with our IT Solutions your gateway to smart, innovative, and transformative tech solutions.',
                        url: ROUTES.contact,
                        icon: Phone,
                    },
                ],
                image: null,
                customPanel: true,
                imageLabel: dropdownTrans.aboutUs?.panelLabel || 'About us',
            },
            whatWeDo: {
                cols: [
                    {
                        title: dropdownTrans.whatWeDo?.consulting || 'Consulting',
                        list: [
                            { text: dropdownTrans.whatWeDo?.itStrategy || 'IT Strategy & Advisory', icon: Compass, url: `${ROUTES.consulting}#it-strategy` },
                            { text: dropdownTrans.whatWeDo?.digitalTransformation || 'Digital Transformation Consulting', icon: RefreshCw, url: `${ROUTES.consulting}#digital-transformation` },
                            { text: dropdownTrans.whatWeDo?.businessProcess || 'Business Process Consulting', icon: Workflow, url: `${ROUTES.consulting}#business-process` },
                            { text: dropdownTrans.whatWeDo?.techAssessment || 'Technology Assessment & Roadmapping', icon: ClipboardList, url: `${ROUTES.consulting}#tech-assessment` },
                            { text: dropdownTrans.whatWeDo?.cloudEnterpriseArch || 'Cloud & Enterprise Architecture', icon: Network, url: `${ROUTES.consulting}#cloud-architecture` },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.implementation || 'Implementation',
                        list: [
                            { text: dropdownTrans.whatWeDo?.enterpriseTech || 'Enterprise Technology Solutions', icon: Layers, url: `${ROUTES.implementation}#enterprise-tech` },
                            { text: dropdownTrans.whatWeDo?.sapHana || 'SAP & HANA Solutions', icon: Database, url: `${ROUTES.implementation}#sap-hana` },
                            { text: dropdownTrans.whatWeDo?.oracleNetsuite || 'Oracle NetSuite Solutions', icon: Cloud, url: `${ROUTES.implementation}#oracle-netsuite` },
                            { text: dropdownTrans.whatWeDo?.microsoftProduct || 'Microsoft & Product Solutions', icon: Box, url: `${ROUTES.implementation}#microsoft-product` },
                            { text: dropdownTrans.whatWeDo?.utilityModernization || 'Utility Modernization', icon: Settings, url: `${ROUTES.implementation}#utility-modernization` },
                            { text: dropdownTrans.whatWeDo?.dataSecurity || 'Data & Security Solutions', icon: Shield, url: `${ROUTES.implementation}#data-security` },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.managedServices || 'Managed Services',
                        list: [
                            { text: dropdownTrans.whatWeDo?.appManagement || 'Application Management Services', icon: AppWindow, url: `${ROUTES.managedServices}#app-management` },
                            { text: dropdownTrans.whatWeDo?.cloudInfra || 'Cloud & Infrastructure Management', icon: Server, url: `${ROUTES.managedServices}#cloud-infra` },
                            { text: dropdownTrans.whatWeDo?.itSupport || 'IT Support & Service Desk', icon: Headset, url: `${ROUTES.managedServices}#it-support` },
                            { text: dropdownTrans.whatWeDo?.cyberMonitoring || 'Cybersecurity & Monitoring', icon: Lock, url: `${ROUTES.managedServices}#cyber-monitoring` },
                            { text: dropdownTrans.whatWeDo?.backupDr || 'Data, Backup & Disaster Recovery', icon: HardDrive, url: `${ROUTES.managedServices}#backup-dr` },
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
                            icon: [Building2, Database, Users, Store, Workflow, FileText][index],
                        })),
                    },
                    {
                        title: footerTrans.moreSolutions || 'More Solutions',
                        list: getMoreSolutionsProducts(translations).map((product, index) => ({
                            text: product.title,
                            url: product.url,
                            brand: product.brand,
                            icon: [Scale, Eye, HeartPulse, Cloud][index],
                        })),
                    },
                ],
                image: null
            },
            resources: {
                cols: [
                    {
                        title: dropdownTrans.resources?.news || 'News',
                        desc: dropdownTrans.resources?.newsDesc || 'Stay up to date with the latest news and innovations from our Solutions.',
                        url: ROUTES.news,
                        icon: Newspaper,
                    },
                    {
                        title: dropdownTrans.resources?.blogs || 'Blogs',
                        desc: dropdownTrans.resources?.blogsDesc || 'Explore insights, trends, and expert opinions on technology and innovation.',
                        url: ROUTES.blogs,
                        icon: BookOpen,
                    },
                    {
                        title: dropdownTrans.resources?.innovateWithInsights || 'Innovate with Insights',
                        desc: dropdownTrans.resources?.innovateWithInsightsDesc || 'Discover strategies to enhance your business through emerging trends and thought leadership.',
                        url: ROUTES.innovateWithInsights,
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
        if (!link) {
            setSidebarOpen(false);
            setMobileDropdownItem(null);
            setHoveredItem(null);
            return;
        }
        if (link.startsWith('http')) {
            const openInNewTab = !link.includes('/Plans');
            window.open(link, openInNewTab ? '_blank' : '_self', openInNewTab ? 'noopener,noreferrer' : undefined);
        } else {
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
                                {/* <span>{navbarTrans.topBar?.phone || '+92 3123456778'}</span> */}
                                <span>{navbarTrans.topBar?.email || 'info@aiotcons.com'}</span>
                            </div>
                            {/* <span className="hidden lg:block text-xs font-[500]">
                                {navbarTrans.topBar?.address || '15/1C, GECHS, Phase III, Peco Road, Lahore 54100, Punjab, Pakistan'}
                            </span> */}
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

                        <div onClick={() => handleNavClick(ROUTES.home)} className="cursor-pointer" role="link" tabIndex={0} aria-label="AIOT home" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick(ROUTES.home); }}>
                            <img src="/NewLogo.png" alt="AIOT Logo" className="h-15 w-auto" width="120" height="48" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 relative h-[80px]">
                            {menuItems.map((item, index) => {
                                const hasDropdown = Boolean(item.dropdown);
                                const isOpen = hoveredItem === index;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                            if (hasDropdown && !item.link) return;
                                            if (item.link) handleNavClick(item.link);
                                        }}
                                        onMouseEnter={() => hasDropdown && setHoveredItem(index)}
                                        className="relative h-full text-sm tracking-wide font-[500] transition-colors duration-200"
                                        style={{ color: isOpen ? colors.logo : '#111111' }}
                                        aria-expanded={hasDropdown ? isOpen : undefined}
                                        aria-haspopup={hasDropdown ? 'true' : undefined}
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
                                    type="button"
                                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                                    className="flex items-center gap-2 text-sm tracking-wider transition-all duration-200 font-[450]"
                                    style={{ color: '#111111' }}
                                    aria-label="Select language"
                                    aria-expanded={languageDropdownOpen}
                                    aria-haspopup="listbox"
                                >
                                    <GlobeIcon size={18} aria-hidden="true" />
                                    {(languages.find((lang) => lang.code === language)?.displayCode || language).toUpperCase()}
                                    <svg className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                {hoveredItem !== null && !['home', 'marketplace'].includes(menuItems[hoveredItem]?.id) && (
                    <div
                        key={menuItems[hoveredItem].id}
                        className="absolute top-full left-0 w-full z-50 animate-[fadeIn_0.15s_ease-out]"
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
                            borderTop: `3px solid ${colors.logo}`,
                        }}
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
                                                        aria-label={`${col.title} partner website`}
                                                        className="group h-full rounded-2xl border bg-white p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                                        style={{ borderColor: `${colors.logo}22` }}
                                                    >
                                                        <div
                                                            className="w-full h-20 mb-4 rounded-xl flex items-center justify-center px-4"
                                                            style={{ backgroundColor: `${colors.logo}0A` }}
                                                        >
                                                            <img
                                                                src={col.logo || 'https://via.placeholder.com/150?text=Logo'}
                                                                alt=""
                                                                loading="lazy"
                                                                decoding="async"
                                                                className="max-h-12 max-w-full object-contain"
                                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
                                                            />
                                                        </div>
                                                        <h3 className="text-sm font-bold mb-2 text-gray-900">{col.title}</h3>
                                                        <p className="text-[11px] text-gray-700 leading-relaxed line-clamp-3 flex-1">
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
                                                                onClick={() => handleNavClick(ROUTES.contact)}
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
                                                    <p className="text-white/90 text-[11px] font-semibold tracking-wide mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.aboutUs?.panelTitle || 'Innovation with real impact'}
                                                    </h3>
                                                    <p className="text-white/90 text-sm leading-relaxed">
                                                        {dropdownTrans.aboutUs?.panelDesc || 'Discover who we are, the clients we serve, and how to start a conversation with our team.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-2.5 mt-6">
                                                    {[
                                                        { label: dropdownTrans.aboutUs?.whoWeAre || 'Who We Are', url: ROUTES.about },
                                                        { label: dropdownTrans.aboutUs?.clientWall || 'Client wall', url: ROUTES.clientWall },
                                                        { label: dropdownTrans.aboutUs?.contactUs || 'Contact Us', url: ROUTES.contact },
                                                    ].map((item) => (
                                                        <button
                                                            key={item.label}
                                                            type="button"
                                                            onClick={() => handleNavClick(item.url)}
                                                            className="w-full flex items-center gap-2.5 rounded-xl bg-white/12 backdrop-blur-sm px-3 py-2.5 border border-white/15 text-left hover:bg-white/20 transition"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white text-sm font-medium flex-1">{item.label}</span>
                                                            <ArrowRight size={13} className="text-white/90" aria-hidden="true" />
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
                                                    <p className="text-white/90 text-[11px] font-semibold tracking-wide mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.whatWeDo?.panelTitle || 'End-to-end digital excellence'}
                                                    </h3>
                                                    <p className="text-white/90 text-sm leading-relaxed">
                                                        {dropdownTrans.whatWeDo?.panelDesc || 'From strategy to run: consulting, implementation, and managed services under one partner.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-3 mt-6">
                                                    {[
                                                        {
                                                            label: dropdownTrans.whatWeDo?.consulting || 'Consulting',
                                                            url: ROUTES.consulting,
                                                        },
                                                        {
                                                            label: dropdownTrans.whatWeDo?.implementation || dropdownTrans.whatWeDo?.technology || 'Implementation',
                                                            url: ROUTES.implementation,
                                                        },
                                                        {
                                                            label: dropdownTrans.whatWeDo?.managedServices || dropdownTrans.whatWeDo?.outSourcing || 'Managed Services',
                                                            url: ROUTES.managedServices,
                                                        },
                                                    ].map(({ label, url }) => (
                                                        <button
                                                            type="button"
                                                            key={url}
                                                            onClick={() => handleNavClick(url)}
                                                            className="w-full flex items-center gap-2.5 rounded-xl bg-white/12 backdrop-blur-sm px-3 py-2.5 border border-white/15 text-left hover:bg-white/20 transition"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white text-sm font-medium flex-1">{label}</span>
                                                            <ArrowRight size={13} className="text-white/90" aria-hidden="true" />
                                                        </button>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleNavClick(ROUTES.contact)}
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
                                                    <p className="text-white/90 text-[11px] font-semibold tracking-wide mb-2">
                                                        {imageLabel}
                                                    </p>
                                                    <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                                        {dropdownTrans.resources?.panelTitle || 'Stay informed. Stay ahead.'}
                                                    </h3>
                                                    <p className="text-white/90 text-sm leading-relaxed">
                                                        {dropdownTrans.resources?.panelDesc || 'News, blogs, and insights to help you navigate technology trends and business transformation.'}
                                                    </p>
                                                </div>

                                                <div className="relative space-y-2.5 mt-6">
                                                    {[
                                                        {
                                                            label: dropdownTrans.resources?.news || 'News',
                                                            url: ROUTES.news,
                                                        },
                                                        {
                                                            label: dropdownTrans.resources?.blogs || 'Blogs',
                                                            url: ROUTES.blogs,
                                                        },
                                                        {
                                                            label: dropdownTrans.resources?.innovateWithInsights || 'Innovate with Insights',
                                                            url: ROUTES.innovateWithInsights,
                                                        },
                                                    ].map((item) => (
                                                        <button
                                                            type="button"
                                                            key={item.label}
                                                            onClick={() => handleNavClick(item.url)}
                                                            className="w-full flex items-center gap-2.5 rounded-xl bg-white/10 backdrop-blur-sm px-3 py-2.5 border border-white/10 text-left transition hover:bg-white/15"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colors.logo }} />
                                                            <span className="text-white text-sm font-medium">{item.label}</span>
                                                        </button>
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
                    </div>
                )}
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
                                const hasDropdown = Boolean(item.dropdown);
                                const isOpen = mobileDropdownItem === index;
                                return (
                                    <div key={item.id}>
                                        <button
                                            type="button"
                                            onClick={() => hasDropdown ? toggleMobileDropdown(index) : handleNavClick(item.link)}
                                            className={`w-full text-left px-6 py-4 font-semibold hover:bg-gray-50 flex justify-between items-center `}
                                            aria-expanded={hasDropdown ? isOpen : undefined}
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
                                {navbarTrans.viewPlans || 'View Plans'}
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
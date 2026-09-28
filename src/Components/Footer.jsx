import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Globe,
    ArrowRight,
    ArrowUpRight,
    Briefcase,
    Layers,
    Headset,
} from 'lucide-react';
import { LanguageContext, SUPPORTED_LANGUAGES } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { getSolutionsProducts, getMoreSolutionsProducts } from '../Utils/productCatalog';
import { ROUTES } from '../Utils/routes';
import { AIOT_SOCIAL_LINKS } from './SocialIcons';

export default function FooterSection() {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const footerTrans = translations.footer || {};
    const navbarTrans = translations.navbar || {};
    const dropdownTrans = translations.dropdown || {};
    const whatWeDoTrans = translations.whatWeDoSection || {};

    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const languages = SUPPORTED_LANGUAGES;
    const solutionsProducts = getSolutionsProducts(translations);
    const moreSolutionsProducts = getMoreSolutionsProducts(translations);

    const socialIcons = AIOT_SOCIAL_LINKS;

    const quickLinks = [
        { label: navbarTrans.menu?.home || 'Home', link: ROUTES.home },
        { label: navbarTrans.menu?.aboutUs || 'About Us', link: ROUTES.about },
        {
            label: dropdownTrans.whatWeDo?.consulting || whatWeDoTrans.consulting || 'Consulting',
            link: ROUTES.consulting,
        },
        { label: dropdownTrans.resources?.news || 'News', link: ROUTES.news },
        { label: navbarTrans.menu?.contactUs || footerTrans.contact || 'Contact Us', link: ROUTES.contact },
        {
            label: navbarTrans.menu?.marketplace || 'Marketplace',
            link: 'https://www.nizam365.com/Plans',
        },
    ];

    const whatWeDoLinks = [
        {
            label: dropdownTrans.whatWeDo?.consulting || whatWeDoTrans.consulting || 'Consulting',
            link: ROUTES.consulting,
            icon: Briefcase,
        },
        {
            label: dropdownTrans.whatWeDo?.implementation || whatWeDoTrans.implementation || 'Implementation',
            link: ROUTES.implementation,
            icon: Layers,
        },
        {
            label: dropdownTrans.whatWeDo?.managedServices || whatWeDoTrans.managedServices || 'Managed Services',
            link: ROUTES.managedServices,
            icon: Headset,
        },
    ];

    const LinkItem = ({ label, link, external }) => {
        if (!link) {
            return (
                <li>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-700">
                        <span
                            className="w-1.5 h-1.5 rounded-full opacity-40 shrink-0"
                            style={{ backgroundColor: colors.logo }}
                        />
                        <span className="leading-snug">{label}</span>
                    </span>
                </li>
            );
        }

        const className =
            'group w-full text-start text-sm text-gray-600 transition inline-flex items-center gap-2 hover:text-gray-900';

        const inner = (
            <>
                <span
                    className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition shrink-0"
                    style={{ backgroundColor: colors.logo }}
                />
                <span className="flex-1 leading-snug">{label}</span>
                {external && (
                    <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition shrink-0"
                        style={{ color: colors.logo }}
                    />
                )}
            </>
        );

        return (
            <li>
                {external ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
                        {inner}
                    </a>
                ) : (
                    <Link to={link} className={className}>
                        {inner}
                    </Link>
                )}
            </li>
        );
    };

    const ColumnTitle = ({ children }) => (
        <div className="mb-5">
            <h4 className="font-bold text-[15px] text-gray-900 tracking-wide">{children}</h4>
            <div className="mt-3 h-0.5 w-10 rounded-full" style={{ backgroundColor: colors.logo }} />
        </div>
    );

    return (
        <footer key={language} className="w-full relative overflow-hidden bg-white">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse 50% 40% at 0% 0%, ${colors.logo}12, transparent 60%),
                        radial-gradient(ellipse 45% 35% at 100% 20%, ${colors.logo}0D, transparent 55%),
                        linear-gradient(180deg, #ffffff 0%, #fffaf7 100%)
                    `,
                }}
            />

            <div className="relative px-6 py-14 md:py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    <div className="lg:col-span-3 space-y-5">
                        <Link to={ROUTES.home} aria-label="AIOT home">
                            <img src="/NewLogo.png" alt="AIOT Logo" className="h-auto w-20" width="80" height="80" />
                        </Link>

                        <div
                            className="rounded-2xl p-4"
                            style={{
                                backgroundColor: `${colors.logo}0A`,
                                border: `1px solid ${colors.logo}18`,
                            }}
                        >
                            <p className="text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                                {footerTrans.followUs || 'Follow Us'}
                            </p>
                            <div className="flex flex-wrap items-center gap-2.5">
                                {socialIcons.map(({ Icon, url, label }) => (
                                    <a
                                        key={label}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transition hover:scale-105 hover:shadow-sm"
                                        style={{ color: colors.logo, border: `1px solid ${colors.logo}22` }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <ColumnTitle>{footerTrans.quickLinks || 'Quick Links'}</ColumnTitle>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <LinkItem
                                    key={item.label}
                                    label={item.label}
                                    link={item.link}
                                    external={item.link?.startsWith('http')}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <ColumnTitle>{navbarTrans.menu?.whatWeDo || 'What We Do'}</ColumnTitle>
                        <ul className="space-y-3.5 mb-6">
                            {whatWeDoLinks.map(({ label, link, icon: Icon }) => (
                                <li key={label}>
                                    <Link
                                        to={link}
                                        className="group w-full text-start rounded-xl px-3 py-2.5 transition hover:bg-white inline-flex items-center gap-2.5 border border-transparent hover:shadow-sm"
                                        style={{ borderColor: 'transparent' }}
                                    >
                                        <span
                                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                        >
                                            <Icon size={15} />
                                        </span>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            {label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="relative">
                            <p className="text-xs tracking-wide text-gray-700 mb-2.5">
                                {footerTrans.language || 'Language'}
                            </p>
                            <button
                                type="button"
                                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                                aria-expanded={languageDropdownOpen}
                                aria-label={footerTrans.language || 'Language'}
                                className="flex items-center gap-2 text-gray-700 font-medium text-sm rounded-full border bg-white px-4 py-2.5 transition hover:shadow-sm w-full justify-between"
                                style={{ borderColor: `${colors.logo}33` }}
                            >
                                <span className="inline-flex items-center gap-2">
                                    <Globe size={16} style={{ color: colors.logo }} aria-hidden="true" />
                                    {languages.find((l) => l.code === language)?.name}
                                </span>
                                <ArrowRight
                                    size={14}
                                    className={`transition ${languageDropdownOpen ? '-rotate-90' : 'rotate-90'} text-gray-700`}
                                    aria-hidden="true"
                                />
                            </button>
                            {languageDropdownOpen && (
                                <div
                                    className="absolute bottom-full mb-2 w-full max-h-64 overflow-y-auto bg-white border shadow-xl rounded-xl z-10"
                                    style={{ borderColor: `${colors.logo}22` }}
                                    role="listbox"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            type="button"
                                            role="option"
                                            aria-selected={language === lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLanguageDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2.5 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-orange-50/70 transition"
                                            style={
                                                language === lang.code
                                                    ? { color: colors.logo, fontWeight: 600 }
                                                    : undefined
                                            }
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <ColumnTitle>{footerTrans.solutions || 'Solutions'}</ColumnTitle>
                        <ul className="space-y-3">
                            {solutionsProducts.map((product) => (
                                <LinkItem
                                    key={product.id}
                                    label={product.title}
                                    link={product.url}
                                    external={Boolean(product.url)}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <ColumnTitle>{footerTrans.moreSolutions || 'More Solutions'}</ColumnTitle>
                        <ul className="space-y-3">
                            {moreSolutionsProducts.map((product) => (
                                <LinkItem
                                    key={product.id}
                                    label={product.title}
                                    link={product.url}
                                    external={Boolean(product.url)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative border-t" style={{ borderColor: `${colors.logo}18` }}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="text-sm text-gray-700 text-center md:text-start order-2 md:order-1"
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                        {(
                            footerTrans.copyright ||
                            `Copyright © {year} AIOT. ${footerTrans.rights || 'All rights reserved.'}`
                        ).replace('{year}', String(new Date().getFullYear()))}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm order-1 md:order-2">
                        <Link
                            to={ROUTES.contact}
                            className="font-medium inline-flex items-center gap-1.5 transition hover:opacity-80"
                            style={{ color: colors.logo }}
                        >
                            {footerTrans.contact || 'Contact Us'}
                            <ArrowRight size={14} className={language === 'ar' ? 'rotate-180' : ''} aria-hidden="true" />
                        </Link>
                        <span className="text-gray-300" aria-hidden="true">
                            |
                        </span>
                        <Link
                            to={ROUTES.termsOfService}
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            {footerTrans.termsAndConditions || 'Terms of Service'}
                        </Link>
                        <span className="text-gray-300" aria-hidden="true">
                            |
                        </span>
                        <Link
                            to={ROUTES.privacyPolicy}
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            {footerTrans.privacyPolicy || 'Privacy Policy'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

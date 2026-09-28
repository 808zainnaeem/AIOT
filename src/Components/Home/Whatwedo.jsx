import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Utils/routes';

function ConsultingArt({ accent }) {
    return (
        <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
            <circle cx="100" cy="70" r="28" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.9" />
            <circle cx="100" cy="70" r="8" fill={accent} />
            {[
                [42, 38],
                [158, 38],
                [42, 102],
                [158, 102],
                [100, 18],
                [100, 122],
            ].map(([x, y], i) => (
                <g key={i}>
                    <line x1="100" y1="70" x2={x} y2={y} stroke={accent} strokeWidth="1.5" opacity="0.35" />
                    <circle cx={x} cy={y} r="6" fill="#fff" stroke={accent} strokeWidth="2" />
                </g>
            ))}
        </svg>
    );
}

function ImplementationArt({ accent }) {
    return (
        <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
            <rect x="36" y="78" width="40" height="36" rx="4" fill={accent} opacity="0.25" stroke={accent} strokeWidth="2" />
            <rect x="80" y="52" width="40" height="62" rx="4" fill={accent} opacity="0.45" stroke={accent} strokeWidth="2" />
            <rect x="124" y="28" width="40" height="86" rx="4" fill={accent} opacity="0.75" stroke={accent} strokeWidth="2" />
            <path
                d="M48 70 L96 44 L140 24"
                fill="none"
                stroke={accent}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 6"
                opacity="0.7"
            />
            <circle cx="48" cy="70" r="4" fill={accent} />
            <circle cx="96" cy="44" r="4" fill={accent} />
            <circle cx="140" cy="24" r="4" fill={accent} />
        </svg>
    );
}

function ManagedArt({ accent }) {
    return (
        <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
            <circle cx="100" cy="70" r="46" fill="none" stroke={accent} strokeWidth="2" opacity="0.25" />
            <circle cx="100" cy="70" r="32" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.55" strokeDasharray="8 10" />
            <circle cx="100" cy="70" r="18" fill={accent} opacity="0.2" stroke={accent} strokeWidth="2" />
            <path
                d="M100 52 L112 70 L100 88 L88 70 Z"
                fill={accent}
                opacity="0.85"
            />
            <circle cx="100" cy="22" r="5" fill={accent} />
            <circle cx="148" cy="70" r="5" fill={accent} opacity="0.7" />
            <circle cx="100" cy="118" r="5" fill={accent} opacity="0.5" />
            <circle cx="52" cy="70" r="5" fill={accent} opacity="0.7" />
        </svg>
    );
}

const ART_BY_STEP = {
    '01': ConsultingArt,
    '02': ImplementationArt,
    '03': ManagedArt,
};

export default function WhatWeDo() {
    const navigate = useNavigate();
    const { translations, language, localePack } = useContext(LanguageContext);
    const t = { ...translations, whatWeDoSection: localePack?.whatWeDoSection || translations.whatWeDoSection };
    const isRTL = language === 'ar';
    const colors = Colors[language] || Colors.en;
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const fallback = {
        title: 'What We Do',
        subtitle: 'Tailored Solutions for Intelligent Connectivity',
        consulting: 'Consulting',
        consultingDesc: 'We assist in creating a digital strategy that leads to technology-driven business success...',
        implementation: 'Implementation',
        implementationDesc: 'Our experts in all major technologies and business functions, empower us to deliver comprehensive business solutions.',
        managedServices: 'Managed Services',
        managedServicesDesc: 'Our Global Managed Services team secures your digital investment with monitoring, maintenance, and end-to-end 24×7 support.',
    };

    const services = [
        {
            step: '01',
            title: t.whatWeDoSection?.consulting || fallback.consulting,
            desc: t.whatWeDoSection?.consultingDesc || fallback.consultingDesc,
            link: ROUTES.consulting,
        },
        {
            step: '02',
            title: t.whatWeDoSection?.implementation || fallback.implementation,
            desc: t.whatWeDoSection?.implementationDesc || fallback.implementationDesc,
            link: ROUTES.implementation,
        },
        {
            step: '03',
            title: t.whatWeDoSection?.managedServices || fallback.managedServices,
            desc: t.whatWeDoSection?.managedServicesDesc || fallback.managedServicesDesc,
            link: ROUTES.managedServices,
        },
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.16, delayChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 36 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: 'easeOut' },
        },
    };

    return (
        <section
            key={language}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative overflow-hidden py-20 px-6 md:py-28"
            style={{ backgroundColor: colors.background, color: colors.text }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 70% 45% at 50% -10%, ${colors.logo}28, transparent 60%),
                        linear-gradient(${isRTL ? '255deg' : '105deg'}, transparent 40%, ${colors.logo}08 50%, transparent 60%)
                    `,
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className={`relative mb-14 md:mb-20 ${isRTL ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} text-center`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.span
                        className="absolute top-0 bottom-0 w-1 rounded-full hidden md:block"
                        style={{
                            background: `linear-gradient(180deg, ${colors.logo}, ${colors.logo}22)`,
                            [isRTL ? 'right' : 'left']: 0,
                        }}
                        variants={{
                            hidden: { scaleY: 0 },
                            visible: { scaleY: 1, transition: { duration: 0.7, ease: 'easeOut' } },
                        }}
                    />

                    <motion.div
                        className="inline-flex items-center gap-3 mb-5"
                        variants={headerVariants}
                    >
                        <span
                            className="h-px w-8 md:hidden"
                            style={{ backgroundColor: colors.logo }}
                        />
                        <p
                            className="text-sm font-semibold tracking-[0.22em] uppercase"
                            style={{ color: colors.logo }}
                        >
                            {t.whatWeDoSection?.title || fallback.title}
                        </p>
                    </motion.div>

                    <h3
                       className="text-2xl md:text-3xl font-bold mb-5 leading-[1.15]"
                       style={{ color: colors.text }}
                        variants={headerVariants}
                    >
                        {t.whatWeDoSection?.subtitle || fallback.subtitle}
                    </h3>

                    <motion.div
                        className="mt-6 h-1 w-20 rounded-full mx-auto md:mx-0"
                        style={{ backgroundColor: colors.logo }}
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 0.65 } },
                        }}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => {
                        const Art = ART_BY_STEP[service.step];
                        return (
                            <motion.article
                                key={service.step}
                                className="group relative outline-none"
                                tabIndex={0}
                                variants={itemVariants}
                                onClick={() => service.link && navigate(service.link)}
                                onKeyDown={(e) => {
                                    if ((e.key === 'Enter' || e.key === ' ') && service.link) {
                                        e.preventDefault();
                                        navigate(service.link);
                                    }
                                }}
                            >
                                <div
                                    className={`
                                        relative h-full cursor-pointer px-6 py-8 md:px-8 md:py-10
                                        transition-colors duration-300
                                        group-hover:bg-[#0f172a]/[0.03] group-focus-within:bg-[#0f172a]/[0.03]
                                        ${index > 0 ? 'md:border-s' : ''}
                                    `}
                                    style={{
                                        borderColor: `${colors.logo}28`,
                                    }}
                                >
                                    <div className="mb-6">
                                        <span
                                            className="block text-5xl md:text-6xl font-black leading-none select-none transition-transform duration-500 group-hover:-translate-y-1"
                                            style={{ color: `${colors.logo}22` }}
                                        >
                                            {service.step}
                                        </span>
                                    </div>

                                    <motion.div
                                        className="relative mx-auto mb-8 h-28 w-full max-w-[200px]"
                                        whileHover={{ scale: 1.04 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-70"
                                            style={{ background: `${colors.logo}33` }}
                                        />
                                        <div className="relative h-full">
                                            <Art accent={colors.logo} />
                                        </div>
                                    </motion.div>

                                    <h3
                                        className="text-2xl font-bold mb-3 leading-snug"
                                        style={{ color: colors.text }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-[15px] leading-relaxed text-gray-600 mb-8 min-h-[4.5rem]">
                                        {service.desc}
                                    </p>

                                    <div
                                        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 group-hover:gap-3"
                                        style={{ color: colors.logo }}
                                        aria-hidden="true"
                                    >
                                        <Arrow
                                            size={18}
                                            className={`transition-transform duration-300 ${
                                                isRTL
                                                    ? 'group-hover:-translate-x-1'
                                                    : 'group-hover:translate-x-1'
                                            }`}
                                        />
                                    </div>

                                    <span
                                        className={`absolute inset-x-6 bottom-0 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100 md:inset-x-8 ${
                                            isRTL ? 'origin-right' : 'origin-left'
                                        }`}
                                        style={{ backgroundColor: colors.logo }}
                                    />
                                </div>

                                {index < services.length - 1 && (
                                    <div
                                        className="hidden lg:flex absolute top-[42%] z-10 items-center justify-center w-8 h-8 rounded-full bg-white border -translate-y-1/2"
                                        style={{
                                            borderColor: `${colors.logo}40`,
                                            color: colors.logo,
                                            [isRTL ? 'left' : 'right']: '-1rem',
                                        }}
                                    >
                                        <Arrow size={14} />
                                    </div>
                                )}
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

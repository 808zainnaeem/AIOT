import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Lightbulb,
    Compass,
    LineChart,
    Layers,
    Sparkles,
    Target,
} from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function InnovateWithInsights() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.insightsPage || {};
    const isRTL = language === 'ar';
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const pillars = [
        {
            Icon: Compass,
            title: t.pillar1Title || 'Strategy with clarity',
            desc:
                t.pillar1Desc ||
                'Define where technology creates the most value and build a roadmap your teams can execute with confidence.',
        },
        {
            Icon: Layers,
            title: t.pillar2Title || 'Connected capabilities',
            desc:
                t.pillar2Desc ||
                'Align people, processes, data, and platforms so operations become smarter, faster, and more resilient.',
        },
        {
            Icon: LineChart,
            title: t.pillar3Title || 'Measurable outcomes',
            desc:
                t.pillar3Desc ||
                'Focus on efficiency, growth, and customer impact — not technology for its own sake.',
        },
    ];

    const insights = t.insights || [
        {
            step: '01',
            title: 'Start with the business challenge',
            desc: 'Frame transformation around outcomes — productivity, experience, resilience — then select the right technology path.',
        },
        {
            step: '02',
            title: 'Design for scale and security',
            desc: 'Build foundations that support growth, protect critical systems, and adapt as markets and customer needs evolve.',
        },
        {
            step: '03',
            title: 'Activate insight across the organisation',
            desc: 'Turn data and intelligent automation into everyday decision support for leaders and frontline teams.',
        },
        {
            step: '04',
            title: 'Sustain momentum with partners',
            desc: 'Combine continuous innovation with customer-centric delivery so progress compounds over time.',
        },
    ];

    return (
        <div className="bg-white" dir={isRTL ? 'rtl' : 'ltr'} key={language}>
            <div
                className="relative h-72 md:h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url(https://static.tildacdn.com/tild3331-3664-4335-b637-376462333066/image.png)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: colors.logo }}>
                        {t.eyebrow || 'Resources'}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight">
                        <span style={{ color: colors.logo }}>
                            {(t.title || 'Innovate with Insights').split(' ')[0]}
                        </span>{' '}
                        {(t.title || 'Innovate with Insights').split(' ').slice(1).join(' ')}
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl">
                        {t.subtitle ||
                            'Thought leadership and practical strategies to help your organisation transform, innovate, and thrive.'}
                    </p>
                </div>
            </div>

            <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-8">
                <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
                    style={{ background: `${colors.logo}22` }}
                />

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <p
                                className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                                style={{ color: colors.logo }}
                            >
                                {t.introLabel || 'Thought Leadership'}
                            </p>
                            <div
                                className={`w-14 h-1 mb-6 rounded-full ${isRTL ? 'ml-auto' : ''}`}
                                style={{ backgroundColor: colors.logo }}
                            />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                                {t.introTitle || 'Turn emerging trends into lasting advantage'}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {t.introDesc1 ||
                                    'Innovate with Insights brings together strategy, industry perspective, and technology expertise to help leaders navigate change with clarity.'}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {t.introDesc2 ||
                                    'From digital transformation and intelligent automation to secure, scalable platforms — we share frameworks that move organisations from ambition to execution.'}
                            </p>
                            <button
                                type="button"
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition hover:opacity-90"
                                style={{ backgroundColor: colors.logo }}
                            >
                                {t.cta || 'Discuss your roadmap'}
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden rounded-2xl min-h-[300px]"
                            style={{ boxShadow: '0 16px 40px rgba(15, 23, 42, 0.1)' }}
                            variants={fadeUp}
                        >
                            <img
                                src="https://www.tierpoint.com/wp-content/uploads/2024/09/Exploring-The-Latest-Cloud-Computing-Innovation-Trends_blog.png"
                                alt="Innovate with insights"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                                    style={{ backgroundColor: colors.logo }}
                                >
                                    <Lightbulb size={20} className="text-white" />
                                </div>
                                <p className="text-lg font-semibold leading-snug">
                                    {t.quote ||
                                        'Technology creates the most value when it is practical, secure, and designed around real customer needs.'}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {pillars.map(({ Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                className="rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1"
                                style={{ boxShadow: '0 10px 28px rgba(15, 23, 42, 0.06)' }}
                                variants={fadeUp}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                                    style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                >
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative py-16 md:py-20 px-6 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={stagger}
                    >
                        <motion.p
                            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                            style={{ color: colors.logo }}
                            variants={fadeUp}
                        >
                            {t.frameworkLabel || 'Insight Framework'}
                        </motion.p>
                        <motion.div
                            className="w-16 h-1 mx-auto mb-6 rounded-full"
                            style={{ backgroundColor: colors.logo }}
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { duration: 0.7 } },
                            }}
                        />
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={fadeUp}>
                            {t.frameworkTitle || 'A practical path from idea to impact'}
                        </motion.h2>
                        <motion.p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeUp}>
                            {t.frameworkDesc ||
                                'Use this simple lens to prioritise initiatives, reduce risk, and keep transformation focused on sustainable growth.'}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {insights.map((item) => (
                            <motion.div
                                key={item.step}
                                className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-6 md:p-7"
                                style={{ boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)' }}
                                variants={fadeUp}
                            >
                                <span
                                    className="text-3xl font-black leading-none shrink-0"
                                    style={{ color: `${colors.logo}55` }}
                                >
                                    {item.step}
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center text-white"
                        style={{
                            background: `linear-gradient(155deg, #1e293b 0%, #334155 45%, ${colors.logo} 120%)`,
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                        <div className="relative">
                            <div className="flex justify-center gap-3 mb-5">
                                <Sparkles size={20} className="text-white/80" />
                                <Target size={20} className="text-white/80" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                {t.bannerTitle || 'Ready to innovate with purpose?'}
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                                {t.bannerDesc ||
                                    'Partner with AIOT to translate insights into secure, scalable solutions that improve efficiency and create long-term value.'}
                            </p>
                            <button
                                type="button"
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white transition hover:opacity-95"
                                style={{ color: colors.logo }}
                            >
                                {t.bannerCta || 'Start a conversation'}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

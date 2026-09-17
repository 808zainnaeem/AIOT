import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function News() {
    const { translations, language, localePack } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.newsPage || {};
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

    const fallbackItems = [
        {
            tag: 'Announcement',
            date: 'Sep 2026',
            title: 'AIOT expands regional presence across Asia and Europe',
            excerpt: 'New delivery hubs and partner programmes strengthen how we support clients through digital transformation.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop',
            featured: true,
        },
        {
            tag: 'Product',
            date: 'Aug 2026',
            title: 'Intelligent automation updates across our enterprise suite',
            excerpt: 'Fresh capabilities that help teams streamline operations and act on real-time insights.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=480&fit=crop',
        },
        {
            tag: 'Partnership',
            date: 'Jul 2026',
            title: 'Strategic partnerships accelerate cloud and ERP delivery',
            excerpt: 'Deeper collaboration with leading platforms to bring scalable solutions to market faster.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=480&fit=crop',
        },
        {
            tag: 'Company',
            date: 'Jun 2026',
            title: 'AIOT recognised for customer-focused technology consulting',
            excerpt: 'A milestone that reflects our commitment to practical innovation and lasting business value.',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=480&fit=crop',
        },
    ];

    const localItems = localePack?.newsPage?.items;
    const items =
        Array.isArray(localItems) && localItems.length > 0
            ? localItems
            : t.items || fallbackItems;

    const featured = items.find((item) => item.featured) || items[0];
    const rest = items.filter((item) => item !== featured);

    return (
        <div className="bg-white" dir={isRTL ? 'rtl' : 'ltr'} key={language}>
            <div
                className="relative h-72 md:h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url(https://www.fia.com/sites/default/files/shutterstock_1022824408.jpg)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: colors.logo }}>
                        {t.eyebrow || 'Resources'}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.logo }}>{(t.title || 'News').split(' ')[0]}</span>
                        {(t.title || 'News').includes(' ') ? ` ${(t.title || '').split(' ').slice(1).join(' ')}` : ''}
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl">
                        {t.subtitle || 'Company updates, product releases, and milestones shaping the future of AIOT.'}
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
                        className="text-center mb-14"
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
                            {t.sectionLabel || 'Latest Updates'}
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
                            {t.sectionTitle || 'Stay informed with AIOT news'}
                        </motion.h2>
                        <motion.p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeUp}>
                            {t.sectionDesc ||
                                'Follow announcements, launches, and partnership stories that reflect how we help organisations innovate with confidence.'}
                        </motion.p>
                    </motion.div>

                    <motion.article
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={stagger}
                    >
                        <motion.div
                            className="overflow-hidden rounded-2xl min-h-[280px] lg:min-h-[360px]"
                            style={{ boxShadow: '0 16px 40px rgba(15, 23, 42, 0.1)' }}
                            variants={fadeUp}
                        >
                            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div className="flex flex-col justify-center" variants={fadeUp}>
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                >
                                    <Newspaper size={13} />
                                    {featured.tag}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                                    <Calendar size={14} />
                                    {featured.date}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                                {featured.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                            <button
                                type="button"
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition hover:opacity-90"
                                style={{ backgroundColor: colors.logo }}
                            >
                                {t.cta || 'Talk to our team'}
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    </motion.article>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {rest.map((item) => (
                            <motion.article
                                key={item.title}
                                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1"
                                style={{ boxShadow: '0 10px 28px rgba(15, 23, 42, 0.06)' }}
                                variants={fadeUp}
                            >
                                <div className="h-44 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.logo }}>
                                            {item.tag}
                                        </span>
                                        <span className="text-xs text-gray-500">{item.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.excerpt}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

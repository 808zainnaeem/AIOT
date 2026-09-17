import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function Blogs() {
    const { translations, language, localePack } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.blogsPage || {};
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

    const localPosts = localePack?.blogsPage?.posts;
    const posts =
        Array.isArray(localPosts) && localPosts.length > 0
            ? localPosts
            : t.posts || [
        {
            category: 'Digital Transformation',
            readTime: '6 min read',
            title: 'How intelligent systems turn complexity into clarity',
            excerpt: 'Practical ways to connect people, processes, and platforms so decisions move faster across the business.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=520&fit=crop',
        },
        {
            category: 'Cloud & ERP',
            readTime: '5 min read',
            title: 'Building scalable foundations for growth',
            excerpt: 'Why secure, adaptable technology architecture is the difference between short-term fixes and long-term value.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=520&fit=crop',
        },
        {
            category: 'AI & Automation',
            readTime: '7 min read',
            title: 'From insight to action with smarter operations',
            excerpt: 'Explore how automation and analytics help teams improve efficiency without losing the human context.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=520&fit=crop',
        },
        {
            category: 'Cybersecurity',
            readTime: '4 min read',
            title: 'Security that supports innovation, not slows it',
            excerpt: 'A customer-first view of protecting systems while keeping delivery agile and business outcomes clear.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=520&fit=crop',
        },
        {
            category: 'Leadership',
            readTime: '5 min read',
            title: 'Leading change in a connected digital world',
            excerpt: 'Guidance for organisations navigating transformation with confidence, clarity, and measurable progress.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=520&fit=crop',
        },
        {
            category: 'Industry Trends',
            readTime: '6 min read',
            title: 'What emerging technology means for tomorrow’s enterprises',
            excerpt: 'Trends worth watching and how to adopt them with a practical, outcome-driven roadmap.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=520&fit=crop',
        },
    ];

    return (
        <div className="bg-white" dir={isRTL ? 'rtl' : 'ltr'} key={language}>
            <div
                className="relative h-72 md:h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url(https://singularityhub.com/uploads/2018/06/computer-chip-circuit-board_664284316.jpg?auto=webp)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: colors.logo }}>
                        {t.eyebrow || 'Resources'}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.logo }}>{(t.title || 'Blogs').split(' ')[0]}</span>
                        {(t.title || 'Blogs').includes(' ') ? ` ${(t.title || '').split(' ').slice(1).join(' ')}` : ''}
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl">
                        {t.subtitle || 'Insights, trends, and expert perspectives on technology and business innovation.'}
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
                            {t.sectionLabel || 'From the Blog'}
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
                            {t.sectionTitle || 'Ideas that help you move forward'}
                        </motion.h2>
                        <motion.p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeUp}>
                            {t.sectionDesc ||
                                'Explore practical articles on digital transformation, intelligent technology, and building resilient, growth-ready organisations.'}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={stagger}
                    >
                        {posts.map((post) => (
                            <motion.article
                                key={post.title}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1"
                                style={{ boxShadow: '0 10px 28px rgba(15, 23, 42, 0.06)' }}
                                variants={fadeUp}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <span
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold"
                                            style={{ color: colors.logo }}
                                        >
                                            <BookOpen size={13} />
                                            {post.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                                    <span
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold"
                                        style={{ color: colors.logo }}
                                    >
                                        {t.readMore || 'Read article'}
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 rounded-2xl p-8 md:p-10 text-center"
                        style={{
                            backgroundColor: `${colors.logo}0A`,
                            border: `1px solid ${colors.logo}22`,
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {t.ctaTitle || 'Want tailored guidance for your business?'}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                            {t.ctaDesc ||
                                'Our consultants help you turn ideas into secure, scalable technology programmes that deliver measurable outcomes.'}
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate('/contact')}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition hover:opacity-90"
                            style={{ backgroundColor: colors.logo }}
                        >
                            {t.cta || 'Get in touch'}
                            <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

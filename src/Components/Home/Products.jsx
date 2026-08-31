import React, { useContext, useEffect, useRef, useState } from 'react';
import { Database, Users, Scale, Cloud, Store, Workflow, Eye, HeartPulse, Building2, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { getProductCatalog } from '../../Utils/productCatalog';
import { motion, useInView } from 'framer-motion';

const GAP = 28;
const MEDIA_SIZE = 64;

const ICONS = [Database, Users, Workflow, Store, Scale, Eye, HeartPulse, Building2, Cloud];

function getVisibleCount() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

export default function OurProducts() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.ourProducts || {};
    const isRTL = language === 'ar';

    const products = getProductCatalog(translations).map((item, index) => ({
        ...item,
        Icon: ICONS[index],
    }));

    const sectionRef = useRef(null);
    const viewportRef = useRef(null);
    const inView = useInView(sectionRef, { amount: 0.35 });
    const [visible, setVisible] = useState(3);
    const [index, setIndex] = useState(0);
    const [step, setStep] = useState(0);
    const [paused, setPaused] = useState(false);
    const maxIndex = Math.max(0, products.length - visible);

    const measure = () => {
        const nextVisible = getVisibleCount();
        setVisible(nextVisible);
        const viewport = viewportRef.current;
        if (!viewport) return;
        const cardWidth = Math.floor((viewport.clientWidth - GAP * (nextVisible - 1)) / nextVisible);
        setStep(cardWidth + GAP);
        setIndex((current) => Math.min(current, Math.max(0, products.length - nextVisible)));
    };

    useEffect(() => {
        const frame = window.requestAnimationFrame(measure);
        window.addEventListener('resize', measure);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('resize', measure);
        };
    }, [products.length]);

    useEffect(() => {
        if (!inView || maxIndex === 0 || paused) return undefined;
        const timer = setInterval(() => {
            setIndex((current) => (current >= maxIndex ? 0 : current + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [inView, maxIndex, paused]);

    const goTo = (next) => {
        setIndex(Math.min(Math.max(next, 0), maxIndex));
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const accent = (product) => product.brand?.color || colors.logo;

    return (
        <section
            ref={sectionRef}
            key={language}
            className="relative overflow-hidden py-20 px-6 md:px-8 md:py-24"
            style={{ backgroundColor: colors.background }}
        >
            <div
                className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: `${colors.logo}22` }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.p
                        className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase mb-3"
                        style={{ color: colors.logo }}
                        variants={headerVariants}
                    >
                        {t.sectionTitle || 'Our Products'}
                    </motion.p>
                    <motion.div
                        className="w-16 h-1 mx-auto mb-6 rounded-full"
                        style={{ backgroundColor: colors.logo }}
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 0.7 } },
                        }}
                    />
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
                        variants={headerVariants}
                    >
                        {t.heading || 'Advanced Solutions for Every Need'}
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto"
                        variants={headerVariants}
                    >
                        {t.description}
                    </motion.p>
                </motion.div>

                <div className="relative px-12 md:px-16">
                    <button
                        type="button"
                        aria-label="Previous products"
                        onClick={() => goTo(index - 1)}
                        disabled={index === 0}
                        className="absolute top-1/2 z-10 -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
                        style={{
                            [isRTL ? 'right' : 'left']: '0px',
                            color: colors.logo,
                            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                        }}
                    >
                        {isRTL ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
                    </button>

                    <button
                        type="button"
                        aria-label="Next products"
                        onClick={() => goTo(index + 1)}
                        disabled={index === maxIndex}
                        className="absolute top-1/2 z-10 -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
                        style={{
                            [isRTL ? 'left' : 'right']: '0px',
                            color: colors.logo,
                            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                        }}
                    >
                        {isRTL ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
                    </button>

                    <div
                        ref={viewportRef}
                        className="overflow-hidden py-2"
                        dir="ltr"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                gap: `${GAP}px`,
                                transform: `translateX(${-index * step}px)`,
                            }}
                        >
                            {products.map((product) => {
                                const CardTag = product.url ? 'a' : 'div';
                                const cardProps = product.url
                                    ? {
                                        href: product.url,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    }
                                    : {};
                                const Icon = product.Icon;
                                const brandColor = accent(product);
                                const hasLogo = Boolean(product.brand?.logo);

                                return (
                                    <CardTag
                                        key={product.id}
                                        {...cardProps}
                                        className={`group relative shrink-0 rounded-2xl bg-white p-7 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 ${product.url ? 'cursor-pointer' : ''}`}
                                        style={{
                                            width: step ? `${step - GAP}px` : `calc((100% - ${(visible - 1) * GAP}px) / ${visible})`,
                                            minHeight: '440px',
                                            border: `1px solid ${brandColor}28`,
                                            boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <span
                                            className="absolute inset-x-0 top-0 h-1 rounded-t-2xl origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                            style={{ backgroundColor: brandColor }}
                                        />

                                        <div className="flex justify-center mb-5 shrink-0">
                                            <div
                                                className="rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
                                                style={{
                                                    width: MEDIA_SIZE,
                                                    height: MEDIA_SIZE,
                                                    backgroundColor: hasLogo
                                                        ? (product.brand.innerBg || '#fff')
                                                        : `${brandColor}14`,
                                                    color: brandColor,
                                                    border: `1px solid ${brandColor}22`,
                                                    boxShadow: '0 6px 16px rgba(15, 23, 42, 0.06)',
                                                }}
                                            >
                                                {hasLogo ? (
                                                    <img
                                                        src={product.brand.logo}
                                                        alt=""
                                                        className="w-[72%] h-[72%] object-contain"
                                                    />
                                                ) : (
                                                    Icon && <Icon className="w-8 h-8" />
                                                )}
                                            </div>
                                        </div>

                                        <h3
                                            className="text-xl font-bold mb-3 leading-snug shrink-0"
                                            style={
                                                product.brand?.gradient
                                                    ? {
                                                        backgroundImage: product.brand.gradient,
                                                        WebkitBackgroundClip: 'text',
                                                        backgroundClip: 'text',
                                                        color: 'transparent',
                                                        WebkitTextFillColor: 'transparent',
                                                    }
                                                    : { color: '#111827' }
                                            }
                                        >
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-[15px] flex-1 min-h-0 line-clamp-4">
                                            {product.description}
                                        </p>

                                        <span
                                            className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-semibold shrink-0"
                                            style={{ color: product.url ? brandColor : 'transparent' }}
                                            aria-hidden={!product.url}
                                        >
                                            {t.showMore || 'Show more'}
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </CardTag>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(dotIndex)}
                                className="h-2.5 rounded-full transition-all"
                                style={{
                                    width: index === dotIndex ? '1.75rem' : '0.65rem',
                                    backgroundColor: index === dotIndex ? colors.logo : '#d1d5db',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

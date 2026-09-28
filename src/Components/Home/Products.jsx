import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Database,
    Users,
    Scale,
    Cloud,
    Store,
    Workflow,
    Eye,
    HeartPulse,
    Building2,
    FileText,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
} from 'lucide-react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { getProductCatalog } from '../../Utils/productCatalog';
import { motion, useInView } from 'framer-motion';

const GAP = 24;
const MEDIA_SIZE = 56;

const ICONS = [Building2, Database, Users, Store, Workflow, FileText, Scale, Eye, HeartPulse, Cloud];

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
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative overflow-hidden py-20 px-6 md:px-8 md:py-28"
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
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className={`relative mb-14 md:mb-16 ${isRTL ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} text-center`}
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

                    <motion.div className="inline-flex items-center gap-3 mb-4" variants={headerVariants}>
                        <span className="h-px w-8 md:hidden" style={{ backgroundColor: colors.logo }} />
                        <p
                            className="text-sm font-semibold tracking-[0.22em] uppercase"
                            style={{ color: colors.logo }}
                        >
                            {t.sectionTitle || 'Our Products'}
                        </p>
                    </motion.div>

                    <h3
                        className="text-2xl md:text-3xl font-bold mb-5 leading-snug"
                        style={{ color: colors.text }}
                        variants={headerVariants}
                    >
                        {t.heading || 'Advanced Solutions for Every Need'}
                    </h3>

                    <motion.p
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0"
                        variants={headerVariants}
                    >
                        {t.description}
                    </motion.p>

                    <motion.div
                        className="mt-6 h-1 w-20 rounded-full mx-auto md:mx-0"
                        style={{ backgroundColor: colors.logo }}
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 0.65 } },
                        }}
                    />
                </motion.div>

                <div className="relative px-12 md:px-14">
                    <button
                        type="button"
                        aria-label="Previous products"
                        onClick={() => goTo(index - 1)}
                        disabled={index === 0}
                        className="absolute top-1/2 z-10 -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border flex items-center justify-center transition-transform hover:scale-105"
                        style={{
                            [isRTL ? 'right' : 'left']: '0px',
                            color: colors.logo,
                            borderColor: `${colors.logo}40`,
                            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
                        }}
                    >
                        {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>

                    <button
                        type="button"
                        aria-label="Next products"
                        onClick={() => goTo(index + 1)}
                        disabled={index === maxIndex}
                        className="absolute top-1/2 z-10 -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border flex items-center justify-center transition-transform hover:scale-105"
                        style={{
                            [isRTL ? 'left' : 'right']: '0px',
                            color: colors.logo,
                            borderColor: `${colors.logo}40`,
                            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
                        }}
                    >
                        {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>

                    <div
                        ref={viewportRef}
                        className="overflow-hidden py-1"
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
                                        className={`group relative shrink-0 bg-white p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                                            product.url ? 'cursor-pointer' : ''
                                        }`}
                                        style={{
                                            width: step
                                                ? `${step - GAP}px`
                                                : `calc((100% - ${(visible - 1) * GAP}px) / ${visible})`,
                                            minHeight: '400px',
                                            border: `1px solid ${brandColor}28`,
                                            borderRadius: '1rem',
                                            boxShadow: '0 12px 32px rgba(15, 23, 42, 0.05)',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            textAlign: isRTL ? 'right' : 'left',
                                        }}
                                    >
                                        <span
                                            className={`absolute top-0 bottom-0 w-0.5 scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${
                                                isRTL ? 'right-0 origin-bottom' : 'left-0 origin-top'
                                            }`}
                                            style={{ backgroundColor: brandColor }}
                                        />

                                        {product.isFree && (
                                            <span
                                                className="absolute top-4 z-10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                                                style={{
                                                    backgroundColor: brandColor,
                                                    borderRadius: '0.375rem',
                                                    [isRTL ? 'left' : 'right']: '1rem',
                                                }}
                                            >
                                                {t.freeLabel || 'Free'}
                                            </span>
                                        )}

                                        <div
                                            className="mb-5 shrink-0 flex"
                                            style={{
                                                justifyContent: isRTL ? 'flex-end' : 'flex-start',
                                            }}
                                        >
                                            <div
                                                className="rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
                                                style={{
                                                    width: MEDIA_SIZE,
                                                    height: MEDIA_SIZE,
                                                    backgroundColor: hasLogo
                                                        ? product.brand.innerBg || '#fff'
                                                        : `${brandColor}14`,
                                                    color: brandColor,
                                                    border: `1px solid ${brandColor}22`,
                                                }}
                                            >
                                                {hasLogo ? (
                                                    <img
                                                        src={product.brand.logo}
                                                        alt=""
                                                        className="w-[72%] h-[72%] object-contain"
                                                    />
                                                ) : (
                                                    Icon && <Icon className="w-7 h-7" />
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
                                                    : { color: colors.text }
                                            }
                                        >
                                            {product.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-[15px] flex-1 min-h-0 line-clamp-4">
                                            {product.description}
                                        </p>

                                        <span
                                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-all duration-300 group-hover:gap-2.5"
                                            style={{
                                                color: product.url ? brandColor : 'transparent',
                                                justifyContent: isRTL ? 'flex-end' : 'flex-start',
                                                width: '100%',
                                            }}
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

                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(dotIndex)}
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: index === dotIndex ? '1.75rem' : '0.5rem',
                                    backgroundColor: index === dotIndex ? colors.logo : `${colors.logo}33`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

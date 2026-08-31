import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Colors } from '../../Utils/Colors';
import { LanguageContext } from '../../Context/LanguageContext';

const SLIDE_IMAGES = [
    {
        image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/12/03/bb23c468-aea0-408d-9863-f7675d247eff_89cfba09.jpg',
        alt: 'AIOT digital solutions',
    },
    {
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80',
        alt: 'Technology network',
    },
    {
        image: 'https://scalegrid.io/wp-content/uploads/best-mysql-gui-tools-scalegrid.jpg',
        alt: 'Circuit innovation',
    },
    {
        image: 'https://www.solarwinds.com/wp-content/uploads/2018/06/iStock-507965390.jpg',
        alt: 'Data center excellence',
    },
];

const FALLBACK_SLIDES = [
    {
        title: 'Your Solution Partner <br> for Business Success',
        description:
            'We blend Artificial Intelligence and the Internet of Things to drive innovation and deliver future-ready tech solutions.',
    },
    {
        title: 'Connected Systems. <br> Smarter Decisions.',
        description:
            'Unify data, cloud, and enterprise platforms so your teams move faster with clarity and confidence.',
    },
    {
        title: 'Build. Secure. <br> Scale with Confidence.',
        description:
            'From cybersecurity to modern infrastructure, we protect and power the technology that runs your business.',
    },
    {
        title: 'Enterprise Excellence, <br> Delivered End to End.',
        description:
            'Consulting, implementation, and managed services designed to transform operations and accelerate growth.',
    },
];

const SLIDE_MS = 5500;

const HomePage = () => {
    const { background } = Colors.en;
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [direction, setDirection] = useState(1);

    const slides = useMemo(() => {
        const translated = translations?.Hero?.slides;
        return SLIDE_IMAGES.map((media, i) => {
            const copy = translated?.[i] || FALLBACK_SLIDES[i];
            return {
                ...media,
                title:
                    copy?.title ||
                    (i === 0 ? translations?.Hero?.demoBannerTitle : FALLBACK_SLIDES[i].title) ||
                    FALLBACK_SLIDES[i].title,
                description:
                    copy?.description ||
                    (i === 0 ? translations?.Hero?.whoWeAreDesc : FALLBACK_SLIDES[i].description) ||
                    FALLBACK_SLIDES[i].description,
            };
        });
    }, [translations]);

    useEffect(() => {
        if (paused) return undefined;
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((current) => (current + 1) % slides.length);
        }, SLIDE_MS);
        return () => clearInterval(timer);
    }, [paused, slides.length]);

    const goPrev = () => {
        setDirection(-1);
        setIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setDirection(1);
        setIndex((current) => (current + 1) % slides.length);
    };

    const goTo = (next) => {
        setDirection(next > index ? 1 : -1);
        setIndex(next);
    };

    const active = slides[index] || slides[0];

    const imageVariants = {
        enter: (dir) => ({
            opacity: 0,
            scale: 1.06,
            x: dir > 0 ? 40 : -40,
        }),
        center: {
            opacity: 1,
            scale: 1,
            x: 0,
        },
        exit: (dir) => ({
            opacity: 0,
            scale: 1.02,
            x: dir > 0 ? -30 : 30,
        }),
    };

    const textVariants = {
        enter: (dir) => ({
            opacity: 0,
            y: 36,
            x: dir > 0 ? 24 : -24,
            filter: 'blur(6px)',
        }),
        center: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: 'blur(0px)',
        },
        exit: (dir) => ({
            opacity: 0,
            y: -20,
            x: dir > 0 ? -16 : 16,
            filter: 'blur(4px)',
        }),
    };

    return (
        <section
            style={{ backgroundColor: background }}
            className="relative h-[calc(100svh-11.5rem)] sm:h-[calc(100svh-10.5rem)] lg:h-[calc(100svh-9.5rem)] flex flex-col overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Full-bleed slides */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`image-${index}`}
                        className="absolute inset-0"
                        custom={direction}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.img
                            src={active.image}
                            alt={active.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                            animate={{ scale: paused ? 1.04 : 1.12 }}
                            transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Cinematic brand overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/90 via-[#0c0a09]/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/75 via-[#0c0a09]/25 to-transparent" />
                <div
                    className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse 70% 55% at 15% 85%, ${colors.logo}55 0%, transparent 60%)`,
                    }}
                />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            {/* Side nav arrows */}
            <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-3 sm:px-5 md:px-7">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={goPrev}
                    className="pointer-events-auto group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-md text-white flex items-center justify-center transition hover:border-white/50 hover:bg-black/40"
                >
                    <ChevronLeft size={20} className="transition group-hover:-translate-x-0.5" />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={goNext}
                    className="pointer-events-auto group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-md text-white flex items-center justify-center transition hover:border-white/50 hover:bg-black/40"
                >
                    <ChevronRight size={20} className="transition group-hover:translate-x-0.5" />
                </button>
            </div>

            {/* Content — bottom left */}
            <div className="relative z-10 flex-grow flex flex-col justify-end min-h-0">
                <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-8 md:pb-10 pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        <div className="lg:col-span-8 max-w-3xl">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={`${language}-copy-${index}`}
                                    custom={direction}
                                    variants={textVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <span
                                            className="h-px w-10 rounded-full"
                                            style={{ backgroundColor: colors.logo }}
                                        />
                                        <span
                                            className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase"
                                            style={{ color: colors.logo }}
                                        >
                                            AIOT
                                        </span>
                                        <span className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-white/45">
                                            {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h1
                                        className="font-[Space_Grotesk,sans-serif] text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold leading-[1.08] tracking-tight text-white max-w-3xl"
                                        dangerouslySetInnerHTML={{ __html: active.title }}
                                    />

                                    <div
                                        className="mt-3 md:mt-4 h-1 w-14 rounded-full origin-left"
                                        style={{ backgroundColor: colors.logo }}
                                    />

                                    <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/78 max-w-xl leading-relaxed font-light">
                                        {active.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress cluster — bottom right on desktop */}
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <div className="w-full max-w-xs">
                                <div className="flex items-center gap-2.5">
                                    {slides.map((_, i) => {
                                        const isActive = i === index;
                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                aria-label={`Go to slide ${i + 1}`}
                                                onClick={() => goTo(i)}
                                                className="relative h-1.5 flex-1 rounded-full overflow-hidden bg-white/20 transition hover:bg-white/35"
                                            >
                                                {isActive ? (
                                                    <motion.span
                                                        key={`bar-${index}`}
                                                        className="absolute inset-y-0 left-0 rounded-full"
                                                        style={{ backgroundColor: colors.logo }}
                                                        initial={{ width: '0%' }}
                                                        animate={{ width: '100%' }}
                                                        transition={{
                                                            duration: paused ? 0 : SLIDE_MS / 1000,
                                                            ease: 'linear',
                                                        }}
                                                    />
                                                ) : i < index ? (
                                                    <span
                                                        className="absolute inset-0 rounded-full"
                                                        style={{ backgroundColor: `${colors.logo}99` }}
                                                    />
                                                ) : null}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;

import React, {
    Suspense,
    lazy,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Colors } from '../../Utils/Colors';
import { LanguageContext } from '../../Context/LanguageContext';

const HeroProductScene = lazy(() => import('./HeroProductScene'));

/** Local compressed poster = fast LCP */
const HERO_POSTER_WEBP = '/hero-poster.webp';
const HERO_POSTER_JPG = '/hero-poster.jpg';

const SLIDE_MEDIA = [
    {
        type: 'image',
        image: HERO_POSTER_JPG,
        webp: HERO_POSTER_WEBP,
        alt: 'AIOT digital solutions',
        priority: true,
    },
    {
        type: 'image',
        image: 'https://i.postimg.cc/SKtFj4Gm/Chat-GPT-Image-Sep-2-2026-11-19-42-AM.png',
        alt: 'Technology network',
    },
    {
        type: 'image',
        image: 'https://i.postimg.cc/jdFCbCgP/Chat-GPT-Image-Sep-1-2026-09-13-55-AM.png',
        alt: 'Circuit innovation',
    },
    {
        type: 'products',
        alt: 'Our products ecosystem',
        duration: 8000,
    },
];

const FALLBACK_SLIDES = [
    {
        title: 'Your Solution Partner <br> for Business Success',
        description:
            'We are a technology consulting company that delivers practical, scalable, and secure solutions to help businesses embrace innovation and prepare for a connected digital future.',
    },
    {
        title: 'Connected Systems. <br> Smarter Decisions.',
        description:
            'Unify data, cloud, and enterprise platforms so your teams move faster with focus and trust.',
    },
    {
        title: 'Build. Secure. <br> Scale with Confidence.',
        description:
            'From cybersecurity to network infrastructure, we protect and power the technology that runs your business.',
    },
    {
        title: 'Products That <br> Power Your Business.',
        description:
            'PeopleHub HCM, ProcessHub Operations Suite, CommerceHub Unified Commerce Platform, and our comprehensive business suite help organisations hire, operate, sell, and scale within one connected ecosystem.',
    },
];

const SLIDE_MS = 6000;
/** Keep first slide long enough for LCP to settle before carousel moves. */
const FIRST_SLIDE_MS = 9000;

const SlideMedia = ({ slide }) => {
    if (slide.type === 'products') {
        return (
            <Suspense fallback={<div className="absolute inset-0 bg-[#0c0a09]" aria-hidden="true" />}>
                <HeroProductScene />
            </Suspense>
        );
    }

    return (
        <picture>
            {slide.webp ? <source srcSet={slide.webp} type="image/webp" /> : null}
            <img
                src={slide.image}
                alt={slide.alt}
                width={1280}
                height={720}
                loading={slide.priority ? 'eager' : 'lazy'}
                fetchPriority={slide.priority ? 'high' : 'low'}
                decoding={slide.priority ? 'async' : 'async'}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </picture>
    );
};

const HomePage = () => {
    const { background } = Colors.en;
    const { translations, language, localePack } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(true);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [carouselReady, setCarouselReady] = useState(false);

    const slides = useMemo(() => {
        const localSlides = localePack?.Hero?.slides;
        const hasLocalSlides = Array.isArray(localSlides) && localSlides.length > 0;
        const slideCopy = hasLocalSlides
            ? localSlides
            : language === 'en'
              ? translations?.Hero?.slides
              : null;

        return SLIDE_MEDIA.map((media, i) => {
            const copy = slideCopy?.[i];
            const hero = localePack?.Hero || translations?.Hero;

            return {
                ...media,
                title:
                    copy?.title ||
                    (i === 0 ? hero?.demoBannerTitle : null) ||
                    FALLBACK_SLIDES[i].title,
                description:
                    copy?.description ||
                    (i === 0 ? hero?.whoWeAreDesc : null) ||
                    FALLBACK_SLIDES[i].description,
            };
        });
    }, [translations, language, localePack]);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node || typeof IntersectionObserver === 'undefined') return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Delay carousel so LCP image/text can settle (PSI mobile).
    useEffect(() => {
        const t = window.setTimeout(() => setCarouselReady(true), 2500);
        return () => window.clearTimeout(t);
    }, []);

    useEffect(() => {
        setIndex(0);
    }, [language]);

    useEffect(() => {
        if (!inView || paused || !carouselReady) return undefined;
        const ms = index === 0 ? FIRST_SLIDE_MS : slides[index]?.duration || SLIDE_MS;
        const timer = window.setTimeout(() => {
            setIndex((current) => (current + 1) % slides.length);
        }, ms);
        return () => window.clearTimeout(timer);
    }, [inView, paused, index, slides, carouselReady]);

    const goPrev = () => {
        setCarouselReady(true);
        setIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setCarouselReady(true);
        setIndex((current) => (current + 1) % slides.length);
    };

    const goTo = (next) => {
        setCarouselReady(true);
        setIndex(next);
    };

    const active = slides[index] || slides[0];
    const sliderActive = inView && !paused && carouselReady;
    const progressMs = sliderActive
        ? index === 0
            ? FIRST_SLIDE_MS
            : active.duration || SLIDE_MS
        : 0;

    return (
        <section
            ref={sectionRef}
            style={{ backgroundColor: background || '#0c0a09' }}
            className="relative h-[calc(100svh-11.5rem)] sm:h-[calc(100svh-10.5rem)] lg:h-[calc(100svh-9.5rem)] flex flex-col overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Instant CSS paint so FCP is not blocked by remote media */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 20% 80%, #ED623933 0%, transparent 55%), linear-gradient(160deg, #0c0a09 0%, #1a1512 45%, #0c0a09 100%)',
                }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 z-0">
                <div key={`media-${index}`} className="absolute inset-0">
                    <SlideMedia slide={active} />
                </div>

                {active.type === 'products' ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-[#0c0a09]/25 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/75 via-[#0c0a09]/20 to-transparent" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/55 via-[#0c0a09]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/40 via-[#0c0a09]/25 to-transparent" />
                    </>
                )}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse 70% 55% at 15% 85%, ${colors.logo}55 0%, transparent 60%)`,
                    }}
                />
            </div>

            <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-3 sm:px-5 md:px-7">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={goPrev}
                    className="pointer-events-auto group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/40 text-white flex items-center justify-center transition hover:border-white/60 hover:bg-black/55"
                >
                    <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={goNext}
                    className="pointer-events-auto group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/40 text-white flex items-center justify-center transition hover:border-white/60 hover:bg-black/55"
                >
                    <ChevronRight size={20} aria-hidden="true" />
                </button>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-end min-h-0">
                <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-8 md:pb-10 pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        <div className="lg:col-span-8 max-w-3xl">
                            <div key={`${language}-copy-${index}`}>
                                <div className="flex items-center gap-3 mb-3 md:mb-4">
                                    <span className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-white/90">
                                        {String(index + 1).padStart(2, '0')} /{' '}
                                        {String(slides.length).padStart(2, '0')}
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

                                <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white max-w-xl leading-relaxed font-normal opacity-95">
                                    {active.description}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex lg:justify-end">
                            <div className="w-full max-w-xs" role="tablist" aria-label="Hero slides">
                                <div className="flex items-center gap-2.5">
                                    {slides.map((_, i) => {
                                        const isActive = i === index;
                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                role="tab"
                                                aria-selected={isActive}
                                                aria-label={`Go to slide ${i + 1}`}
                                                onClick={() => goTo(i)}
                                                className="relative h-1.5 flex-1 rounded-full overflow-hidden bg-white/30 transition hover:bg-white/45"
                                            >
                                                {isActive ? (
                                                    <span
                                                        key={`bar-${index}-${progressMs}`}
                                                        className="absolute inset-y-0 left-0 w-full rounded-full origin-left"
                                                        style={{
                                                            backgroundColor: colors.logo,
                                                            transform: 'scaleX(0)',
                                                            animation: progressMs
                                                                ? `hero-progress ${progressMs}ms linear forwards`
                                                                : 'none',
                                                        }}
                                                    />
                                                ) : i < index ? (
                                                    <span
                                                        className="absolute inset-0 rounded-full"
                                                        style={{ backgroundColor: `${colors.logo}cc` }}
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

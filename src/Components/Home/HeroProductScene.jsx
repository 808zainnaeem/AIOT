import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageContext } from '../../Context/LanguageContext';
import { getProductCatalog } from '../../Utils/productCatalog';

const SHOWCASE = [
    { match: /peoplehub/i, name: 'PeopleHub', tag: 'HCM & Payroll', logoBg: '#ffffff' },
    { match: /processhub/i, name: 'ProcessHub', tag: 'Operations Suite', logoBg: '#ffffff' },
    { match: /commercehub/i, name: 'CommerceHub', tag: 'Unified Commerce', logoBg: '#041018' },
    { match: /bridgehub|sap business one|sap b1/i, name: 'BridgeHub', tag: 'Enterprise ERP', logoBg: '#ffffff' },
];

const CARD_LAYOUT = [
    { x: '28%', y: '10%', rotateY: 16, rotateX: 8 },
    { x: '2%', y: '38%', rotateY: 28, rotateX: 4 },
    { x: '54%', y: '34%', rotateY: -18, rotateX: 6 },
    { x: '24%', y: '62%', rotateY: 10, rotateX: -8 },
];

function MiniBars({ color, delay }) {
    return (
        <div className="mt-3 w-full space-y-1.5 px-1">
            {[72, 48, 86].map((width, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.span
                        className="block h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: '18%' }}
                        animate={{ width: [`${width - 22}%`, `${width}%`, `${width - 14}%`] }}
                        transition={{
                            duration: 2.4 + i * 0.35,
                            repeat: Infinity,
                            delay: delay + i * 0.15,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

function ProductCard({ item, featured, delay, layout, compact }) {
    return (
        <motion.div
            className={`relative ${compact ? 'w-[132px]' : 'w-[210px] sm:w-[230px]'}`}
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 36, scale: 0.86 }}
            animate={{
                opacity: 1,
                y: featured ? [0, -10, 0] : [0, -6, 0],
                scale: featured ? 1.08 : 1,
                rotateY: featured ? 0 : layout.rotateY,
                rotateX: featured ? 2 : layout.rotateX,
                z: featured ? 80 : 0,
            }}
            transition={{
                opacity: { duration: 0.55, delay },
                scale: { duration: 0.45 },
                rotateY: { duration: 0.55 },
                rotateX: { duration: 0.55 },
                y: { duration: featured ? 3.2 : 4.4, repeat: Infinity, ease: 'easeInOut', delay },
            }}
        >
            {featured && (
                <span
                    className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-70"
                    style={{ background: `radial-gradient(circle, ${item.color}aa 0%, transparent 70%)` }}
                />
            )}

            <div
                className="relative overflow-hidden rounded-3xl border border-white/20 p-5 shadow-2xl"
                style={{
                    background: `linear-gradient(180deg, rgba(18,18,22,0.92) 0%, rgba(8,8,10,0.88) 100%)`,
                    boxShadow: featured
                        ? `0 24px 60px ${item.color}55, 0 0 0 1px ${item.color}88`
                        : `0 18px 40px rgba(0,0,0,0.45), 0 0 0 1px ${item.color}33`,
                }}
            >
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: item.color }} />
                <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    animate={{ x: ['-120%', '140%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, delay }}
                />

                <div
                    className="relative mx-auto flex items-center justify-center rounded-2xl"
                    style={{
                        width: compact ? 56 : 76,
                        height: compact ? 56 : 76,
                        background: item.logoBg,
                        boxShadow: `0 8px 24px ${item.color}44`,
                    }}
                >
                    <img src={item.logo} alt={item.name} className="h-[70%] w-[70%] object-contain" />
                </div>

                <div className="relative mt-3 text-center">
                    <p className="text-sm font-bold tracking-wide text-white">{item.name}</p>
                    <p className="mt-0.5 text-[11px] font-medium" style={{ color: item.color }}>
                        {item.tag}
                    </p>
                </div>

                {!compact && <MiniBars color={item.color} delay={delay} />}
            </div>
        </motion.div>
    );
}

export default function HeroProductScene() {
    const { translations, language } = useContext(LanguageContext);
    const isRTL = language === 'ar';
    const catalog = getProductCatalog(translations);
    const [featured, setFeatured] = useState(0);

    const items = useMemo(
        () =>
            SHOWCASE.map((entry) => {
                const product = catalog.find((item) => entry.match.test(item.title));
                return {
                    ...entry,
                    color: product?.brand?.color || '#ed6239',
                    logo: product?.brand?.logo,
                };
            }),
        [catalog]
    );

    useEffect(() => {
        const timer = window.setInterval(() => {
            setFeatured((current) => (current + 1) % items.length);
        }, 1600);
        return () => window.clearInterval(timer);
    }, [items.length]);

    const active = items[featured] || items[0];

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#07060a]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 50% 55% at 78% 42%, ${active.color}33 0%, transparent 58%),
                        radial-gradient(ellipse 40% 40% at 62% 18%, rgba(117,54,221,0.2) 0%, transparent 62%),
                        radial-gradient(ellipse 35% 40% at 90% 70%, rgba(5,131,252,0.16) 0%, transparent 60%),
                        linear-gradient(180deg, #141018 0%, #08070b 52%, #050407 100%)
                    `,
                }}
            />

            <motion.div
                className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{ left: isRTL ? '10%' : '50%' }}
                animate={{ x: isRTL ? [180, -80] : [-80, 180], opacity: [0, 0.7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '42px 42px',
                    maskImage: `radial-gradient(ellipse 65% 70% at ${isRTL ? '28%' : '78%'} 44%, black 10%, transparent 75%)`,
                }}
            />

            <motion.div
                className="pointer-events-none absolute hidden md:block h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    top: '44%',
                    left: isRTL ? '28%' : '76%',
                    background: `conic-gradient(from 0deg, transparent 0%, ${active.color}55 12%, transparent 22%, transparent 100%)`,
                    maskImage: 'radial-gradient(circle, transparent 54%, black 56%, black 70%, transparent 72%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            />

            <div
                className="pointer-events-none absolute hidden md:block h-24 w-[420px] -translate-x-1/2 rounded-[100%] blur-2xl"
                style={{
                    left: isRTL ? '28%' : '76%',
                    bottom: '14%',
                    background: `radial-gradient(ellipse, ${active.color}55 0%, transparent 70%)`,
                }}
            />

            <div className="absolute top-10 left-1/2 z-10 flex -translate-x-1/2 gap-3 md:hidden">
                {items.slice(0, 3).map((item, i) => (
                    <ProductCard
                        key={item.name}
                        item={item}
                        featured={featured === i}
                        delay={i * 0.1}
                        layout={{ rotateY: 0, rotateX: 0 }}
                        compact
                    />
                ))}
            </div>

            <div
                className="absolute inset-y-0 z-10 hidden md:block"
                style={{
                    [isRTL ? 'left' : 'right']: 0,
                    width: '58%',
                    perspective: 1400,
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.p
                        key={active.name}
                        className="absolute left-1/2 top-[8%] -translate-x-1/2 text-5xl font-black tracking-[0.2em] uppercase text-white/5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {active.name}
                    </motion.p>
                </AnimatePresence>

                {items.map((item, i) => (
                    <div
                        key={item.name}
                        className="absolute"
                        style={{
                            left: CARD_LAYOUT[i].x,
                            top: CARD_LAYOUT[i].y,
                            zIndex: featured === i ? 20 : 10 - i,
                        }}
                    >
                        <ProductCard
                            item={item}
                            featured={featured === i}
                            delay={i * 0.12}
                            layout={CARD_LAYOUT[i]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

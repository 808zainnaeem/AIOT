import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Utils/routes';

const PHILOSOPHY_IMAGE = 'https://i.postimg.cc/13wrfrcw/Untitled-design.png';

export default function OurPhilosophy() {
    const navigate = useNavigate();
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.philosophy;
    const isRTL = language === 'ar';
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    };

    return (
        <section
            key={language}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative overflow-hidden py-20 px-6 md:py-28"
            style={{ backgroundColor: colors.background, color: colors.text }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 55% 50% at ${isRTL ? '85%' : '15%'} 55%, ${colors.logo}22, transparent 65%),
                        radial-gradient(ellipse 40% 35% at ${isRTL ? '20%' : '80%'} 20%, ${colors.logo}12, transparent 60%)
                    `,
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 78%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        className={`relative ${isRTL ? 'lg:order-2' : 'lg:order-1'} order-2`}
                        initial={{ opacity: 0, x: isRTL ? 48 : -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div
                            className="relative overflow-hidden rounded-2xl"
                            style={{
                                background: `${colors.logo}12`,
                                boxShadow: `0 24px 48px -24px ${colors.logo}44`,
                            }}
                        >
                            <img
                                src={PHILOSOPHY_IMAGE}
                                alt="Team collaboration illustration"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className={`order-1 ${isRTL ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.div
                            className={`relative ${isRTL ? 'md:pr-6' : 'md:pl-6'}`}
                            variants={fadeUp}
                        >
                            <span
                                className="absolute top-0 bottom-0 w-1 rounded-full hidden md:block"
                                style={{
                                    background: `linear-gradient(180deg, ${colors.logo}, ${colors.logo}22)`,
                                    [isRTL ? 'right' : 'left']: 0,
                                }}
                            />

                            <div className="inline-flex items-center gap-3 mb-4">
                                <span
                                    className="h-px w-8 md:hidden"
                                    style={{ backgroundColor: colors.logo }}
                                />
                                <p
                                    className="text-sm font-semibold tracking-[0.22em] uppercase"
                                    style={{ color: colors.logo }}
                                >
                                    {t.title}
                                </p>
                            </div>

                            <h3
                              className="text-2xl md:text-3xl font-bold mb-5 leading-snug"
                              style={{ color: colors.text }}
                            >
                                {t.heading}
                            </h3>
                        </motion.div>

                        <motion.p
                            className="text-base md:text-[17px] leading-relaxed text-gray-600 mb-7"
                            variants={fadeUp}
                        >
                            {t.paragraph1}
                        </motion.p>

                        <motion.blockquote
                            className={`relative mb-7 py-5 px-6 rounded-r-xl ${
                                isRTL ? 'rounded-r-none rounded-l-xl border-r-4 border-l-0' : 'border-l-4'
                            }`}
                            style={{
                                borderColor: colors.logo,
                                background: `${colors.logo}0d`,
                            }}
                            variants={fadeUp}
                        >
                            <span
                                className="absolute -top-2 text-5xl font-serif leading-none opacity-30 select-none"
                                style={{
                                    color: colors.logo,
                                    [isRTL ? 'right' : 'left']: '1rem',
                                }}
                                aria-hidden="true"
                            >
                                “
                            </span>
                            <p
                                className="relative text-base md:text-lg font-medium leading-snug"
                                style={{ color: colors.accent || colors.logo }}
                            >
                                {t.quote}
                            </p>
                        </motion.blockquote>

                        <motion.p
                            className="text-base md:text-[17px] leading-relaxed text-gray-600 mb-9"
                            variants={fadeUp}
                        >
                            {t.paragraph2}
                        </motion.p>

                        <motion.button
                            type="button"
                            className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300"
                            style={{ backgroundColor: colors.logo }}
                            onClick={() => navigate(ROUTES.about)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.hover;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = colors.logo;
                            }}
                            variants={fadeUp}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t.readMore || 'Read more'}
                            <Arrow
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isRTL
                                        ? 'group-hover:-translate-x-1'
                                        : 'group-hover:translate-x-1'
                                }`}
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion'; // <-- Added
import { useNavigate } from 'react-router-dom';

export default function OurPhilosophy() {
    const navigate = useNavigate();
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en; // Fallback to English

    const t = translations.philosophy; // Clean access to philosophy texts

    // Auto RTL/LTR handling
    const isRTL = language === 'ar';
    const textAlign = isRTL ? 'text-right' : 'text-left';
    const flexDir = isRTL ? 'flex-row-reverse' : 'flex-row';

    return (
        <div
            className="min-h-screen py-16 px-8 md:py-24"
            style={{ backgroundColor: colors.background }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flexDir}`}>
                    {/* Left side - Illustration */}
                    <motion.div
                        className={`order-2 lg:order-none ${isRTL ? 'lg:ml-12' : 'lg:mr-12'}`}
                        initial={{ opacity: 0, x: isRTL ? 100 : -100 }} // Slide from right in RTL, left in LTR
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="bg-orange-50 rounded-3xl flex items-center justify-center shadow-xl">
                            <img
                                src="https://i.postimg.cc/2SZtznGR/Chat-GPT-Image-Aug-28-2026-05-10-54-PM.png"
                                alt="Team collaboration illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        className={textAlign}
                        initial={{ opacity: 0, x: isRTL ? -100 : 100 }} // Opposite direction for balance
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Slight delay for stagger
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-semibold mb-2"
                            style={{ color: colors.text }}
                        >
                            {t.title}
                        </h2>

                        {/* Brand Accent Bar */}
                        <div
                            className="w-24 h-1.5 rounded-full mb-8"
                            style={{ backgroundColor: colors.logo }}
                        ></div>

                        <h3
                            className="text-3xl md:text-3xl font-bold mb-8 leading-tight"
                            style={{ color: colors.text }}
                        >
                            {t.heading}
                        </h3>

                        <p className="text-lg leading-relaxed mb-8 text-gray-600">
                            {t.paragraph1}
                        </p>

                        {/* Quote Block */}
                        <div className={`border-l-4 md:border-l-8 pl-6 md:pl-8 mb-10 ${isRTL ? 'border-r-8 pr-8 border-l-0' : ''}`}>
                            <p
                                className="text-1xl md:text-1xl font-bold italic"
                                style={{ color: colors.accent || '#F65314' }}
                            >
                                "{t.quote}"
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed mb-10 text-gray-600">
                            {t.paragraph2}
                        </p>

                        {/* Call to Action Button - Brand Gold */}
                        <button
                            className="px-10 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                            style={{
                                backgroundColor: colors.logo,
                            }}
                            onClick={() => navigate('/about')}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = colors.hover)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = colors.logo)}
                        >
                            Read More
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
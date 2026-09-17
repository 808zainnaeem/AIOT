import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';
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
            key={language}
            className="py-14 px-6 md:py-20 md:px-8"
            style={{ backgroundColor: colors.background }}
        >
            <div className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flexDir}`}>
                    {/* Left side - Illustration */}
                    <motion.div
                        className={`order-2 lg:order-none ${isRTL ? 'lg:ml-8' : 'lg:mr-8'}`}
                        initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="bg-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src="https://i.postimg.cc/13wrfrcw/Untitled-design.png"
                                alt="Team collaboration illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        className={textAlign}
                        initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p
                            className="text-sm font-medium tracking-wide mb-2"
                            style={{ color: colors.logo }}
                        >
                            {t.title}
                        </p>

                        <h3
                            className="text-2xl md:text-3xl font-bold mb-5 leading-snug"
                            style={{ color: colors.text }}
                        >
                            {t.heading}
                        </h3>

                        <p className="text-base leading-relaxed mb-6 text-gray-600">
                            {t.paragraph1}
                        </p>

                        {/* Quote Block */}
                        <div
                            className={`border-l-2 pl-5 mb-6 ${isRTL ? 'border-r-2 pr-5 border-l-0' : ''}`}
                            style={{ borderColor: colors.accent || '#F65314' }}
                        >
                            <p
                                className="text-base md:text-lg font-medium italic"
                                style={{ color: colors.accent || '#F65314' }}
                            >
                                {t.quote}
                            </p>
                        </div>

                        <p className="text-base leading-relaxed mb-8 text-gray-600">
                            {t.paragraph2}
                        </p>

                        {/* Call to Action Button */}
                        <button
                            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors duration-200"
                            style={{
                                backgroundColor: colors.logo,
                            }}
                            onClick={() => navigate('/about')}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = colors.hover)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = colors.logo)}
                        >
                            {t.readMore || 'Read more'}
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
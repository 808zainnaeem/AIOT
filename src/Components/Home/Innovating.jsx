import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';

export default function TechInnovation() {
  const { translations, language } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;

  const t = translations.techInnovation || {};

  // RTL support for animation direction
  const isRTL = language === 'ar';
  const slideDirection = isRTL ? 100 : -100;

  return (
    <div className="bg-white" style={{ backgroundColor: colors.background }}>
      {/* Innovation Section */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: slideDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Staggered children */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.h2
                  className="text-gray-800 text-lg font-normal mb-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {t.subtitle || "Innovating Tomorrow's Tech"}
                </motion.h2>

                <motion.div
                  className="w-20 h-0.5 bg-red-500 mb-6"
                  variants={{
                    hidden: { scaleX: 0, originX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.8 } }
                  }}
                />

                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {t.heading || "Empowering Businesses with Expertise and Excellence"}
                </motion.h3>

                <motion.p
                  className="text-gray-600 leading-relaxed mb-6 text-base"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {t.paragraph1 || "With a commitment to excellence and a passion for innovation..."}
                </motion.p>

                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 text-base"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {t.paragraph2 || "At the forefront of technological innovation..."}
                </motion.p>

                <motion.button
                  className="border-2 border-gray-900 text-gray-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.readMore || "Read more"}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right side - Illustration */}
            <motion.div
              className="bg-orange-50 rounded-3xl p-5 flex items-center justify-center shadow-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, rotate: isRTL ? 5 : -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/Innovating.jpg"
                alt="Technology illustration"
                className="w-full h-full object-contain "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
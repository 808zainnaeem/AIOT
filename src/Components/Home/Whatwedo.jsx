// src/components/WhatWeDo.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';  // ← Added

// Images from public folder → accessed directly via /images/...
import consultingImg from '/consulting.png';       // replace with your actual file
import implementationImg from '/implement.png';
import managedServicesImg from '/consulting.png';

export default function WhatWeDo() {
    const { translations, language } = useContext(LanguageContext);
    const t = translations; // shortcut
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    const colors = Colors[language] || Colors.en;

    // Fallback texts
    const fallback = {
        title: "What We Do",
        subtitle: "Tailored Solutions for Intelligent Connectivity",
        consulting: {
            title: "Consulting",
            desc: "We assist in creating a digital strategy that leads to technology-driven business success..."
        },
        implementation: {
            title: "Implementation",
            desc: "Our experts in all major technologies and business functions, empower us to deliver comprehensive business solutions."
        },
        managedServices: {
            title: "Managed Services",
            desc: "Our Global Managed Services team secures your digital investment with monitoring, maintenance, and end-to-end 24×7 support."
        }
    };

    // Variants for stagger effect on the grid container
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,  // Delay between each card
                delayChildren: 0.1
            }
        }
    };

    // Variants for individual cards
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },   // Start lower and faded
        visible: {
            opacity: 1, y: 0,    // Slide up and fade in
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div
            dir={dir}
            className="min-h-screen py-16 px-6"
            style={{ backgroundColor: colors.background, color: colors.text }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-2xl md:text-2xl font-semibold mb-4"
                        style={{ color: colors.logo }}
                    >
                        {t.whatWeDoSection?.title || fallback.title}
                    </h2>
                    <div
                        className="w-24 h-1 mx-auto mb-10"
                        style={{ backgroundColor: colors.text }}
                    />
                    <h3 className="text-xl md:text-2xl text-gray-800">
                        {t.whatWeDoSection?.subtitle || fallback.subtitle}
                    </h3>
                </div>

                {/* Services Grid with animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}  // Trigger when 30% visible
                >
                    {/* Consulting Card */}
                    <motion.div
                        className="relative bg-white p-10 text-center shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                        style={{ border: `1px solid ${colors.logo}` }}
                        variants={cardVariants}  // ← Apply card animation
                    >
                        <div className="flex justify-center mb-8 relative">
                            <img
                                src={consultingImg}
                                alt="Consulting"
                                className="w-15 h-15 object-contain drop-shadow-lg"
                            />
                        </div>

                        <h4 className="text-xl font-bold mb-6" style={{ color: colors.text }}>
                            {t.whatWeDoSection?.consulting || fallback.consulting.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t.whatWeDoSection?.consultingDesc || fallback.consulting.desc}
                        </p>
                    </motion.div>

                    {/* Implementation Card */}
                    <motion.div
                        className="relative bg-white p-10 text-center shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                        style={{ border: `1px solid ${colors.logo}` }}
                        variants={cardVariants}
                    >
                        <div className="flex justify-center mb-8 relative">
                            <img
                                src={implementationImg}
                                alt="Implementation"
                                className="w-15 h-15 object-contain drop-shadow-lg"
                            />
                        </div>

                        <h4 className="text-xl font-bold mb-6" style={{ color: colors.text }}>
                            {t.whatWeDoSection?.implementation || fallback.implementation.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t.whatWeDoSection?.implementationDesc || fallback.implementation.desc}
                        </p>
                    </motion.div>

                    {/* Managed Services Card */}
                    <motion.div
                        className="relative bg-white p-10 text-center shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                        style={{ border: `1px solid ${colors.logo}` }}
                        variants={cardVariants}
                    >
                        <div className="flex justify-center mb-8 relative">
                            <img
                                src={managedServicesImg}
                                alt="Managed Services"
                                className="w-15 h-15 object-contain drop-shadow-lg"
                            />
                        </div>

                        <h4 className="text-xl font-bold mb-6" style={{ color: colors.text }}>
                            {t.whatWeDoSection?.managedServices || fallback.managedServices.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t.whatWeDoSection?.managedServicesDesc || fallback.managedServices.desc}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
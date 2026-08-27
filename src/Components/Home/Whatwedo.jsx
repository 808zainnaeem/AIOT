import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import consultingImg from '/consulting.png';
import implementationImg from '/implement.png';
import managedServicesImg from '/consulting.png';

export default function WhatWeDo() {
    const { translations, language } = useContext(LanguageContext);
    const t = translations;
    const isRTL = language === 'ar';
    const colors = Colors[language] || Colors.en;

    const fallback = {
        title: 'What We Do',
        subtitle: 'Tailored Solutions for Intelligent Connectivity',
        consulting: 'Consulting',
        consultingDesc: 'We assist in creating a digital strategy that leads to technology-driven business success...',
        implementation: 'Implementation',
        implementationDesc: 'Our experts in all major technologies and business functions, empower us to deliver comprehensive business solutions.',
        managedServices: 'Managed Services',
        managedServicesDesc: 'Our Global Managed Services team secures your digital investment with monitoring, maintenance, and end-to-end 24×7 support.',
    };

    const services = [
        {
            step: '01',
            image: consultingImg,
            title: t.whatWeDoSection?.consulting || fallback.consulting,
            desc: t.whatWeDoSection?.consultingDesc || fallback.consultingDesc,
        },
        {
            step: '02',
            image: implementationImg,
            title: t.whatWeDoSection?.implementation || fallback.implementation,
            desc: t.whatWeDoSection?.implementationDesc || fallback.implementationDesc,
        },
        {
            step: '03',
            image: managedServicesImg,
            title: t.whatWeDoSection?.managedServices || fallback.managedServices,
            desc: t.whatWeDoSection?.managedServicesDesc || fallback.managedServicesDesc,
        },
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 48 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: 'easeOut' },
        },
    };

    return (
        <section
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative overflow-hidden py-20 px-6 md:py-24"
            style={{ backgroundColor: colors.background, color: colors.text }}
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
                        {t.whatWeDoSection?.title || fallback.title}
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
                        className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight"
                        variants={headerVariants}
                    >
                        {t.whatWeDoSection?.subtitle || fallback.subtitle}
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {services.map((service, index) => (
                        <motion.article
                            key={service.step}
                            className="group relative h-full rounded-2xl bg-white p-8 lg:p-10 text-center flex flex-col"
                            style={{
                                border: `1px solid ${colors.logo}33`,
                                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
                            }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                style={{ backgroundColor: colors.logo }}
                            />

                            <span
                                className="absolute top-5 text-5xl font-black leading-none select-none"
                                style={{
                                    color: `${colors.logo}14`,
                                    [isRTL ? 'left' : 'right']: '1.25rem',
                                }}
                            >
                                {service.step}
                            </span>

                            {index < services.length - 1 && (
                                <div
                                    className="hidden md:flex absolute top-24 z-10 items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm"
                                    style={{
                                        borderColor: `${colors.logo}55`,
                                        color: colors.logo,
                                        [isRTL ? 'left' : 'right']: '-1.15rem',
                                    }}
                                >
                                    {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                </div>
                            )}

                            <div className="flex justify-center mb-7">
                                <div
                                    className="w-24 h-24 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundColor: `${colors.logo}12` }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px] flex-1">
                                {service.desc}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

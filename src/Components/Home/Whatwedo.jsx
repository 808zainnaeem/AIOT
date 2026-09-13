import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
            image: '/whatwedo-consulting.jpg',
            title: t.whatWeDoSection?.consulting || fallback.consulting,
            desc: t.whatWeDoSection?.consultingDesc || fallback.consultingDesc,
        },
        {
            step: '02',
            image: '/whatwedo-implementation.jpg',
            title: t.whatWeDoSection?.implementation || fallback.implementation,
            desc: t.whatWeDoSection?.implementationDesc || fallback.implementationDesc,
        },
        {
            step: '03',
            image: '/whatwedo-managed.jpg',
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
                            className="group relative h-[420px] cursor-pointer outline-none"
                            tabIndex={0}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                        >
                            <div
                                className="absolute inset-0 overflow-hidden rounded-2xl bg-white"
                                style={{
                                    border: `1px solid ${colors.logo}33`,
                                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <span
                                    className="absolute inset-x-0 top-0 z-20 h-1 rounded-t-2xl origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100"
                                    style={{ backgroundColor: colors.logo }}
                                />

                                <span
                                    className="absolute top-5 z-20 text-5xl font-black leading-none select-none text-white/80 drop-shadow"
                                    style={{
                                        [isRTL ? 'left' : 'right']: '1.25rem',
                                    }}
                                >
                                    {service.step}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-black/75 via-black/35 to-transparent transition-opacity duration-300 md:group-hover:opacity-0 md:group-focus-within:opacity-0 max-md:hidden">
                                    <h3 className="text-xl font-bold text-white drop-shadow">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.72) 45%, ${colors.logo}ee 100%)`,
                                        }}
                                    />
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/95 leading-relaxed text-[15px]">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {index < services.length - 1 && (
                                <div
                                    className="hidden md:flex absolute top-1/2 z-30 items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm -translate-y-1/2"
                                    style={{
                                        borderColor: `${colors.logo}55`,
                                        color: colors.logo,
                                        [isRTL ? 'left' : 'right']: '-1.15rem',
                                    }}
                                >
                                    {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                </div>
                            )}
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

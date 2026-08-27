import React, { useContext, useEffect, useRef } from 'react';
import { Shield, Cloud, FileText, Database, Lock, Server, ThumbsUp, FolderKanban, Users, Handshake } from 'lucide-react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const decimals = value.includes('.') ? value.split('.')[1].length : 0;

    useEffect(() => {
        if (!inView || !ref.current) return undefined;

        const controls = animate(0, parseFloat(value), {
            duration: 2,
            ease: 'easeOut',
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
                }
            },
        });

        return () => controls.stop();
    }, [inView, value, suffix, decimals]);

    return <span ref={ref}>{decimals ? `0.${'0'.repeat(decimals)}` : '0'}{suffix}</span>;
};

export default function ServicesStats() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const isRTL = language === 'ar';
    const t = translations.servicesStats || {};

    const stats = [
        { value: '99.9', suffix: '%', label: t.statFeedback || 'Positive Feedback', icon: ThumbsUp },
        { value: '100', suffix: '+', label: t.statProjects || 'Projects', icon: FolderKanban },
        { value: '999', suffix: '+', label: t.statUsers || 'Users', icon: Users },
        { value: '50', suffix: '+', label: t.statContributors || 'Contributors', icon: Handshake },
    ];

    const services = [
        { icon: Lock, title: t.serviceInfrastructure || 'Infrastructure', description: t.descInfrastructure || 'Building robust, scalable infrastructures...' },
        { icon: Shield, title: t.serviceSecurity || 'Security', description: t.descSecurity || 'Deploying cutting-edge security solutions...' },
        { icon: Cloud, title: t.serviceCloud || 'Cloud Services', description: t.descCloud || 'Delivering scalable cloud solutions...' },
        { icon: FileText, title: t.serviceApps || 'Business Applications', description: t.descApps || 'Developing customized business applications...' },
        { icon: Database, title: t.serviceData || 'Data Management & Analytics', description: t.descData || 'Transforming data into actionable insights...' },
        { icon: Server, title: t.serviceSupport || 'Customer Support', description: t.descSupport || 'Providing 24/7 customer support services...' },
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    };

    return (
        <section dir={isRTL ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.background }}>
            <div className="relative overflow-hidden py-14 px-6 md:px-8" style={{ backgroundColor: `${colors.logo}0F` }}>
                <div
                    className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{ background: `${colors.logo}22` }}
                />

                <motion.div
                    className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.article
                                key={stat.label}
                                className="group rounded-2xl bg-white px-6 py-8 text-center"
                                style={{
                                    border: `1px solid ${colors.logo}33`,
                                    boxShadow: '0 12px 28px rgba(15, 23, 42, 0.06)',
                                }}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                            >
                                <div
                                    className="mx-auto mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                >
                                    <Icon size={22} />
                                </div>
                                <div className="text-4xl font-bold mb-2" style={{ color: colors.logo }}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>

            <div className="relative overflow-hidden py-20 px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-14"
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
                            {t.servicesTitle || 'Our Services'}
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
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            variants={headerVariants}
                        >
                            {t.servicesHeading || 'What we offer'}
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
                            variants={headerVariants}
                        >
                            {t.servicesDescription || 'Delivering cutting-edge AI, IoT, and analytics solutions...'}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <motion.article
                                    key={service.title}
                                    className="group relative h-full rounded-2xl bg-white p-8 text-center flex flex-col"
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

                                    <div className="flex justify-center mb-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                            style={{ backgroundColor: `${colors.logo}12`, color: colors.logo }}
                                        >
                                            <Icon className="w-9 h-9" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-[15px] flex-1">
                                        {service.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

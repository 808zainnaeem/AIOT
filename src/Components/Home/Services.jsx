import React, { useContext, useEffect, useRef } from 'react';
import {
    AppWindow,
    Cloud,
    Shield,
    Smartphone,
    Brain,
    BarChart3,
    Palette,
    Workflow,
    Link2,
    ThumbsUp,
    FolderKanban,
    Users,
    Handshake,
} from 'lucide-react';
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

    return (
        <span ref={ref}>
            {decimals ? `0.${'0'.repeat(decimals)}` : '0'}
            {suffix}
        </span>
    );
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
        { icon: AppWindow, title: t.serviceWebEnterprise || 'Web & Enterprise Applications', description: t.descWebEnterprise || 'Custom web and enterprise applications built for performance, scalability, and seamless business workflows.' },
        { icon: Cloud, title: t.serviceCloudDevOps || 'Cloud & DevOps', description: t.descCloudDevOps || 'Cloud architecture, CI/CD pipelines, and DevOps practices that accelerate delivery and improve reliability.' },
        { icon: Shield, title: t.serviceCybersecurity || 'Cybersecurity', description: t.descCybersecurity || 'End-to-end security strategies that protect systems, data, and users against evolving digital threats.' },
        { icon: Smartphone, title: t.serviceMobileApps || 'Mobile Apps', description: t.descMobileApps || 'Native and cross-platform mobile experiences designed for engagement, speed, and usability.' },
        { icon: Brain, title: t.serviceAI || 'AI & Machine Learning', description: t.descAI || 'Intelligent models and automation that turn data into predictions, insights, and smarter decisions.' },
        { icon: BarChart3, title: t.serviceBigData || 'Big Data & Analytics', description: t.descBigData || 'Advanced analytics and data platforms that uncover trends and power data-driven growth.' },
        { icon: Palette, title: t.serviceUIUX || 'UI/UX Design', description: t.descUIUX || 'Human-centered interface and experience design that makes digital products clear, intuitive, and delightful.' },
        { icon: Workflow, title: t.serviceERP || 'ERP & Business Automation', description: t.descERP || 'ERP systems and process automation that connect finance, operations, and teams in one flow.' },
        { icon: Link2, title: t.serviceBlockchain || 'Blockchain Solutions', description: t.descBlockchain || 'Secure, transparent blockchain solutions for trust, traceability, and next-generation digital transactions.' },
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section
            key={language}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative overflow-hidden"
            style={{ backgroundColor: colors.background, color: colors.text }}
        >
            {/* Stats */}
            <div className="relative px-6 pt-16 md:px-8 md:pt-20">
                <motion.div
                    className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl bg-white"
                    style={{
                        border: `1px solid ${colors.logo}28`,
                        boxShadow: '0 12px 40px rgba(15, 23, 42, 0.06)',
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-60"
                        style={{
                            backgroundImage: `radial-gradient(ellipse 50% 80% at 10% 50%, ${colors.logo}10, transparent 55%), radial-gradient(ellipse 40% 60% at 90% 30%, ${colors.logo}0c, transparent 50%)`,
                        }}
                    />

                    <div className="relative grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    className={`
                                        relative px-5 py-8 md:px-8 md:py-10 text-center
                                        ${index % 2 === 1 ? 'border-s' : ''}
                                        ${index >= 2 ? 'border-t lg:border-t-0' : ''}
                                        ${index > 0 ? 'lg:border-s' : ''}
                                    `}
                                    style={{ borderColor: `${colors.logo}22` }}
                                    variants={itemVariants}
                                >
                                    <div
                                        className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                                        style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <div
                                        className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
                                        style={{ color: colors.logo }}
                                    >
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Services */}
            <div className="relative overflow-hidden py-20 px-6 md:py-28 md:px-8">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: `
                            radial-gradient(ellipse 60% 40% at 50% 0%, ${colors.logo}18, transparent 55%)
                        `,
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
                    }}
                />

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        className={`relative mb-14 md:mb-16 ${isRTL ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} text-center`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        <motion.span
                            className="absolute top-0 bottom-0 w-1 rounded-full hidden md:block"
                            style={{
                                background: `linear-gradient(180deg, ${colors.logo}, ${colors.logo}22)`,
                                [isRTL ? 'right' : 'left']: 0,
                            }}
                            variants={{
                                hidden: { scaleY: 0 },
                                visible: { scaleY: 1, transition: { duration: 0.7, ease: 'easeOut' } },
                            }}
                        />

                        <motion.div className="inline-flex items-center gap-3 mb-4" variants={headerVariants}>
                            <span className="h-px w-8 md:hidden" style={{ backgroundColor: colors.logo }} />
                            <p
                                className="text-sm font-semibold tracking-[0.22em] uppercase"
                                style={{ color: colors.logo }}
                            >
                                {t.servicesTitle || 'Our Services'}
                            </p>
                        </motion.div>

                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-[1.15] mb-4 max-w-2xl mx-auto md:mx-0"
                            style={{ color: colors.text }}
                            variants={headerVariants}
                        >
                            {t.servicesHeading || 'What we offer'}
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                            variants={headerVariants}
                        >
                        {t.servicesDescription ||
                            'We help businesses simplify operations and business decisions, and drive digital transformation with accuracy.'}
                        </motion.p>

                        <motion.div
                            className="mt-6 h-1 w-20 rounded-full mx-auto md:mx-0"
                            style={{ backgroundColor: colors.logo }}
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { duration: 0.65 } },
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl"
                        style={{
                            backgroundColor: `${colors.logo}22`,
                            border: `1px solid ${colors.logo}22`,
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    >
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <motion.article
                                    key={service.title}
                                    className={`group relative bg-white p-7 md:p-8 ${isRTL ? 'text-right' : 'text-left'} transition-colors duration-300 hover:bg-[#0f172a]/[0.02]`}
                                    variants={itemVariants}
                                >
                                    <span
                                        className={`absolute top-0 bottom-0 w-0.5 scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${
                                            isRTL ? 'right-0 origin-bottom' : 'left-0 origin-top'
                                        }`}
                                        style={{ backgroundColor: colors.logo }}
                                    />

                                    <div
                                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                                        style={{
                                            backgroundColor: `${colors.logo}14`,
                                            color: colors.logo,
                                            marginInlineStart: isRTL ? 'auto' : undefined,
                                            marginInlineEnd: isRTL ? 0 : undefined,
                                        }}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <h3
                                        className="text-lg font-bold mb-2.5 leading-snug"
                                        style={{ color: colors.text }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
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

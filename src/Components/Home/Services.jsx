import React, { useContext, useEffect, useRef } from 'react';
import { Shield, Cloud, FileText, Database, Lock, Server } from 'lucide-react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion, useInView, animate } from 'framer-motion'; // <-- Added imports

// Counter component for animated numbers
const AnimatedCounter = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (inView && ref.current) {
            const numericValue = parseFloat(value);
            animate(0, numericValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    ref.current.textContent = Math.floor(latest) + suffix;
                },
            });
        }
    }, [inView, value, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

export default function ServicesStats() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;

    const t = translations.servicesStats || {};

    const stats = [
        { value: "99.9", suffix: "%", label: t.statFeedback || "Positive Feedback" },
        { value: "100", suffix: "+", label: t.statProjects || "Projects" },
        { value: "999", suffix: "+", label: t.statUsers || "Users" },
        { value: "50", suffix: "+", label: t.statContributors || "Contributors" }
    ];

    const services = [
        { icon: <Lock className="w-12 h-12" />, title: t.serviceInfrastructure || "Infrastructure", description: t.descInfrastructure || "Building robust, scalable infrastructures..." },
        { icon: <Shield className="w-12 h-12" />, title: t.serviceSecurity || "Security", description: t.descSecurity || "Deploying cutting-edge security solutions..." },
        { icon: <Cloud className="w-12 h-12" />, title: t.serviceCloud || "Cloud Services", description: t.descCloud || "Delivering scalable cloud solutions..." },
        { icon: <FileText className="w-12 h-12" />, title: t.serviceApps || "Business Applications", description: t.descApps || "Developing customized business applications..." },
        { icon: <Database className="w-12 h-12" />, title: t.serviceData || "Data Management & Analytics", description: t.descData || "Transforming data into actionable insights..." },
        { icon: <Server className="w-12 h-12" />, title: t.serviceSupport || "Customer Support", description: t.descSupport || "Providing 24/7 customer support services..." },
    ];

    // Variants for staggered service cards
    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <div className="bg-white mx-auto" style={{ backgroundColor: colors.background }}>
            {/* Stats Section */}
            <motion.div
                className="bg-orange-50 py-12 px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-2 border-orange-300 p-8 text-center rounded-xl shadow-md"
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-gray-600 text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Services Section */}
            <div className="py-16 px-8 max-w-7xl mx-auto">
                <motion.div
                    className="mx-auto text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2
                        className="text-gray-800 text-xl font-semibold mb-2"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        {t.servicesTitle || "Our Services"}
                    </motion.h2>

                    <motion.div
                        className="w-16 h-1 mx-auto bg-red-500 mb-4 rounded-full"
                        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8 } } }}
                    />

                    <motion.h3
                        className="text-4xl font-bold text-gray-900 mb-4"
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    >
                        {t.servicesHeading || "What we Offers"}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-center"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                        {t.servicesDescription || "Delivering cutting-edge AI, IoT, and analytics solutions..."}
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-5 text-center border-b-4 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
                            style={{
                                borderColor: colors.logo,
                                boxShadow: `0 4px 6px rgba(${parseInt(colors.logo.slice(1, 3), 16)}, ${parseInt(colors.logo.slice(3, 5), 16)}, ${parseInt(colors.logo.slice(5, 7), 16)}, 0.15)`
                            }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -8 }}
                        >
                            <div className="flex justify-center mb-4 relative">
                                <div className="relative">
                                    <div style={{ color: colors.logo }}>{service.icon}</div>
                                    <div className="absolute -bottom-1 -right-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
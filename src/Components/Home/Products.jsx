import React, { useContext } from 'react';
import { Database, Scale, Cloud } from 'lucide-react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Colors } from '../../Utils/Colors';
import { motion } from 'framer-motion';

export default function OurProducts() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;

    const t = translations.ourProducts || {};

    const products = [
        {
            icon: <Database className="w-16 h-16" />,
            title: t.product1Title || "SAP Business One User Interface",
            description: t.product1Desc || "Enhance your business operations with our user-friendly SAP Business One interface, designed for seamless navigation and efficient management of your enterprise resources."
        },
        {
            icon: <Scale className="w-16 h-16" />,
            title: t.product2Title || "Hire Lawyer Online",
            description: t.product2Desc || "Connect with experienced legal professionals through our streamlined online platform, making it easy to find and hire the right lawyer for your needs."
        },
        {
            icon: <Cloud className="w-16 h-16" />,
            title: t.product3Title || "Connector",
            description: t.product3Desc || "Effortlessly integrate and manage your systems with our versatile connector, designed to streamline data flow and enhance connectivity across your platforms."
        }
    ];

    // Variants for header children
    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Variants for product cards
    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white py-20 px-8" style={{ backgroundColor: colors.background }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2
                        className="text-gray-800 text-xl font-semibold mb-2"
                        variants={headerVariants}
                    >
                        {t.sectionTitle || "Our Products"}
                    </motion.h2>

                    <motion.div
                        className="w-24 h-0.5 bg-gray-800 mx-auto mb-8 rounded-full"
                        variants={{
                            hidden: { scaleX: 0, originX: 0.5 },
                            visible: { scaleX: 1, transition: { duration: 0.8 } }
                        }}
                    />

                    <motion.h3
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                        variants={headerVariants}
                    >
                        {t.heading || "Advanced Solutions for Every Need"}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-base"
                        variants={headerVariants}
                    >
                        {t.description || "Explore our range of innovative products designed to enhance performance, streamline operations, and drive growth..."}
                    </motion.p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="p-7 text-center border rounded-xl relative overflow-hidden transition-all duration-300"
                            style={{
                                borderColor: colors.logo,
                                boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                            }}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex justify-center mb-6 relative">
                                <motion.div
                                    className="relative inline-block"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div style={{ color: colors.logo || "#1e293b" }}>{product.icon}</div>
                                    <motion.div
                                        className="absolute -bottom-2 -right-3 w-10 h-10 bg-yellow-400 rounded-full"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    />
                                </motion.div>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-5">
                                {product.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Show More Button */}
                {/* <div className="text-center">
                    <motion.button
                        className="border-2 border-gray-900 text-gray-900 font-medium px-10 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.showMore || "Show more"}
                    </motion.button>
                </div> */}
            </div>
        </div>
    );
}
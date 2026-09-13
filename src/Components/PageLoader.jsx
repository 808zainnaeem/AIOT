import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageLoader = ({ visible }) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="aiot-loader fixed inset-0 z-[9999] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    role="status"
                    aria-live="polite"
                    aria-label="Loading AIOT"
                >
                    <div className="aiot-loader__glow" />
                    <div className="aiot-loader__glow aiot-loader__glow--soft" />
                    <div className="aiot-loader__grid" />

                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className={`aiot-loader__dust aiot-loader__dust--${i + 1}`} />
                    ))}

                    <div className="aiot-loader__stage">
                        <svg className="aiot-loader__track" viewBox="0 0 200 200" aria-hidden="true">
                            <circle cx="100" cy="100" r="88" />
                        </svg>
                        <svg className="aiot-loader__progress" viewBox="0 0 200 200" aria-hidden="true">
                            <circle cx="100" cy="100" r="88" />
                        </svg>
                        <div className="aiot-loader__orbit aiot-loader__orbit--outer" />
                        <div className="aiot-loader__orbit aiot-loader__orbit--mid" />
                        <span className="aiot-loader__spark aiot-loader__spark--one" />
                        <span className="aiot-loader__spark aiot-loader__spark--two" />
                        <span className="aiot-loader__spark aiot-loader__spark--three" />

                        <motion.div
                            initial={{ scale: 0.82, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src="/logo-icon.png" alt="AIOT" className="aiot-loader__icon" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageLoader = ({ visible }) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="aiot-loader"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    role="status"
                    aria-live="polite"
                    aria-label="Loading AIOT"
                >
                    <div className="aiot-loader__logo">
                        <img
                            src="/NewLogo.png"
                            alt=""
                            aria-hidden="true"
                            className="aiot-loader__logo-base"
                        />
                        <div className="aiot-loader__logo-fill" aria-hidden="true">
                            <img src="/NewLogo.png" alt="" />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;

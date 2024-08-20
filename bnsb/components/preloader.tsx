"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePreloader } from '@/lib/preloader-context';

const Preloader = () => {
    const { isOpen, setIsOpen } = usePreloader();
    
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000); // Adjust the timeout value as needed
    }, [setIsOpen]);

    const topVariants = {
        open: { height: '50vh' },
        closed: { height: '0vh' }
    };

    const bottomVariants = {
        open: { height: '50vh' },
        closed: { height: '0vh' }
    };

    return (
        <div className="fixed inset-0 z-50 h-screen overflow-hidden pointer-events-none">
            <motion.div
                initial="open"
                animate={isOpen ? "open" : "closed"}
                variants={topVariants}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute left-0 right-0 top-0 bg-gradient-to-t from-transparent to-black"
            />

            <motion.div
                initial="open"
                animate={isOpen ? "open" : "closed"}
                variants={bottomVariants}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"
            />
        </div>
    );
}

export default Preloader;

"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000); // Adjust the timeout value as needed
    }, []);

    const topVariants = {
        open: { height: '50vh' },
        closed: { height: '0vh' }
    };

    const bottomVariants = {
        open: { height: '50vh' },
        closed: { height: '0vh' }
    };

    return (
        <div className="relative h-screen overflow-hidden">
            <motion.div
                initial="open"
                animate={isOpen ? "open" : "closed"}
                variants={topVariants}
                transition={{ duration: 1 }}
                className="absolute left-0 right-0 top-0 bg-black"
            />

            <motion.div
                initial="open"
                animate={isOpen ? "open" : "closed"}
                variants={bottomVariants}
                transition={{ duration: 1 }}
                className="absolute left-0 right-0 bottom-0 bg-black"
            />
        </div>
    );
}

export default Preloader;

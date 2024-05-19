"use client";

import HeaderButton from "@/components/ui/header-button";
import Nav from "@/components/ui/header-nav";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Header = () => {

    const [size, setSize] = useState<{width: number | string, height: number}>({
        width: 464,
        height: 650,
    });
    
    const variants = {
        open: {
            width: size.width,
            height: size.height,
            top: "-8px",
            right: "-8px",
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: 96,
            height: 40,
            top: "0px",
            right: "0px",
            transition: {duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1]}
        }
    }

    const handleResize = () => {
        if (typeof window !== 'undefined') {
            setSize({
                width: window.innerWidth > 480 ? 464 : 'calc(100vw - 16px)',
                height: 650,
            });
        }
    };

    useEffect(() => {
        handleResize(); // Set the size initially
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="fixed z-40 right-4 top-4">
            <motion.div 
                className="bg-[#1f1f26] relative rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_4px_4px_rgba(150,150,150,0.25),_0_1px_0_rgb(31,31,38),_0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <HeaderButton isActive={isActive} setIsActive={setIsActive} />
        </header>
    );
}
 
export default Header;
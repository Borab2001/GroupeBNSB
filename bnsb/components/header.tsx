"use client";

import HeaderButton from "@/components/ui/header-button";
import Nav from "@/components/ui/header-nav";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";


const Header = () => {

    const [isLandscape, setIsLandscape] = useState(false);
    const isMobileDevice = () => {
        const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
        return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    const isMobile = isMobileDevice();

    const [size, setSize] = useState<{width: number | string, height: number | string}>({
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

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                const isLandscape = window.matchMedia("(orientation: landscape)").matches;
                
                setIsLandscape(isLandscape && isMobile);
                setSize({
                    width: (isLandscape && isMobile) || window.innerWidth <= 480 ? 'calc(100vw - 16px)' : 464,
                    height: isLandscape && isMobile ? 'calc(100vh - 32px)' : 'calc(100vh - 32px)',
                });
            }
        };
    
        handleResize(); // Set the size initially
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [isMobile]);

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="w-full h-[72px] flex flex-row justify-start items-center p-4">
            <Link
                href="/"
                className="uppercase font-medium">
                Groupe BNSB
            </Link>
            <div className="fixed z-40 right-4 top-4">
                <motion.div 
                    className="bg-foreground relative rounded-3xl shadow-main-shadow"
                    variants={variants}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {isActive && <Nav isLandscape={isLandscape} isMobile={isMobile} />}
                    </AnimatePresence>
                </motion.div>
                <HeaderButton isActive={isActive} setIsActive={setIsActive} />
            </div>
        </header>
    );
}
 
export default Header;
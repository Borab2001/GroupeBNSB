'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import Preloader from "@/components/preloader";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface AppWrapperProps {
    children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ 
    children, 
}) => {
    const [isLoading, setIsLoading] = useState(true);

      const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    useEffect(() => {
        // Disable scrolling while loading
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
            window.scrollTo(0, 0);
            // Enable scrolling after loading
            document.body.style.maxHeight = "";
            document.body.style.overflow = "";
        }, 2000);
    }, []);

    return (
        <ReactLenis root>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Header />
            {children}
            <Footer />
        </ReactLenis>
    );
}

export default AppWrapper;
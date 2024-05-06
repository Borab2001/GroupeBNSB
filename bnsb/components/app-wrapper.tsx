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
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
            window.scrollTo(0, 0);
        }, 2000);
    }, []);

    return (
        <ReactLenis root>
            <Header />
            {children}
            <Footer />
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
        </ReactLenis>
    );
}

export default AppWrapper;
'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import Preloader from "@/components/preloader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { PreloaderProvider } from "@/lib/preloader-context";

interface TemplateProps {
    children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ 
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
        window.scrollTo(0, 0);

        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
            // Enable scrolling after loading
            document.body.style.maxHeight = "";
            document.body.style.overflow = "";
        }, 2000);
    }, []);

    return (
        <ReactLenis root>
            <PreloaderProvider>
                <div className="relative z-50">
                    <AnimatePresence mode='wait'>
                         <Preloader />
                    </AnimatePresence>
                </div>
                <Header />
                {children}
                <Footer />
            </PreloaderProvider>
        </ReactLenis>
    );
}

export default Template;
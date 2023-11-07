"use client";

import Description from '@/components/Description/Index';
import Footer from '@/components/Footer/Index';
import Gallery from '@/components/Gallery/Index';
// import Header from '@/components/Header/Index';
import Phrase from '@/components/Phrase/Index';
import Preloader from '@/components/Preloader/Index';
import { AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Lenis from '@studio-freight/lenis';

export default function Home() {
  
    const [isLoading, setIsLoading] = useState(true);
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        // Initialize Lenis and store it in the state
        const newLenis = new Lenis({
            lerp: 0.1, // Example lerp value, adjust as necessary
            // Add other Lenis options here if needed
        });
        setLenis(newLenis);

        // Start the animation frame loop
        const raf = (time) => {
            newLenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Resize event
        const resize = () => {
            newLenis.resize();
        };
        window.addEventListener('resize', resize);

        // Preloader logic
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
            window.scrollTo(0, 0);
        }, 2000);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', resize);
            newLenis.destroy(); // Important to clean up the instance when the component unmounts
        };
    }, [])

    return (
        <main className={styles.main}>
            <AnimatePresence mode='wait'>
                {
                    isLoading && <Preloader />
                }
            </AnimatePresence>
            
            <div className={styles.body}>
                {/* <Header /> */}
                <Phrase />
                <Gallery />
                <Description />
                <Footer />
            </div>
        </main>
    )
}

"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'motion/react';

const images = [
    {
        src: '/images/koton/koton1.webp',
        alt: 'Koton 1',
        name: 'Koton 1'
    },
    {
        src: '/images/koton/koton2.webp',
        alt: 'Koton 2',
        name: 'Koton 2'
    },
    {
        src: '/images/koton/koton3.webp',
        alt: 'Koton 3',
        name: 'Koton 3'
    },
    {
        src: '/images/koton/koton4.webp',
        alt: 'Koton 4',
        name: 'Koton 4'
    },
    {
        src: '/images/koton/koton5.webp',
        alt: 'Koton 5',
        name: 'Koton 5'
    },
    {
        src: '/images/koton/koton6.webp',
        alt: 'Koton 6',
        name: 'Koton 6'
    },
    {
        src: '/images/koton/koton7.webp',
        alt: 'Koton 7',
        name: 'Koton 7'
    },
    {
        src: '/images/koton/koton8.webp',
        alt: 'Koton 8',
        name: 'Koton 8'
    },
    {
        src: '/images/koton/koton9.webp',
        alt: 'Koton 9',
        name: 'Koton 9'
    }
]

const HorizontalScroll = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const [scrollDistance, setScrollDistance] = useState("0px");
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Calculate dynamic scroll distance based on screen size
    useEffect(() => {
        const calculateScrollDistance = () => {
            if (typeof window === 'undefined') return;
            
            const screenWidth = window.innerWidth;
            let imageWidth: number;
            let gap: number;
            
            // Determine image width and gap based on screen size
            if (screenWidth >= 1024) { // lg breakpoint
                imageWidth = 400; // lg:w-[400px]
                gap = 32; // md:gap-8 (2rem = 32px)
            } else if (screenWidth >= 640) { // sm breakpoint
                imageWidth = 360; // sm:w-[360px]
                gap = 24; // sm:gap-6 (1.5rem = 24px)
            } else {
                imageWidth = 260; // w-[260px]
                gap = 16; // gap-4 (1rem = 16px)
            }
            
            // Calculate total width: (number of images * image width) + (gaps between images)
            const totalWidth = (images.length * imageWidth) + ((images.length - 1) * gap);
            
            // Calculate how much we need to scroll (total width minus viewport width plus padding)
            const viewportWidth = window.innerWidth;
            const paddingWidth = viewportWidth * 0.2; // 10vw on each side
            const distance = totalWidth - viewportWidth + paddingWidth;
            
            setScrollDistance(`-${distance}px`);
        };
        
        calculateScrollDistance();
        window.addEventListener('resize', calculateScrollDistance);
        
        return () => window.removeEventListener('resize', calculateScrollDistance);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], ["0", scrollDistance]);


    return (
        <section ref={targetRef} className="relative h-[300vh] sm:h-[400vh] lg:h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-4 sm:gap-6 md:gap-8 px-[10vw]">
                    {images.map((image, index) => (
                        <div
                            key={`image${index}`}
                            className="w-[260px] sm:w-[360px] lg:w-[400px] aspect-[9/16] bg-gray-300 flex items-center justify-center"
                        >
                            <Image 
                                src={image.src}
                                alt={image.alt}
                                className='w-full h-full object-cover object-center fill'
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
 
export default HorizontalScroll;
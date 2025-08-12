"use client";

import { useRef } from 'react';
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
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // const x = useTransform(scrollYProgress, [0, 1], ["3%", "-62.5%"]);
    const x = useTransform(scrollYProgress, [0, 1], ["0", "-180vw"]);


    return (
        <section ref={targetRef} className="relative h-[300vh] sm:h-[400vh] lg:h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-[2vw] px-[10vw]">
                    {images.map((image, index) => (
                        <div
                            key={`image${index}`}
                            className="h-[80vh] aspect-[9/16] bg-gray-300 flex items-center justify-center"
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
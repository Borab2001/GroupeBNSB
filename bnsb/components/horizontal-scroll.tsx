"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'motion/react';

const cities = [
    {
        src: '/images/istanbul.webp',
        alt: 'Istanbul',
        name: 'Istanbul'
    },
    {
        src: '/images/city1.jpg',
        alt: 'city2',
        name: 'City 2'
    },
    {
        src: '/images/city1.jpg',
        alt: 'city3',
        name: 'City 3'
    }
]

const HorizontalScroll = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // const x = useTransform(scrollYProgress, [0, 1], ["3%", "-62.5%"]);
    const x = useTransform(scrollYProgress, [0, 1], ["7.5vw", "-152.5vw"]);


    return (
        <section ref={targetRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-4">
                    {cities.map((city, index) => (
                        <div 
                            key={`city${index}`}
                            className="w-[80vw] aspect-video bg-gray-300 flex items-center justify-center"    
                        >
                            <Image 
                                src={city.src}
                                alt={city.alt}
                                className='w-full h-full object-cover object-center fill'
                                width={1920}
                                height={1080}
                            />
                            {/* <p className='absolute text-white text-4xl font-bold'>
                                {city.name}
                            </p> */}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
 
export default HorizontalScroll;
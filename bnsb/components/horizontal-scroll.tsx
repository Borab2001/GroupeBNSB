"use client";

import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'motion/react';

const cities = [
    {
        src: '/images/city1.jpg',
        alt: 'city1',
        name: 'City 1'
    },
    {
        src: '/images/city1.jpg',
        alt: 'city1',
        name: 'City 1'
    },
    {
        src: '/images/city1.jpg',
        alt: 'city1',
        name: 'City 1'
    }
]

const HorizontalScroll = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-62.5%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-4">
                    {cities.map((city, index) => (
                        <div 
                            key={`city${index}`}
                            className="w-[80vw] aspect-video bg-gray-300 flex items-center justify-center"    
                        >
                            {city.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
 
export default HorizontalScroll;
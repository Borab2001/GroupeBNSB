'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

import styles from './style.module.css';
import Image from 'next/image';

const images = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "10.webp",
    "11.webp",
    "12.webp"
];

export default function Index() {
  
    const galleryRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ['start end', 'end start']
    });

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { height } = dimension;
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", resize);
        resize();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div ref={galleryRef} className={styles.gallery}>
            <Column images={[images[0], images[1], images[2]]} y={y1} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div className={styles.column} style={{ y }}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${src}`}
                        alt={`Gallery image ${index + 1}`}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            ))}
        </motion.div>
    );
};

import Image from 'next/image';
import styles from './style.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import useDimension from '@/app/hooks/useDimension';

const images = [
    "" //images here
]

export default function Index() {
    
    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['star end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])

    return (
        <div className={styles.gallery}>
            <div className={styles.gallerySpacer}></div>
            <div ref={container} className='galleryBody'>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} />
                <Column images={[images[6], images[7], images[8]]} />
            </div>
            <div className={styles.gallerySpacer}></div>
        </div>
    )
}

const Column = ({images, y=0}) => {
    return (
        <motion.div style={{y}} className={styles.column}>
            {
                images.map((src, index) => {
                    return <div key={index} className={styles.imageContainer}>
                        <Image 
                            src={`/images/${src}`}
                            fill
                            alt="image"
                        />
                    </div>
                })
            }
        </motion.div>
    )
}
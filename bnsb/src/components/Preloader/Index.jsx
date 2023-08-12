import styles from './style.module.css';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './preloadAnim';
import { useEffect, useState } from 'react';

export default function Index() {

    const [index, setIndex] = useState(0);
    const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

    useEffect(() => {
        if(index == words.length -1) return;
        
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150)
    
    }, [index]);
    
    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.intro}>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
        </motion.div>
    )
}
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { slideUp } from './preloadAnim';

export default function Index() {
    
    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.intro}>
            <p>Is Loading</p>
        </motion.div>
    )
}
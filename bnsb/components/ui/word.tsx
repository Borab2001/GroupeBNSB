
import { ReactNode } from "react";
import { motion, MotionValue, useTransform } from "motion/react";

interface WordProps {
    children: ReactNode;
    range: [number, number];
    progress: MotionValue<number>;
}


const Word: React.FC<WordProps> = ({ 
    children,
    range,
    progress
}) => {

    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ opacity: opacity }}
            >
                {children}
            </motion.span>
        </span>
    )
}

export default Word;
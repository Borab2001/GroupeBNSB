"use client";

import { motion, spring } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticIconProps {
    children: React.ReactNode;
}

const MagneticIcon: React.FC<MagneticIconProps> = ({ children }) => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            setPosition({ x, y });
        }
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

export default MagneticIcon;

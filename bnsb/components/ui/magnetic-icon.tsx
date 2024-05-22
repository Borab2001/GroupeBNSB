"use client";

import { motion } from "framer-motion";

interface MagneticIconProps {
    children: React.ReactNode;
}

const MagneticIcon: React.FC<MagneticIconProps> = ({
    children
}) => {
    return (
        <div>
            {children}
        </div>
    );
}
 
export default MagneticIcon;
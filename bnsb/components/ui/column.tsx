import Image from "next/image";

import { motion, MotionValue } from "framer-motion";

interface ColumnProps {
    images: string[];
    y: MotionValue<number>;
    className?: string;
}

const Column: React.FC<ColumnProps> = ({ images, y, className }) => {
    return (
        <motion.div
            className={`relative h-full w-1/2 md:w-1/4 sm:min-w-[250px] flex flex-col gap-[2vw] ${className}`}
            style={{ y }}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className="h-full w-full relative rounded-[1vw] overflow-hidden"
                >
                    <Image
                        src={`/${src}`}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        // sizes="100vw"
                        objectFit="cover"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default Column;

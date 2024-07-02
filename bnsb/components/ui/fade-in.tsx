import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({
    children
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.3 }}
            variants={{
            visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}
 
export default FadeIn;
import { motion } from "motion/react";
import ButtonText from "./button-text";

interface HeaderButtonProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}


const HeaderButton: React.FC<HeaderButtonProps> = ({
    isActive,
    setIsActive
}) => {
    return (
        <div
            onClick={() => {setIsActive(!isActive)}} 
            className="h-10 w-24 border border-foreground/20 backdrop-blur-3xl bg-background/20 rounded-3xl cursor-pointer absolute top-0 right-0 overflow-hidden"
        >
            <motion.div 
                className="relative w-full h-full"
                animate={{top: isActive ? "-100%" : "0"}} 
                transition={{duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
            >
                <motion.div className="w-full h-full text-foreground uppercase group shadow-main-shadow"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
                >
                    <ButtonText label="Menu" />
                </motion.div>
                <motion.div className="w-full h-full uppercase absolute top-full group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
                >
                    <ButtonText label="Close" />
                </motion.div>
            </motion.div>
        </div>
    );
}
 
export default HeaderButton;
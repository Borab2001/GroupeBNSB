import { motion } from "framer-motion";
import HeaderButtonText from "./header-button-text";

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
            className="h-10 w-24 bg-black rounded-3xl cursor-pointer absolute top-0 right-0 overflow-hidden"
        >
            <motion.div 
                className="relative w-full h-full"
                animate={{top: isActive ? "-100%" : "0"}} 
                transition={{duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
            >
                <div className="w-full h-full bg-[#1f1f26] text-white uppercase group shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_4px_4px_rgba(150,150,150,0.25),_0_1px_0_rgb(31,31,38),_0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <HeaderButtonText label="Menu" />
                </div>
                <motion.div className="w-full h-full bg-white text-black uppercase absolute top-full group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
                >
                    <HeaderButtonText label="Close" />
                </motion.div>
            </motion.div>
        </div>
    );
}
 
export default HeaderButton;
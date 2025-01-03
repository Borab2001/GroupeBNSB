import Link from "next/link";
import { motion } from "motion/react";
import { ModeToggle } from "./mode-toggle";


interface NavProps {
    isLandscape: boolean;
    isMobile: boolean;
}

const Nav: React.FC<NavProps> = ({
    isLandscape,
    isMobile
}) => {
    
    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Partners',
            url: '/partners',
        },
        {
            name: 'Be Circular',
            url: '/be-circular',
        },
        {
            name: 'Raw Materials',
            url: '/raw-materials',
        },
        {
            name: 'Contact',
            url: '/contact',
        },
    ];

    const socials = [
        {
            name: 'Facebook',
            url: '/',
        },
        {
            name: 'LinkedIn',
            url: '/',
        },
        {
            name: 'Instagram',
            url: '/',
        },
        {
            name: 'X',
            url: '/',
        },
    ];

    const animated = {
        initial: {
            opacity: 0,
            translateY: 80,
            translateX: -20
        },
        enter: (index: number) => ({
            opacity: 1,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.65,
                delay: 0.5 + (index * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
            }
        }),
        exit: {
            opacity: 0,
            // transition: { ease: [0.76, 0, 0.24, 1] }
        }
    }

    const slideIn = {
        initial: {
            opacity: 0,
            translateY: 20,
        },
        enter: (index: number) => ({
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 0.5,
                delay: 0.75 + (index * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
            }
        }),
        exit: {
            opacity: 0,
            // transition: { ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <nav className="flex flex-1 flex-col w-full h-full p-2">
            <ModeToggle />
            <div className={`flex flex-1 ${(isLandscape && isMobile) ? 'flex-row flex-wrap gap-4 py-12' : 'flex-col pt-24 pb-12'} justify-between h-full px-10 box-border`}>
                <div className="flex flex-col gap-4 justify-end">
                    {links.map((link, index) => (
                        <motion.div 
                            key={index}
                            className="text-4xl text-primary-foreground"
                            custom={index}
                            variants={animated}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                        >
                            <Link 
                                href={link.url}
                                className="relative block transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] hover:translate-x-8"    
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-end gap-y-1">
                    {socials.map((social, index) => (
                        <motion.div
                            key={`social_${index}`}
                            className={`${(isLandscape && isMobile) ? 'w-1/2' : 'w-1/2'} text-primary-foreground`}
                            custom={index}
                            variants={slideIn}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                        >
                            <Link 
                                href={social.url}
                                className="relative after:absolute after:bg-primary-foreground after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                            >
                                <span className="text-primary-foreground">
                                    {social.name}
                                </span>
                                
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;
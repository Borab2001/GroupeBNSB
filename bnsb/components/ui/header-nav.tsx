import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";


const Nav = () => {

    const currentYear = new Date().getFullYear();
    
    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact',
        }
    ];

    const socials = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/groupe-bnsb/',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/groupebnsb/',
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
        <nav className="flex flex-1 flex-col w-full h-full p-4">
            <motion.div
                custom={0}
                variants={slideIn}
                animate="enter"
                exit="exit"
                initial="initial"
                className="flex justify-start"
            >
                <ThemeToggle />
            </motion.div>
            <div className="flex flex-1 flex-col pt-24 pb-8 justify-between h-full px-10 box-border">
                <div className="flex flex-col gap-8 justify-end">
                    {links.map((link, index) => (
                        <motion.div 
                            key={index}
                            className="text-5xl text-foreground"
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
                            className="w-1/2 text-primary-foreground"
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
                                <span className="text-foreground">
                                    {social.name}
                                </span>
                                
                            </Link>
                        </motion.div>
                    ))}

                    <motion.p
                        custom={0}
                        variants={slideIn}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="w-full pt-8 text-foreground"
                    >
                        &#169; {currentYear} Groupe BNSB
                    </motion.p>
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;
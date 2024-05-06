import Link from "next/link";

import { motion } from "framer-motion";

const Nav = () => {
    
    const links = [
        {
            name: 'Main Objectives',
            url: '/main-objectives',
        },
        {
            name: 'Situation',
            url: '/situation',
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
        <nav className="flex flex-col justify-between h-full pt-24 px-10 pb-12 box-border">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <motion.div 
                        key={index}
                        className="text-4xl text-black"
                        custom={index}
                        variants={animated}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                    >
                        <Link href={link.url} 
                            className="relative block transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] hover:translate-x-8"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-wrap">
                {socials.map((social, index) => (
                    <motion.div
                        key={`social_${index}`}
                        className="w-1/2 text-black"
                        custom={index}
                        variants={slideIn}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                    >
                        <Link 
                            href={social.url}
                        >
                            {social.name}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </nav>
    );
}
 
export default Nav;
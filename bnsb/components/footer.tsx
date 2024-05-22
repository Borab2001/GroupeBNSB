import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import MagneticIcon from "@/components/ui/magnetic-icon";
import Link from "next/link";

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    
    const socials = [
        {
            name: 'Facebook',
            url: '/',
            icon: <FaFacebookF size={32} />,
        },
        {
            name: 'LinkedIn',
            url: '/',
            icon: <FaLinkedinIn size={32} />,
        },
        {
            name: 'Instagram',
            url: '/',
            icon: <FaInstagram size={32} />,
        },
        {
            name: 'X',
            url: '/',
            icon: <FaXTwitter size={32} />,
        },
    ];

    return (
        <footer 
            className="relative h-[100vh]" 
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        > {/* my-8 */}
            <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
                <div className="sticky top-[calc(100vh-100vh)] h-[100vh] px-4 flex flex-col justify-center items-center gap-12">
                    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-zinc-400 via-main to-zinc-400 bg-[200%_auto] text-[max(10vw,42px)] whitespace-normal text-center text-transparent font-medium bg-clip-text">
                        Groupe BNSB
                    </span>
                    <div className="flex w-full max-w-md flex-row justify-between items-center px-4">
                        {socials.map((social, index) => (
                            <MagneticIcon
                                key={index}
                            >
                                <Link href={social.url}>
                                    {social.icon}
                                </Link>
                            </MagneticIcon>
                        ))}
                    </div>
                    <p className="w-full text-center">&#169; Groupe BNSB {currentYear}. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
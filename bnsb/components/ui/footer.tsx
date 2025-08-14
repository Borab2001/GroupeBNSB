/* eslint-disable react/forbid-dom-props */
import Link from "next/link";

const Footer = () => {
    const socials = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/groupebnsb/',
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/company/groupebnsb',
        },
    ]

    return (
        <footer className="w-full flex items-end justify-between p-4 md:p-8 text-muted-foreground font-geist">
            {/* <div className="flex flex-row items-end gap-4 md:gap-16">
                <p className="text-sm font-medium font-playfair uppercase">Groupe BNSB</p>
                <div className="flex flex-col items-start gap-0 font-playfair">
                    <span className="text-muted-foreground text-sm">&#169; {currentYear} Groupe BNSB</span>
                    <span className="text-muted-foreground text-sm">All rights reserved</span>
                </div>
            </div> */}
            <p className="text-sm font-medium uppercase">Groupe BNSB</p>
            <div className="flex flex-row items-center gap-2">
                {socials.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Link href={link.link} target="_blank" className="text-muted-foreground text-xs uppercase font-medium hover:text-foreground transition-colors duration-200 font-geist">
                            {link.name}
                        </Link>
                        {index < socials.length - 1 && (
                            <span className="text-muted-foreground text-xs">/</span>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;

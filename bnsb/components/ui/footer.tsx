/* eslint-disable react/forbid-dom-props */
import Link from "next/link";

const Footer = () => {

    const currentYear = new Date().getFullYear();

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
        // <footer className="w-full flex flex-col pt-6 md:pt-12 lg:pt-24">
        //     <div className="">
        //         <div className="flex flex-col items-end">
        //             <div className="w-full max-w-4xl px-4">
        //                 <span className="text-muted-foreground text-sm md:text-base capitalize">
        //                     &#169; {currentYear} Groupe BNSB. All rights reserved.
        //                 </span>
        //                 <p className="text-3xl md:text-6xl lg:text-[80px] py-8 border-b border-secondary">Suivez-nous</p>
        //                 <div className="flex flex-row space-x-8 pt-8">
        //                     {socials.map((link, index) => (
        //                         <div key={index} className="flex flex-col items-start gap-2 md:gap-4">
        //                             <Link
        //                                 key={index}
        //                                 href={link.link}
        //                                 className="text-foreground font-medium text-base md:text-lg"
        //                             >
        //                                 {link.name}
        //                             </Link>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="relative overflow-hidden h-[27vw] w-full">
        //         <span className="text-foreground text-nowrap text-[17vw] absolute -bottom-[152px] -left-[4vw] w-auto">
        //             Groupe BNSB
        //         </span>
        //     </div>
        // </footer>
        <footer className="w-full flex items-end justify-between p-4 md:p-8 text-muted-foreground">
            <div className="flex flex-row items-end gap-4 md:gap-16">
                <p className="text-sm font-medium font-playfair uppercase">Groupe BNSB</p>
                <div className="flex flex-col items-start gap-0 font-playfair">
                    <span className="text-muted-foreground text-sm">&#169; {currentYear} Groupe BNSB</span>
                    <span className="text-muted-foreground text-sm">All rights reserved</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                {socials.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Link href={link.link} className="text-muted-foreground text-xs uppercase font-medium hover:text-foreground transition-colors duration-200 font-geist">
                            {link.name}
                        </Link>
                        {index < socials.length - 1 && (
                            <span className="text-muted-foreground text-xs font-geist">/</span>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;

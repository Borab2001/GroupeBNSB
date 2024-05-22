import MagneticIcon from "./ui/magnetic-icon";

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    
    const socials = [
        {
            name: 'Facebook',
            url: '/',
            icon: '',
        },
        {
            name: 'LinkedIn',
            url: '/',
            icon: '',
        },
        {
            name: 'Instagram',
            url: '/',
            icon: '',
        },
        {
            name: 'X',
            url: '/',
            icon: '',
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
                    {socials.map((social, index) => (
                        <MagneticIcon
                            key={index}
                        >
                            {social.name}
                        </MagneticIcon>
                    ))}
                    {/* TODO: Magnetic socials icons here */}
                    <p className="w-full text-center">&#169; Groupe BNSB {currentYear}. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
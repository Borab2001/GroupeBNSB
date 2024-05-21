const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer 
            className="relative h-[800px]" 
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        > {/* my-8 */}
            <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
                <div className="sticky top-[calc(100vh-800px)] h-[800px] flex flex-col justify-center items-center gap-12">
                    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-9xl text-center text-transparent font-medium bg-clip-text">
                        Groupe BNSB
                    </span>
                    {/* TODO: Magnetic socials icons here */}
                    <p className="w-full text-center">&#169; Groupe BNSB {currentYear}. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
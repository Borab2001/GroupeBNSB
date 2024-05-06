const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mb-8">
            <p className="w-full text-center">&#169; Groupe BNSB {currentYear}. All rights reserved</p>
        </footer>
    );
}
 
export default Footer;
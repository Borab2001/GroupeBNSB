import Image from "next/legacy/image";
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 50; // Adjust this value to determine when transparency starts

            setIsTransparent(scrollTop >= threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        position: 'fixed',
        zIndex: 9,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isTransparent ? 0 : 1,
        transition: 'opacity 0.3s ease',
        width: '100%'
    };

    return (
        <header style={headerStyle}>
            <Image src="/images/logo.webp" alt="Logo" width={200} height={65} />
            <Image src="/images/sous.webp" alt="Logo" width={300} height={35} />
        </header>
    );
};

export default Header;

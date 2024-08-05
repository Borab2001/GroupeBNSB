"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { usePreloader } from "./preloader-context";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    ...props
}) => {
    
    const router = useRouter();
    const { setIsOpen } = usePreloader();
    
    const handleTransition = async (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
            router.push(href);
        }, 1000);
    }

    return (
        <Link 
            href={href} 
            {...props}
            onClick={handleTransition}
             className="relative block transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] hover:translate-x-8"
        >
            
            {children}
        </Link>
    );
}

export default TransitionLink;
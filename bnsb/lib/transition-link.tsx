"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { usePreloader } from "./preloader-context";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className,
    ...props
}) => {
    
    const router = useRouter();
    const { setIsOpen } = usePreloader();
    
    const handleTransition = async (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
            router.push(href);
        }, 9000);
    }

    return (
        <Link 
            href={href} 
            {...props}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    );
}

export default TransitionLink;
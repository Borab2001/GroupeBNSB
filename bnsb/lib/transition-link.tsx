"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

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
    
    const handleTransition = async (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        await router.push(href);
    }

    return (
        <Link 
            href={href} 
            {...props}
            onClick={handleTransition}
        >
            
            {children}
        </Link>
    );
}

export default TransitionLink;
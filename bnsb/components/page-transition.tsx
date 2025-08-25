"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    // const logoOverlayRef = useRef(null);
    // const logoRef = useRef<SVGElement>(null);
    const blocksRef = useRef<HTMLDivElement[]>([]);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const createBlocks = () => {
            if (!overlayRef.current) return;
            overlayRef.current.innerHTML = "";
            blocksRef.current = [];

            for (let i: number = 0; i < 20; i++) {
                const block: HTMLDivElement = document.createElement("div");
                block.className = "flex-1 w-full bg-foreground transform scale-x-0 origin-left";
                overlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        };

        createBlocks();

        gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left center" });

        // if (logoRef.current) {
        //     const path = logoRef.current.querySelectorAll("path");
        //     if (path) {
        //         const length = path[0].getTotalLength();
        //         gsap.set(path, {
        //             strokeDasharray: length,
        //             strokeDashoffset: length,
        //             fill: "transparent",
        //         });
        //     }
        // }

        revealPage();

        const handleRouteChange = (url: string) => {
            if (isTransitioning.current) return;
            isTransitioning.current = true;
            coverPage(url);
        };

        const clickHandlers = new Map<Element, (e: Event) => void>();

        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach((link) => {
            const clickHandler = (e: Event) => {
                e.preventDefault();
                if (!e.currentTarget) return;
                const href = (e.currentTarget as HTMLAnchorElement).href;
                const url = new URL(href).pathname;
                if (url !== pathname) {
                    handleRouteChange(url);
                }
            };
            clickHandlers.set(link, clickHandler);
            link.addEventListener("click", clickHandler);
        });

        return () => {
            links.forEach((link) => {
                const handler = clickHandlers.get(link);
                if (handler) {
                    link.removeEventListener("click", handler);
                }
            });
        };
    }, [router, pathname]);


    const coverPage = (url: string) => {
        const tl = gsap.timeline({
            onComplete: () => { router.push(url);},
        });

        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left center",
        })
        
        // .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
        // .set(
        //     logoRef.current.querySelectorAll("path"),
        //     {
        //         strokeDashoffset: logoRef.current
        //         .querySelector("path")
        //         .getTotalLength(),
        //         fill: "transparent",
        //     },
        //     "-=0.25"
        // )
        // .to(
        //     logoRef.current.querySelectorAll("path"),
        //     {
        //         strokeDashoffset: 0,
        //         duration: 2,
        //         ease: "power2.inOut",
        //     },
        //     "-=0.5"
        // )
        // .to(
        //     logoRef.current.querySelectorAll("path"),
        //     {
        //         fill: "#e3e4d8",
        //         duration: 1,
        //         ease: "power2.out",
        //     },
        //     "-=0.5"
        // )
        // .to(logoOverlayRef.current, {
        //     opacity: 0,
        //     duration: 0.25,
        //     ease: "power2.out",
        // });
    };

    const revealPage = () => {
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            delay: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
            },
        });
    }

    return (
        <>
            <div id="transition-overlay" ref={overlayRef} className="fixed inset-0 w-screen h-[100svh] flex pointer-events-none z-50" />
            {/* <div id="logo-overlay" ref={logoOverlayRef} className="fixed inset-0 w-screen h-[100svh] z-10 flex justify-center items-center bg-[#222] pointer-events-none opacity-0">
                <div id="logo-container" className="w-[200px] h-[200px] flex justify-center items-center p-5">
                    <Logo ref={logoRef} />
                </div>
            </div> */}
            {children}
        </>
    );
};

export default PageTransition;



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useTransform, useScroll } from "framer-motion";

// import Column from "@/components/ui/column";

// const images = [
//     "1.webp",
//     "2.webp",
//     "3.webp",
//     "4.webp",
//     "5.webp",
//     "6.webp",
//     "7.webp",
//     "8.webp",
//     "9.webp",
//     "10.webp",
//     "11.webp",
//     "12.webp",
// ];

// const Gallery = () => {
//     const galleryRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: galleryRef,
//         offset: ["start end", "end start"],
//     });

//     const [dimension, setDimension] = useState({ width: 0, height: 0 });

//     const { height } = dimension;
//     const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//     const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
//     const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//     const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

//     useEffect(() => {
//         const resize = () => {
//             setDimension({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         };

//         window.addEventListener("resize", resize);
//         resize();

//         return () => window.removeEventListener("resize", resize);
//     }, []);

//     return (
//         <div
//             ref={galleryRef}
//             className="w-screen h-[175vh] bg-[#2d2d2d] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
//         >
//             <Column
//                 images={[images[0], images[1], images[2]]}
//                 y={y1}
//                 className="-top-[53%]"
//             />
//             <Column
//                 images={[images[3], images[4], images[5]]}
//                 y={y2}
//                 className="-top-[95%]"
//             />
//             <Column
//                 images={[images[6], images[7], images[8]]}
//                 y={y3}
//                 className="-top-[45%] hidden sm:flex"
//             />
//             <Column
//                 images={[images[9], images[10], images[11]]}
//                 y={y4}
//                 className="-top-[85%] hidden md:flex"
//             />
//         </div>
//     );
// };

// export default Gallery;

"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll } from "framer-motion";
import Column from "@/components/ui/column";


const images = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "10.webp",
    "11.webp",
    "12.webp",
];

interface GalleryDimension {
    width: number;
    height: number;
}

export default function Gallery() {

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [dimension, setDimension] = useState<GalleryDimension>({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ['start end', 'end start'],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div ref={galleryRef} className="w-screen h-[175vh] bg-[#2d2d2d] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden">
            <Column images={[images[0], images[1], images[2]]} y={y} topDistance="top-[-45%]" />
            <Column images={[images[3], images[4], images[5]]} y={y2} topDistance="top-[-95%]" />
            <Column images={[images[6], images[7], images[8]]} y={y3} topDistance="top-[-45%]" />
            <Column images={[images[9], images[10], images[11]]} y={y4} topDistance="top-[-75%]" />
        </div>
    );
}
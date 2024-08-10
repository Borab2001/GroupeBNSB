"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const SlideGallery = () => {

    const images = [
        '/1.webp',
        '/2.webp',
        '/3.webp',
        '/4.webp',
        '/5.webp',
        '/6.webp',
        '/7.webp',
        '/8.webp',
    ];

    useEffect(() => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            const gallerySection = document.getElementById("gallery-section") as HTMLElement;
            const track = document.getElementById("image-track") as HTMLElement;

            const handleOnScroll = () => {
                const scrollTop = gallerySection.scrollTop;
                const scrollHeight = gallerySection.scrollHeight - gallerySection.clientHeight;
                const scrollPercentage = (scrollTop / scrollHeight) * -100;

                track.style.transform = `translate(${scrollPercentage}%, -50%)`;

                const images = Array.from(track.getElementsByClassName("image")) as HTMLImageElement[];
                for (const image of images) {
                image.style.objectPosition = `${100 + scrollPercentage}% center`;
                }
            };

            gallerySection.addEventListener("scroll", handleOnScroll);
            return () => gallerySection.removeEventListener("scroll", handleOnScroll);
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-scroll transition-all duration-400 ease-in-out" id="gallery-section">
            <div className="h-[300vh]">
                <div id="image-track" className="flex gap-[4vmin] fixed z-[-1] left-1/2 top-1/2 transform translate-y-[-50%]">
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            className="w-[40vmin] h-[56vmin] object-cover object-[100%_center]"
                            src={src}
                            alt={`Image ${index + 1}`}
                            draggable={false}
                            width={3087}
                            height={3087}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default SlideGallery;
'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const images = [
    { src: '/1.webp', alt: 'Image 1 description' },
    { src: '/2.webp', alt: 'Image 2 description' },
    { src: '/3.webp', alt: 'Image 3 description' },
    { src: '/4.webp', alt: 'Image 4 description' },
    { src: '/5.webp', alt: 'Image 5 description' },
    { src: '/6.webp', alt: 'Image 6 description' },
    { src: '/7.webp', alt: 'Image 7 description' },
    { src: '/8.webp', alt: 'Image 8 description' },
];

const SlideGallery: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const percentage = (scrollPosition / maxScroll) * -100;
        const nextPercentage = Math.max(Math.min(percentage, 0), -300);

        track.style.transform = `translate(${nextPercentage}%, -50%)`;

        const images = track.getElementsByClassName('image') as HTMLCollectionOf<HTMLImageElement>;
            for (const image of images) {
                image.style.objectPosition = `${100 + nextPercentage}% center`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-[500vh]">
            <div className="h-screen sticky top-0 flex items-center">
                <div
                    ref={trackRef}
                    className="absolute w-auto left-1/2 top-1/2 transform -translate-y-1/2 flex gap-[4vmin] select-none"
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className="image w-[40vmin] h-[56vmin] object-cover object-[100%_center] shrink-0"
                            src={image.src}
                            alt={image.alt}
                            draggable="false"
                            width={300}
                            height={300}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideGallery;

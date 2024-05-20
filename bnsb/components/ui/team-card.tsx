"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./button";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";


interface TeamCardProps {
    image: string;
    name: string;
    description: string;
    link: string;
  }
  
  const TeamCard: React.FC<TeamCardProps> = ({ 
    image, 
    name, 
    description, 
    link 
}) => {
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const router = useRouter();

    return (
        <div
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();

                mouseX.set(e.clientX - left);
                mouseY.set(e.clientY - top);
            }}
            className="group relative max-w-[350px] w-full rounded-xl bg-white"
            >
            <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                background: useMotionTemplate
                    `
                        radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(200, 200, 200, 0.4), transparent 80%)
                    `,
                }}
            />
            <div className="relative flex flex-col gap-3 rounded-lg border border-black/10 px-4 py-5">
                <div className="space-y-2">
                    <Image
                        src={image}
                        alt={`${name} image`}
                        className="rounded-xl h-52 w-full object-cover overflow-hidden"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-row items-center justify-between pt-2">
                        <h3 className="text-xl font-semibold text-main">
                            {name}
                        </h3>
                    </div>
                    <p className="text-sm leading-[1.5] text-neutral-400 pb-3">
                        {description}
                    </p>
                    <Button 
                        onClick={() => router.push(link)}
                        variant="default"
                        size="default"
                        className="bg-main shadow-main-shadow"
                    >
                        See on Linkedin
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
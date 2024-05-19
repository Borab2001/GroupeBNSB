"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {

    const router = useRouter();

    return (
        <div className="max-w-3xl mx-auto h-lvh flex flex-col gap-4 p-4 items-center justify-center">
            <h1 className="text-[max(4vw,32px)] leading-16 text-balance text-center font-semibold bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text">
                Biodiversity Nature Sustainability Business
            </h1>
            <h2 className="text-[max(2vw,24px)] text-center text-balance">
                Innovation and Excellence in Design and Sourcing
            </h2>
            <Button 
                onClick={() => router.push("/contact")}
                variant="default"
                size="lg"
                className="mt-4 text-md rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_4px_4px_rgba(150,150,150,0.25),_0_1px_0_rgb(31,31,38),_0_10px_15px_-3px_rgba(0,0,0,0.1)]"
            >
                Contact Us
            </Button>
        </div>
    );
}
 
export default Hero;
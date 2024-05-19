"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {

    const router = useRouter();

    return (
        <div className="h-lvh flex flex-col gap-4 items-center justify-center">
            <h1 className="text-[max(4vw,48px)] leading-16 p-4 text-balance text-center font-semibold bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text">
                Biodiversity Nature Sustainability Business
            </h1>
            <h2 className="text-[max(2vw,24px)] text-center text-balance">
                Innovation and Excellence in Design and Sourcing
            </h2>
            <Button onClick={() => router.push("/contact")}>
                Contact
            </Button>
        </div>
    );
}
 
export default Hero;
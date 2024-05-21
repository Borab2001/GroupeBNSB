"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: React.FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh] flex justify-center items-center", className)}>
            <div
                className={
                "sticky top-1/2 -translate-y-1/2 mx-auto flex h-auto max-w-4xl items-center bg-transparent px-4"
                }
            >
                <p
                    ref={targetRef}
                    className={
                        "sticky top-0 flex flex-wrap justify-center p-5 text-2xl font-semibold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
                    }
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={"text-black dark:text-white"}
            >
                {children}
            </motion.span>
        </span>
    );
};

export default TextRevealByWord;

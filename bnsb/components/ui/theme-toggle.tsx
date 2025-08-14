"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button 
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5" />
            </button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground/5"
            aria-label="Toggle theme"
        >
            <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
            <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
        </button>
    );
}

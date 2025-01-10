"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [page, setPage] = useState(pathname);

    useEffect(() => {
        setPage(pathname);
    }, [pathname]);

    return (
        <motion.div key={page}>
            {children}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-white z-50 pointer-events-none origin-bottom"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="fixed inset-0 bg-white z-50 pointer-events-none origin-top"
            />
        </motion.div>
    );
};

export default PageTransition;
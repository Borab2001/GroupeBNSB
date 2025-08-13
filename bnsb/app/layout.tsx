import type { Metadata } from "next";
import { 
	// Noto_Sans, 
	Playfair,
	// Noto_Serif,
	Geist,
	// Lora
} from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProvider from "@/lib/scroll-provider";
import PageTransition from "@/components/page-transition";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/ui/footer";

const notoSans = Geist({
	variable: "--font-geist",
	subsets: ["latin"],
});

const playfair = Playfair({
	variable: "--font-playfair",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Groupe BNSB",
	description: "Groupe BNSB is a design and sourcing office based in Istanbul, specializing in textile design and production for a sustainable future.",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ScrollProvider>
				<body
					className={`${notoSans.variable} ${playfair.variable} antialiased`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<AnimatePresence mode="wait">
							<PageTransition>
								<Header />
								{children}
								<Footer />
							</PageTransition>
						</AnimatePresence>
					</ThemeProvider>
				</body>
			</ScrollProvider>
		</html>
	);
}

import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { 
	// Noto_Sans, 
	Playfair,
	// Noto_Serif,
	Geist,
	// Lora
} from "next/font/google";
import "./globals.css";

// import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProvider from "@/lib/scroll-provider";
// import PageTransition from "@/components/page-transition";
// import { AnimatePresence } from "framer-motion";
// import Footer from "@/components/ui/footer";

const geist = Geist({
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
  	// children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ScrollProvider>
				<body
					className={`${geist.variable} ${playfair.variable} antialiased`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{/* <AnimatePresence mode="wait">
							<PageTransition>
								<Header />
								{children}
								<Footer />
							</PageTransition>
						</AnimatePresence> */}
						<div className="w-full flex flex-1 flex-col flex-grow h-full">
							<div className="min-h-[80vh] w-full flex flex-1 flex-col justify-center items-center p-4">
								<div className="flex gap-4 flex-col items-center">
									<h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular font-playfair">
										Groupe BNSB
									</h1>
									<p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center font-geist">
										Our website is currently not available. We are working hard to bring you a better experience. Please check back later.
									</p>
								</div>
							</div>
						</div>
					</ThemeProvider>
					<Analytics />
				</body>
			</ScrollProvider>
		</html>
	);
}

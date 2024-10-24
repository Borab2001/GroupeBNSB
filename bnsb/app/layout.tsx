import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationBar from "@/components/notification-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Groupe BNSB - Design & Sourcing Office",
	description: "Groupe BNSB supports all players in the textile sector in their eco-responsible transition to enable the textile industry to be more sustainable.",
	keywords: "fashion, sustainability, product passport, design, sourcing, biodiversity, eco-friendly, textile"
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {

  return (
    <html lang="en">
		<body className={inter.className}>
			<NotificationBar />
			{children}
			<Analytics />
		</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groupe BNSB - Design &amp; Sourcing Office",
  description: "Groupe BNSB supports all players in the textile sector in their eco-responsible transition to enable the textile industry to be more sustainable.",
  keywords: "fashion, sustainability, product passport, design, sourcing, biodiversity, eco-friendly, textile"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}

import Head from 'next/head'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Groupe BNSB supports all players in the textile sector in their eco-responsible transition to enable the textile industry to be more sustainable." />
                <meta name="keywords" content="fashion, sustainability, product passport, design, sourcing, biodiversity, eco-friendly, textile" />
                <title>Groupe BNSB - Design &amp; Sourcing Office</title>
                <meta name="robots" content="noindex" />
                {inter.link}
            </Head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}

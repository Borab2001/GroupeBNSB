import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Groupe BNSB - Design & Sourcing Office',
	description: 'Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.',
	charset: 'UTF-8',
	httpEquiv: 'X-UA-Compatible',
	content: 'IE=edge',
	viewport: 'width=device-width, initial-scale=1.0',
	metaDescription: 'Groupe BNSB supports all players in the textile sector in their eco-responsible transition to enable the textile industry to be more sustainable.',
	keywords: 'fashion, sustainability, product passport, design, sourcing, biodiversity, eco-friendly, textile',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<meta charSet={metadata.charset} />
			<meta httpEquiv={metadata.httpEquiv} content={metadata.content} />
			<meta name="viewport" content={metadata.viewport} />
			<meta name="description" content={metadata.metaDescription} />
			<meta name="keywords" content={metadata.keywords} />
			<title>{metadata.title}</title>
			<meta name="robots" content="noindex" />
		</head>
		<body className={inter.className}>
			{children}
		</body>
		</html>
	)
}

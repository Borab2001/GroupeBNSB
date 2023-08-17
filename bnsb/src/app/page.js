"use client";

import Description from '@/components/Description/Index';
import Footer from '@/components/Footer/Index';
import Gallery from '@/components/Gallery/Index';
// import Header from '@/components/Header/Index';
import Phrase from '@/components/Phrase/Index';
import Preloader from '@/components/Preloader/Index';
import { AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

// import Lenis from '@studio-freight/lenis';
// import { useEffect } from 'react';

export default function Home() {
  
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(
			async () => {
				setTimeout(() => {
					setIsLoading(false);
					document.body.style.cursor = 'default'
					window.scrollTo(0,0);
				}, 2000)
			}
		)()
	}, [])

  	return (
		<main className={styles.main}>
			<AnimatePresence mode='wait'>
				{
					isLoading && <Preloader />
				}
			</AnimatePresence>
			
			<div className={styles.body}>
				{/* <Header /> */}
				<Phrase />
				<Gallery />
				<Description />
				<Footer />
			</div>
		</main>
	)
}

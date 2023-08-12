"use client";

import Description from '@/components/Description/Index';
import Gallery from '@/components/Gallery/Index';
import Phrase from '@/components/Phrase/Index';
import styles from './page.module.css';

// import Lenis from '@studio-freight/lenis';
// import { useEffect } from 'react';

export default function Home() {
  
	// useEffect(() => {
	// 	const lenis = new Lenis()

	// 	function raf(time) {
	// 	lenis.raf(time)
	// 	requestAnimationFrame(raf)
	// 	}

	// 	requestAnimationFrame(raf)
	// }, []);

  return (
		<main className={styles.main}>
			<div className={styles.body}>
				<Phrase />
				<Gallery />
				<Description />
			</div>
		</main>
	)
}

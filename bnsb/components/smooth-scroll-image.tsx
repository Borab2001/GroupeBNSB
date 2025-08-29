"use client";

import * as React from "react";

import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollImageProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default ""
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default ""
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
}

type iISmoothScrollImageBackgroundProps = iISmoothScrollImageProps

const SmoothScrollImageBackground: React.FC<
	iISmoothScrollImageBackgroundProps
> = ({
	scrollHeight,
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
}) => {
	const {scrollY} = useScroll();

	const clipStart = useTransform(
		scrollY,
		[0, scrollHeight],
		[initialClipPercentage, 0],
	);
	const clipEnd = useTransform(
		scrollY,
		[0, scrollHeight],
		[finalClipPercentage, 100],
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const backgroundSize = useTransform(
		scrollY,
		[0, scrollHeight + 500],
		["150%", "100%"],
	);

	return (
		<motion.div
			className="sticky top-0 h-screen w-full"
			style={{
				clipPath,
				willChange: "transform, opacity",
			}}
		>
			{/* Mobile background */}
			<motion.div
				className="absolute inset-0 md:hidden"
				style={{
					backgroundImage: `url(${mobileImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			{/* Desktop background */}
			<motion.div
				className="absolute inset-0 hidden md:block"
				style={{
					backgroundImage: `url(${desktopImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
		</motion.div>
	);
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
 const SmoothScrollImage: React.FC<iISmoothScrollImageProps> = ({
	scrollHeight = 1500,
	desktopImage = "",
	mobileImage = "",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	return (
		<div
			style={{height: `calc(${scrollHeight}px + 100vh)`}}
			className="relative w-full"
		>
			<SmoothScrollImageBackground
				scrollHeight={scrollHeight}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
			/>
		</div>
	);
};
export default SmoothScrollImage;

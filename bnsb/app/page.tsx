import HorizontalScroll from "@/components/horizontal-scroll";
import Paragraph from "@/components/paragraph";

export default function Home() {

	const paragraph = "We work with brands, retailers, and manufacturers to develop sustainable textile solutions that are better for people and the planet.";

    return (
        <div className="w-full flex flex-1 flex-col flex-grow h-full">
			<div className="min-h-[80vh] w-full flex flex-1 flex-col justify-center items-center p-4">
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular font-playfair">
						A more sustainable future for textile
					</h1>
					<p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center font-geist">
						We are a design and sourcing office with experts over 25 years of experience in fashion, aiming for a more sustainable future.
					</p>
				</div>
			</div>
			<HorizontalScroll />
			<Paragraph value={paragraph} />
        </div>
    );
}

import Cards from "@/components/cards";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Team from "@/components/team";
import TextRevealByWord from "@/components/ui/text-reveal";

export default function Home() {  

  	return (
		<main className="overflow-x-hidden">
			<Hero />
			{/* <Cards /> */}
			<Team />
			<Gallery />
			<TextRevealByWord text={"Lorem ipsum dolor this is a text reveal animation text"} />
		</main>
  	);
}

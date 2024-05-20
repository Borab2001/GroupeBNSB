import Cards from "@/components/cards";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Team from "@/components/team";

export default function Home() {  

  	return (
		<main className="overflow-x-hidden">
			<Hero />
			{/* <Cards /> */}
			<Team />
			<Gallery />
		</main>
  	);
}

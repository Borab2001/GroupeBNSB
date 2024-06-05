import Cards from "@/components/cards";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Team from "@/components/team";
import { ContactForm } from "@/components/ui/contact-form";
import TextRevealByWord from "@/components/ui/text-reveal";

export default function Contact() {  

  	return (
		<main className="flex h-screen justify-center items-center">
			<div className="max-w-5xl">
				<ContactForm />
			</div>
		</main>
  	);
}

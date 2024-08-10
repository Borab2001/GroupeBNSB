import { ContactForm } from "@/components/ui/contact-form";

export default function Contact() {  

  	return (
		<main className="flex min-h-screen justify-center items-center">
			<div className="max-w-3xl w-full px-4">
				<div className="mb-8">
					<h1 className="text-3xl mb-2">Let&apos;s Get In Touch</h1>
					<p className="text-muted-foreground">You can reach us any time</p>
				</div>
				<ContactForm />
			</div>
		</main>
  	);
}

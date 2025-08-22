import { ContactForm } from "@/components/contact-form";

const Contact = () => {
    return (
        <div className="w-full flex flex-1 flex-col justify-center min-h-hero h-full p-4 lg:p-8">
			<div className="grid grid-cols-12 gap-8 items-center px-0 sm:px-4 lg:px-16">
				<div className="col-span-12 sm:col-span-7 lg:col-span-6 flex flex-col justify-center">
					<h1 className="text-6xl lg:text-7xl max-w-2xl tracking-tighter font-medium font-playfair">
						Get in touch
					</h1>
					<ContactForm />
				</div>
				<div className="col-span-12 sm:col-span-5 lg:col-span-6 place-items-start sm:place-items-center">
					<div className="flex flex-col items-start gap-4 sm:gap-8">
						<div className="flex flex-col items-start gap-2">
							<h2 className="text-base font-regular text-muted-foreground">Get help</h2>
							<p className="text-base font-regular text-foreground">info@groupebnsb.com</p>
						</div>

						<div className="flex flex-col items-start gap-2">
							<h2 className="text-base font-regular text-muted-foreground">Call us</h2>
							<p className="text-base font-regular text-foreground">+90 ... ... .. ..</p>
						</div>

						<div className="flex flex-col items-start gap-2">
							<h2 className="text-base font-regular text-muted-foreground">Option 3</h2>
							<p className="text-base font-regular text-foreground">Tell them something</p>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
}
 
export default Contact;
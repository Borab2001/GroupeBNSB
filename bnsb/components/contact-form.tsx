"use client"

import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ButtonText from "@/components/ui/button-text";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { EmailSchema } from "@/schema";
import { SendEmail } from "@/actions";


export function ContactForm() {

	const router = useRouter();
	const form = useForm<z.infer<typeof EmailSchema>>({
		resolver: zodResolver(EmailSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		}
	});

	const onSubmit = async (data: z.infer<typeof EmailSchema>) => {
        try {
            await SendEmail(data);

            toast.success("Your message is sent successfully!");
            router.refresh();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    }

	return (
		<Form {...form}>
			<form 
				className="w-full space-y-8 max-w-2xl mx-auto py-10"
				onSubmit={form.handleSubmit(onSubmit)} 
			>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="firstName">First Name</FormLabel>
								<FormControl>
									<Input id="firstName" type="text" placeholder="Your first name" {...field} />
								</FormControl>
								<FormMessage>{form.formState.errors.firstName?.message}</FormMessage>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="lastName">Last Name</FormLabel>
								<FormControl>
									<Input id="lastName" type="text" placeholder="Your last name" {...field} />
								</FormControl>
								<FormMessage>{form.formState.errors.lastName?.message}</FormMessage>
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="email">Email</FormLabel>
							<FormControl>
								<Input id="email" type="email" placeholder="Your email" {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.email?.message}</FormMessage>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="subject">Subject</FormLabel>
							<FormControl>
								<Input id="subject" type="text" placeholder="Subject of your message" {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.subject?.message}</FormMessage>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
                            <FormLabel htmlFor="message">Message</FormLabel>
							<FormControl>
								<Textarea id="message" {...field} placeholder="Your message" />
							</FormControl>
                            <FormMessage>{form.formState.errors.message?.message}</FormMessage>
						</FormItem>
					)}
				/>

				<Button 
					type="submit" 
					className="group py-0 h-10 mt-4 font-geist"
					variant="default"
					size="default"
				>
					<div className="relative h-full font-medium overflow-hidden">
						<ButtonText label="Submit" />
					</div>
				</Button>
			</form>
		</Form>
	)
}
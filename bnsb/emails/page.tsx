import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BnsbWelcomeEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const BnsbWelcomeEmail = ({
  firstName,
  lastName,
  email,
  message,
}: BnsbWelcomeEmailProps) => (
	<Html>
		<Head />
		<Preview>
			New Contact Form Submission for Groupe BNSB.
		</Preview>
		<Tailwind>
		<Body style={main}>
			<Container style={container}>
				<Img
					src={`https://groupe-bnsb.com/images/logo.webp`}
					width="170"
					height="50"
					alt="Groupe BNSB Logo"
					style={logo}
				/>
				<Text style={paragraph}>From: <span className="uppercase">{lastName}</span> {firstName}</Text>
				<Text style={paragraph}>Email: {email}</Text>
				<Text style={paragraph}>
					Welcome to Groupe BNSB, the sales intelligence platform that helps you
					uncover qualified leads and close deals faster.
				</Text>
				<Section style={btnContainer}>
					<Button style={button} href="https://getBnsb.com">
						Get started
					</Button>
				</Section>
				<Text style={paragraph}>
					Best,
					<br />
					The Groupe BNSB team
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Dolaplıkuyu Sok., 1, Arnavutköy Mah., Besiktas, İstanbul
				</Text>
			</Container>
		</Body>
		</Tailwind>
	</Html>
);

BnsbWelcomeEmail.PreviewProps = {
	firstName: "John",
	lastName: "Doe",
	email: "johndoe@email.com",
	message: "Hello, I'm interested in your product.",
} as BnsbWelcomeEmailProps;

export default BnsbWelcomeEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const logo = {
	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const btnContainer = {
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};

import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";

interface BNSBContactEmailProps {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	messageLines: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

const currentYear = new Date().getFullYear();


export const BNSBContactEmail = ({
  	firstName,
	lastName,
	email,
	subject,
	messageLines
}: BNSBContactEmailProps) => (
	<Html>
		<Head />
		<Preview>
			New Contact Submission from {firstName} {lastName}.
		</Preview>
		
		<Body style={main}>
			<Container style={container}>
				<Heading style={title}>New Contact Submission</Heading>
				<Text style={paragraph}>First Name: {firstName}</Text>
				<Text style={paragraph}>Last Name: {lastName}</Text>
				<Text style={paragraph}>Email: {email}</Text>
				<br />
				<Text style={paragraph}>Subject: {subject}</Text>
				{messageLines.map((line, index) => (
					<Text key={index} style={paragraph}>{line}</Text>
				))}
				<Hr style={hr} />
				<Text style={footer}>
					Eğlence Sk. No:4, Arnavutköy Mh., 34345 Beşiktas / İstanbul, Türkiye
					<br />
					&#169; Groupe BNSB {currentYear}
				</Text>
			</Container>
		</Body>
	</Html>
);

export default BNSBContactEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const title = {
	color: "#000000",
	fontSize: "24px",
	fontWeight: "600",
	marginBottom: "20px",
}

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#cccccc",
	fontSize: "12px",
};
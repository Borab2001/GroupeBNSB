"use client";

import TeamCard from "@/components/ui/team-card";

const teamMembers = [
	{
		image: "/1.webp",
		name: "Berrin Bahar",
		description: "Founder & Chief Executive Office",
		link: "https://www.linkedin.com/in/berrin-bahar-a8947718/",
	},
	{
		image: "/2.webp",
		name: "Sibel Yavuz",
		description: "Head Of Fashion Retailers",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/3.webp",
		name: "Yavuz Özbay",
		description: "Financial Advisor",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/4.webp",
		name: "Tamer Zakaria",
		description: "Head of Fashion Retailers ~ Egypt",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/5.webp",
		name: "Bora Balos",
		description: "Software Engineer",
		link: "https://www.linkedin.com/in/bora-balos/",
	},
];

export default function Team() {
    return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="w-full px-4 text-[max(3vw,24px)] leading-16 text-balance text-center font-semibold bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text">
				Our Team
			</h2>
			<h3 className="inline-flex px-4 text-[max(2.5vw,24px)] leading-normal animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent font-medium bg-clip-text">
				10+ years of textile quality experience
			</h3>
			<div className="max-w-6xl mx-auto px-4 py-16 flex flex-wrap justify-center items-center gap-4">
				{teamMembers.map((member, index) => (
					<TeamCard
						key={index}
						image={member.image}
						name={member.name}
						description={member.description}
						link={member.link}
					/>
				))}
			</div>
		</div>
    );
}

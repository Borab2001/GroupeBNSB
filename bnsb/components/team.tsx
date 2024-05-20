"use client";

import TeamCard from "@/components/ui/team-card";

const teamMembers = [
	{
		image: "/1.webp",
		name: "Berrin Bahar",
		description: "Chief Executive Office & Founder",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/2.webp",
		name: "Berrin Bahar",
		description: "Chief Executive Office & Founder",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/3.webp",
		name: "Berrin Bahar",
		description: "Chief Executive Office & Founder",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/4.webp",
		name: "Berrin Bahar",
		description: "Chief Executive Office & Founder",
		link: "https://linkedin.com/in/johndoe",
	},
	{
		image: "/5.webp",
		name: "Berrin Bahar",
		description: "Chief Executive Office & Founder",
		link: "https://linkedin.com/in/johndoe",
	},
];

export default function Team() {
    return (
      <div className="px-4 py-16 flex flex-wrap justify-center items-center gap-4">
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
    );
}

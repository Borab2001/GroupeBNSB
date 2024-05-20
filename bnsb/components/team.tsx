"use client";

import TeamCard from "@/components/ui/team-card";

const teamMembers = [
  {
    image: "/path/to/image1.jpg",
    name: "John Doe",
    description: "Team member description 1",
    link: "https://linkedin.com/in/johndoe",
  },
  {
    image: "/path/to/image2.jpg",
    name: "Jane Smith",
    description: "Team member description 2",
    link: "https://linkedin.com/in/janesmith",
  },
  // Add more team members here
];

export default function Team() {
    return (
      <div className="flex flex-wrap gap-6">
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

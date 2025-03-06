import React from "react";
import { Linkedin, Twitter } from "lucide-react";

// Types
interface SocialLink {
  platform: "linkedin" | "twitter";
  url: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

// Data
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ngatia Wambugu",
    role: "Senior Partner",
    description:
      "Advocate of the High Court of Kenya, Notary Public, Commissioner for Oaths, Patent Agent",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
    image: "/images/man-sillohoute.png",
  },
  {
    id: "2",

    name: "Billison Ogugu",
    role: "Legal Assistant",
    description:
      "Specializes in real estate law, contract negotiations, and property disputes.",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
    image: "/images/man-sillohoute.png",
  },
  {
    id: "3",
    name: "Jackson K",
    role: "Consultant",
    description:
      "Focused on criminal defense and civil litigation, ensuring justice for every client.",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
    image: "/images/man-sillohoute.png",
  },
  {
    id: "4",
    name: "Patrick Karanja",
    role: "Consultant",
    description:
      "Provides critical support for legal research, drafting, and case management.",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
    image: "/images/man-sillohoute.png",
  },
];

// TeamMemberCard Component
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const getSocialIcon = (platform: "linkedin" | "twitter") => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
    }
  };

  return (
    <div className="team-member bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative">
      <div className="absolute top-4 left-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
        {member.role}
      </div>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-500 mt-2">{member.description}</p>
        <div className="social-links mt-4 flex gap-4">
          {member.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label={`${member.name}'s ${link.platform}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Teams Component
const Teams: React.FC = () => {
  return (
    <section className="team-section py-10">
      <div className="mx-2 md:mx-auto md:max-w-2xl lg:max-w-6xl w-full md:p-5 lg:p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Meet Our Legal Team
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-8"
          role="list"
          aria-label="Legal team members"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

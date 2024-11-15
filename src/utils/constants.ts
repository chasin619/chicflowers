export type AccordionItem = {
  title: string;
  content: string;
  lists?: string[];
  images?: string[];
};

export interface TeamMember {
  name: string;
  position: string;
  image: string | null;
}

export const CapabilityAccordionData: AccordionItem[] = [
  {
    title: "The Look",
    content:
      "Zoom out and see the big picture of your event. Even if you can’t envision it yet, trust that we can—and we’ll execute it flawlessly.",
    lists: ["Event Design", "Design Consulting", "Floral Design"],
    images: ["/look-accordion-1.jpg", "/look-accordion-2.jpg", "/look-accordion-3.jpg"]
  },
  {
    title: "The Feel",
    content:
      "There’s no looking good without feeling good. These are the key components that make an event flow with ease and cohesion, so all you have to do is have a good time.",
    lists: [
      "Event Production",
      "Floor Plans",
      "Testing + Staging",
      "Custom Dance Floors",
      "Custom-Built Furnishings", 
    ],
    images: ["/feel-accordion-1.jpg", "/feel-accordion-2.jpg"]
  },
  {
    title: "The Details",
    content:
      "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "Custom Linen",
      "TableWare",
      "Invitations + Day-Of Stationery",
      "Favors + Accessories",
      "Bespoke Finishing Touches ",
    ],
    images: ["/detail-accordion-1.jpeg","/studio-3.jpeg", "/studio-7.jpeg"]
  },
];

export const AboutAccordionData: AccordionItem[] = [
  {
    title: "Supportive",
    content:
      "Our community thrives on mutual respect and a genuine desire to help one another succeed. We offer unwavering support, lending a helping hand and a listening ear whenever needed. Through our supportive culture, we create an environment where collaboration, well-being, and shared achievements flourish.",
  },
  {
    title: "Passionate",
    content:
      "We approach our work with unwavering enthusiasm and dedication. Our passion drives us to give our best effort in everything we do, inspiring creativity and fostering a deep commitment to our mission. This fervor fuels our drive to continuously excel and make a positive impact.",
  },
  {
    title: "Determined",
    content:
      "We are resolute in overcoming challenges and achieving our goals. With a steadfast commitment, we push through obstacles, adapt to changing circumstances, and persistently work toward success. Our determination empowers us to stand strong in the face of adversity and to embrace growth opportunities.",
  },
  {
    title: "Empowered",
    content:
      "We believe in nurturing the potential within each individual. Our commitment to empowerment involves providing the tools, resources, and support needed for personal and professional growth. By fostering a culture of empowerment, we enable our team members to take initiative, make meaningful contributions, and achieve their aspirations.",
  },
  {
    title: "Transparent",
    content:
      "Honesty and openness are the cornerstones of our interactions. We communicate openly, sharing information and insights to build trust and mutual understanding. Through transparency, we create an environment where collaboration thrives and where decisions are made with clarity and integrity.",
  },
  {
    title: "Innovative",
    content:
      "Embracing the spirit of innovation, we continuously seek new and creative ways to push boundaries and drive progress. We encourage experimentation and exploration, valuing fresh ideas and visionary thinking. Our commitment to innovation fuels our ability to evolve and meet the ever-changing needs of our customers, partners and the market.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alona Chasin",
    position: "Founder/CEO",
    image: "/member-1.webp",
  },
  {
    name: "Albina",
    position: "SENIOR EVENT DESIGNER",
    image: "/member-2.webp",
  },
  {
    name: "Victoria",
    position: "EVENT DESIGNER",
    image: "/member-3.webp",
  },
  {
    name: "Alla",
    position: "EVENT DESIGNER",
    image: "/member-4.webp",
  },
  {
    name: "Antonina",
    position: "EVENT DESIGNER",
    image: "/member-5.webp",
  },
  {
    name: "Alexander",
    position: "DESIGN ASSOCIATE",
    image: "/member-6.webp",
  },
  {
    name: "Alexey",
    position: "CCO + VP of sales",
    image: "/member-7.webp",
  },
];

export const navRoutes = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/capabilities",
    name: "Capabilities",
  },
  {
    href: "/contact",
    name: "Contact Us",
  },
];

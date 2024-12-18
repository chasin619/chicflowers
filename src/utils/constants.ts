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

export const BASE_URL = "https://velourweb-admin.vercel.app";

export const CapabilityAccordionData: AccordionItem[] = [
  {
    title: " Floral Design and Arrangements",
    content:
      "Zoom out and see the big picture of your event. Even if you can’t envision it yet, trust that we can—and we’ll execute it flawlessly.",
    lists: [
     "Bouquets: Bridal bouquets, bridesmaids’ bouquets, and flower girl baskets.",
      "Ceremony Flowers: Altar arrangements, aisle markers, arches, chuppahs, or mandap decorations.",
      "Reception Flowers: Centerpieces, table garlands, cake flowers, and bar arrangements.", 
      "Wearable Flowers: Boutonnieres, corsages, flower crowns, or floral jewelry."],
    images: [
      "/look-accordion-1.jpg",
      "/look-accordion-2.jpg",
      "/look-accordion-3.jpg",
    ],
  },
  {
    title: "Venue Styling and Decor",
    content:
      "There’s no looking good without feeling good. These are the key components that make an event flow with ease and cohesion, so all you have to do is have a good time.",
    lists: [
      "Custom Decor Setup: Draping, candles, lanterns, and other decorative elements to complement the floral arrangements.",
      "Theme Development: Creating a cohesive design plan that aligns with the couple's wedding theme (e.g., rustic, bohemian, modern).",
      "Lighting Coordination: Integrating lighting elements like fairy lights or uplighting to enhance the ambiance.",
      "Custom Dance Floors",
      "Custom-Built Furnishings",
    ],
    images: ["/feel-accordion-1.jpg", "/feel-accordion-2.jpg"],
  },
  {
    title: "Conceptual Design and Planning",
    content:
      "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "Mood Boards: Developing visual inspiration boards to showcase design concepts.",
      "Color Palette Consultation: Helping the couple choose complementary colors for flowers and decor.",
      "Invitations + Day-Of Stationery",
      "Design Mockups: Providing samples or small-scale mockups of centerpiece ideas or floral designs.",
      "Bespoke Finishing Touches ",
    ],
    images: ["/detail-accordion-1.jpeg", "/studio-3.webp", "/studio-7.webp"],
  },
  {
    title: "Delivery and Installation",
    content:
      "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "On-Site Setup: Delivering and arranging flowers at the venue on the wedding day.",
      "Pinning Flowers: Assisting with pinning boutonnieres or attaching corsages..",
      "Ceremony-to-Reception Transfers: Moving floral arrangements from the ceremony to the reception when needed.",
    ],
  },
  {
    title: "Rentals and Accessories",
    content:
      "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "Vases and Containers: Providing vases, urns, or other vessels for floral arrangements.",
      "Arches and Structures: Renting out arches, stands, or flower walls for the ceremony and reception.",
      "Candles and Holders: Supplying taper candles, votives, or hurricane lanterns.",
    ],
  },
  {
    title: "Sustainable Practices",
    lists: [
      "Repurposing Flowers: Arranging for floral donations or repurposing ceremony flowers for the reception.",
      "Eco-Friendly Options: Using locally sourced flowers, sustainable materials, or foam-free designs.",
    ],
  },
  {
    title: "Full-Service Packages",
    // content:
    //   "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "End-to-End Coordination: Managing all floral and decor needs, including communication with the couple and other vendors.",
      "Wedding Day Management: Being present to oversee floral placement and troubleshoot decor issues.",
     
    ],
  },
  {
    title: "Post-Wedding Services",
    // content:
    //   "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "Flower Preservation: Offering bouquet preservation or keepsake arrangements.",
      "Clean-Up Services: Handling post-event floral removal and disposal.",
     
    ],
  },
  {
    title: "Additional Value-Added Services",
    // content:
    //   "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
    lists: [
      "Collaborations with Other Vendors: Coordinating with planners, photographers, and lighting designers to ensure cohesive decor.",
      "Workshops: Teaching DIY flower arrangement classes for bridal parties (pre-wedding).",
      "Personalization: Customizing designs to reflect cultural traditions or personal stories.",
    ],
  },
];

export const AboutAccordionData: AccordionItem[] = [
  // {
  //   title: "Supportive",
  //   content:
  //     "Our community thrives on mutual respect and a genuine desire to help one another succeed. We offer unwavering support, lending a helping hand and a listening ear whenever needed. Through our supportive culture, we create an environment where collaboration, well-being, and shared achievements flourish.",
  // },
  // {
  //   title: "Passionate",
  //   content:
  //     "We approach our work with unwavering enthusiasm and dedication. Our passion drives us to give our best effort in everything we do, inspiring creativity and fostering a deep commitment to our mission. This fervor fuels our drive to continuously excel and make a positive impact.",
  // },
  // {
  //   title: "Determined",
  //   content:
  //     "We are resolute in overcoming challenges and achieving our goals. With a steadfast commitment, we push through obstacles, adapt to changing circumstances, and persistently work toward success. Our determination empowers us to stand strong in the face of adversity and to embrace growth opportunities.",
  // },
  // {
  //   title: "Empowered",
  //   content:
  //     "We believe in nurturing the potential within each individual. Our commitment to empowerment involves providing the tools, resources, and support needed for personal and professional growth. By fostering a culture of empowerment, we enable our team members to take initiative, make meaningful contributions, and achieve their aspirations.",
  // },
  // {
  //   title: "Transparent",
  //   content:
  //     "Honesty and openness are the cornerstones of our interactions. We communicate openly, sharing information and insights to build trust and mutual understanding. Through transparency, we create an environment where collaboration thrives and where decisions are made with clarity and integrity.",
  // },
  // {
  //   title: "Innovative",
  //   content:
  //     "Embracing the spirit of innovation, we continuously seek new and creative ways to push boundaries and drive progress. We encourage experimentation and exploration, valuing fresh ideas and visionary thinking. Our commitment to innovation fuels our ability to evolve and meet the ever-changing needs of our customers, partners and the market.",
  // },
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
    href: "/services",
    name: "Services",
  },
  {
    href: "/contact",
    name: "Contact Us",
  },
  {
    href: "/blog",
    name: "Blog",
  },
];


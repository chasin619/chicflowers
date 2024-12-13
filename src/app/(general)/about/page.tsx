import React from "react";
import { Accordion } from "@/components/accordion";
import HeroSection from "@/ui/About/HeroSection";
import StudioSection from "@/ui/About/StudioSection";
import TeamSection from "@/ui/About/TeamSection";
import { AboutAccordionData } from "@/utils/constants";

export const metadata = {
  title:
    "CHIC Flowers: Luxury Event & Wedding Floral Design Experts",
  description:
    "Learn about CHIC Flowers, your premier luxury wedding florist in San Diego and Los Angeles. Our exclusive floral designs and high-end arrangements ensure your wedding day is nothing short of spectacular.",
  openGraph: {
    title:
      "CHIC Flowers: Luxury Event & Wedding Floral Design Experts",
    description:
      "Learn about CHIC Flowers, your premier luxury wedding florist in San Diego and Los Angeles. Our exclusive floral designs and high-end arrangements ensure your wedding day is nothing short of spectacular.",
    type: "website",
    url: "https://chicflowers.com/about",
    images: [
      {
        url: "https://chicflowers.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "About CHIC Flowers - Luxury Wedding Florist",
      },
    ],
    siteName: "CHIC Flowers",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CHIC Flowers: Luxury Event & Wedding Floral Design Experts",
    description:
      "Learn about CHIC Flowers, your premier luxury wedding florist in San Diego and Los Angeles. Our exclusive floral designs and high-end arrangements ensure your wedding day is nothing short of spectacular.",
    images: ["https://chicflowers.com/twitter.png"],
    creator: "@alona_chasin",
  },
};
const About = () => {
  return (
    <div className="relative w-full mt-10 flex justify-center items-center flex-col">
      <HeroSection />
      <div className="mt-20 flex justify-center items-center flex-col md:px-20 mobile:px-6">
        <h1 className="text-center mobile:text-2xl md:text-3xl lg:text-4xl uppercase">
          The Chic Edge
        </h1>
        <p className="text-center mt-4 mb-8 lg:text-2xl md:text-xl mobile:text-lg font-medium lg:w-[60%] mobile:w-[100%]">
          As a leading event designer in San Diego, Chic is a highly skilled, empathetic,
          and strategically positioned design and production studio. With extensive expertise 
          and a relaxed, approachable style, collaborating with us unlocks a range of benefits 
          tailored to your needs. Explore the unique qualities that make Chic stand out from other
          top event designers and creative production houses.
        </p>
        <Accordion data={AboutAccordionData} />
        <TeamSection />
        <StudioSection />
      </div>
    </div>
  );
};

export default About;

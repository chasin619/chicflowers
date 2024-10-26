import { Accordion } from "@/components/accordion";
import HeroSection from "@/ui/About/HeroSection";
import { AboutAccordionData } from "@/utils/constants";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full mt-10 flex justify-center items-center flex-col">
      <HeroSection />
      <div className="mt-20 flex justify-center items-center flex-col px-20">
        <h1 className="text-center text-4xl lg:text-6xl uppercase">
          The Chic Edge
        </h1>
        <p className="text-center mt-4 mb-8 text-2xl font-medium w-[60%]">
          We are an empathic, wildly talented, and uniquely positioned design
          and production house. Backed by substantive knowledge and an easy
          approach, working with us unlocks a world of benefits at your
          disposal. Explore below the characteristics that separate Birch from
          the rest.
        </p>
        <Accordion data={AboutAccordionData} />
      </div>
    </div>
  );
};

export default About;

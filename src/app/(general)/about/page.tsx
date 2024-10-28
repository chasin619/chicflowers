import { Accordion } from "@/components/accordion";
import HeroSection from "@/ui/About/HeroSection";
import StudioSection from "@/ui/About/StudioSection";
import TeamSection from "@/ui/About/TeamSection";
import { AboutAccordionData } from "@/utils/constants";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full mt-10 flex justify-center items-center flex-col">
      <HeroSection />
      <div className="mt-20 flex justify-center items-center flex-col md:px-20 mobile:px-6">
        <h1 className="text-center mobile:text-2xl md:text-3xl lg:text-4xl uppercase">
          The Chic Edge
        </h1>
        <p className="text-center mt-4 mb-8 lg:text-2xl md:text-xl mobile:text-lg font-medium lg:w-[60%] mobile:w-[100%]">
          We are an empathic, wildly talented, and uniquely positioned design
          and production house. Backed by substantive knowledge and an easy
          approach, working with us unlocks a world of benefits at your
          disposal. Explore below the characteristics that separate Chic from
          the rest.
        </p>
        <Accordion data={AboutAccordionData} />
        <TeamSection />
        <StudioSection />
      </div>
    </div>
  );
};

export default About;

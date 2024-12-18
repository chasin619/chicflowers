import { Slider } from "@/components/slider";
import React from "react";

const RecordSection = () => {
  return (
    <div className="w-full lg:px-20 lg:py-28 mobile:px-4 mobile:py-20 xl:mt-[2000px] lg:mt-[2000px] md:mt-[2000px] mobile:mt-[500px]">
      <h1 className="lg:text-5xl mobile:text-3xl uppercase font-medium">
        What We Provide 
      </h1>
      <p className="lg:text-xl mobile:text-base font-medium text-left mt-2 lg:w-[900px] mobile:w-90">
        Artistic floral work in house with the finest product available world wide.

        Curate unforgettable experiences with flowers and installations

        Custom Built, structures, Ceilings, Elevated pieces, including natural materials as well as steal, glass, wood. 

        We own our ceremony structures and columns, runners

        25+ professional team member exclusively trained and educated in house. 

        We can accommodate any custom requests

        We make every effort to work within client budget expectation.

        We are not planners, but a planners best friend


        We take on a limited handful of clients per year to ensure our availability and to also ensure our continued inspiration in our field.

        We specialize in crafting luxurious floral designs and event decor 
      </p>
      
      <p className="lg:text-5xl mobile:text-3xl uppercase font-medium">
        Our process:
      </p>
      <div className="flex items-center lg:gap-20 mobile:gap-4">
        <div className="flex lg:gap-20 mobile:gap-16 flex-col w-20">
        <p className="vertical-text text-[12px]">YOU</p>

          <p className="w-20 p-2 bg-black text-[12px] text-white rounded-full flex items-center justify-center font-medium">
            STEPS
          </p>
          <p className="rotate-90 text-[12px]">Chic</p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default RecordSection;

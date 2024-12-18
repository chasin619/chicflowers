import { Slider } from "@/components/slider";
import React from "react";

const RecordSection = () => {
  return (
    <>
      <div className="bg-black text-white w-full lg:px-20 lg:py-28 mobile:px-4 mobile:py-20 xl:mt-[700px] lg:mt-[700px] md:mt-[700px] mobile:mt-0 border-t border-black">
        <h1 className="lg:text-6xl mobile:text-3xl uppercase font-medium text-center">
          What We Provide
        </h1>
        <ul className="flex flex-col gap-4 lg:text-3xl mobile:text-lg font-medium text-left mt-8 lg:w-[900px] mobile:w-90 list-disc list-inside">
          <li>
            Artistic floral work in house with the finest product available
            worldwide.
          </li>
          <li>
            Curate unforgettable experiences with flowers and installations.
          </li>
          <li>
            Custom built structures, ceilings, elevated pieces, including
            natural materials as well as steel, glass, wood.
          </li>
          <li>We own our ceremony structures and columns, runners.</li>
          <li>
            25+ professional team members exclusively trained and educated in
            house.
          </li>
          <li>We can accommodate any custom requests.</li>
          <li>
            We make every effort to work within client budget expectations.
          </li>
          <li>{`We are not planners, but a planner's best friend.`}</li>
          <li>
            We take on a limited handful of clients per year to ensure our
            availability and to also ensure our continued inspiration in our
            field.
          </li>
          <li>
            We specialize in crafting luxurious floral designs and event decor.
          </li>
        </ul>
      </div>
      <div className="bg-white text-black w-full mt-20 py-20 lg:px-20 lg:py-28 mobile:px-4 mobile:py-20">
        <p className="lg:text-5xl mobile:text-3xl uppercase font-medium my-12 text-center">
          Our process:
        </p>
        <div className="flex items-center lg:gap-20 mobile:gap-4">
          <div className="flex lg:gap-10 justify-center items-center mobile:gap-16 flex-col w-20 mt-[-40px]">
            <p className="text-4xl">
              <span className="block">Y</span>
              <span className="block">O</span>
              <span className="block">U</span>
            </p>
            <p className="w-20 p-2 bg-black text-[12px] text-white rounded-full flex items-center justify-center font-medium">
              STEPS
            </p>
            <p className="text-4xl text-center">
              <span className="block">C</span>
              <span className="block">H</span>
              <span className="block">I</span>
              <span className="block">C</span>
            </p>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
};

export default RecordSection;

import { Slider } from "@/components/slider";
import React from "react";

const RecordSection = () => {
  return (
    <div className="w-full lg:px-20 lg:py-28 mobile:px-4 mobile:py-20 xl:mt-[2000px] lg:mt-[2000px] md:mt-[2000px] mobile:mt-[500px]">
      <h1 className="lg:text-5xl mobile:text-3xl uppercase font-medium">
        In Record Time
      </h1>
      <p className="lg:text-xl mobile:text-base font-medium text-left mt-2 lg:w-[900px] mobile:w-90">
        At Chic, we bring together design mastery and precision engineering to create stunning floral 
        installations and wedding decor that others only dream of. As leaders in wedding flowers in San Diego, 
        we deliver intricate, large-scale designs in record time—turning your vision into reality in days rather than months.
        From concept to completion, our team combines innovative design with flawless execution, ensuring every detail is both
        structurally sound and visually breathtaking. We’ve perfected the art of balancing creativity with technical expertise,
        making the extraordinary look effortless.
        No matter your timeline, our expertly engineered process ensures your dream wedding flowers and decor are brought to life 
        with unmatched speed and perfection, right here in San Diego.
      </p>
      <p className="text-[18px] font-medium text-left lg:mb-40 lg:w-[900px] mobile:mb-20 mobile:w-90">
        Whatever timeline you’re on, this is our process.
      </p>
      <div className="flex items-center lg:gap-20 mobile:gap-4">
        <div className="flex lg:gap-20 mobile:gap-16 flex-col w-20">
          <p className="rotate-90 text-[12px]">YOU</p>
          <p className="w-20 p-2 bg-black text-[12px] text-white rounded-full flex items-center justify-center font-medium">
            PHASE 4
          </p>
          <p className="rotate-90 text-[12px]">Chic</p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default RecordSection;

import { Slider } from "@/components/slider";
import React from "react";

const RecordSection = () => {
  return (
    <div className="w-full lg:px-20 lg:py-28 mobile:px-4 mobile:py-20 xl:mt-[2000px] lg:mt-[2000px] md:mt-[2000px] mobile:mt-[500px]">
      <h1 className="lg:text-5xl mobile:text-3xl uppercase font-medium">
        In Record Time
      </h1>
      <p className="lg:text-xl mobile:text-base font-medium text-left mt-2 lg:w-[900px] mobile:w-90">
        Nobody does a sprint better than Chic. We can pull off in days what it
        takes others months to accomplish, and we hardly break a sweat doing it.
        Since the beginning, we’ve set the tone for fast-paced work that keeps
        up with a fast-paced world, with no sacrifice to style or scale. It’s a
        muscle we’ve toned and tightened to perfection, and we’re always ready
        to flex.
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

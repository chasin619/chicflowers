import Image from "next/image";
import React from "react";

const StudioSection = () => {
  return (
    <section className="w-full mt-12">
      <div>
        <h1 className="text-2xl lg:text-4xl uppercase font-medium text-center lg:text-left">
          Out, About & In Studio
        </h1>
        <p className="text-sm lg:text-base font-medium text-center lg:text-left mt-2 lg:w-[900px] mx-auto lg:mx-0">
          Chic is beyond brick and mortar. Though we have desks in San Diego,
          our workspace is as roaming as we are. The Chic studio is a nomadic
          one, powered by hustle and heart, launching us from busy cities to
          serene landscapes and everywhere in between. The Chic studio is never
          bound by street names and numbers – only creativity and imagination.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 mt-6">
        <div className="relative w-full lg:w-[65%] lg:h-[55vh] mobile:h-[30vh]">
          <Image
            src="/studio-1.webp"
            alt="Group discussion"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full lg:w-[35%] lg:h-[55vh] mobile:h-[50vh]">
          <Image
            src="/studio-2.webp"
            alt="Artistic work"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 mt-6">
        <div className="relative w-full lg:w-[35%] lg:h-[55vh] mobile:h-[50vh]">
          <Image
            src="/studio-3.webp"
            alt="Artistic work"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full lg:w-[65%] lg:h-[55vh] mobile:h-[30vh]">
          <Image
            src="/studio-4.webp"
            alt="Group discussion"
            loading="lazy"
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
      </div>

      <div className="w-full lg:h-[80vh] mobile:h-[30vh] flex items-center justify-center gap-5 mt-6">
        <div className="relative w-full lg:h-[80vh] mobile:h-[30vh]">
          <Image
            src="/studio-5.webp"
            alt="Artistic work"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 mt-6">
        <div className="relative w-full lg:w-[35%] lg:h-[55vh] mobile:h-[40vh]">
          <Image
            src="/studio-6.webp"
            alt="Artistic work"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full lg:w-[65%] lg:h-[55vh] mobile:h-[30vh]">
          <Image
            src="/studio-7.webp"
            alt="Group discussion"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StudioSection;

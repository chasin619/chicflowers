import React from "react";
import Image from "next/image";

const EventShowcase = () => {
  return (
    <div className="flex flex-col items-center text-center gap-16 pt-12 lg:pt-8 pb-14 px-6">
      <h2 className="uppercase text-[32px] sm:text-[36px] lg:text-[44px] max-w-[1100px] !leading-[1.1em] font-italiana font-semibold">
        extraordinary experiences, event design, and production in the heart of{" "}
        <span
          className="font-qwitcher text-[2.5em] leading-[0.4em] translate-y-[0.05em] inline-block"
          style={{ textTransform: "none" }}
        >
          San Diego and LA
        </span>
      </h2>

      <div className="flex flex-col w-full gap-10">
        <span>AS SEEN IN:</span>

        <div className="flex w-full items-center gap-10 flex-wrap justify-center">
          <Image
            width="150"
            height="150"
            src="/haute-living.webp"
            loading="lazy"
            alt="Haute Living"
            className="w-[150px] xl:w-[184px]"
          />
          <Image
            width="150"
            height="150"
            src="/vogue.webp"
            loading="lazy"
            alt="Vogue"
            className="w-[150px] xl:w-[184px]"
          />
          <Image
            width="150"
            height="150"
            src="/brides.webp"
            loading="lazy"
            alt="Brides"
            className="w-[150px] xl:w-[184px]"
          />
          <Image
            width="150"
            height="150"
            src="/grace-ormonde.webp"
            loading="lazy"
            alt="Grace Ormonde"
            className="w-[150px] xl:w-[184px]"
          />
          <Image
            width="150"
            height="150"
            src="/carats-cake.webp"
            loading="lazy"
            alt="Carats and Cake"
            className="w-[150px] xl:w-[184px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;

import React from "react";

const EventShowcase = () => {
  return (
    <div className="flex flex-col items-center text-center gap-16 pt-12 lg:pt-8 pb-14 px-6">
      <h2 className="uppercase text-[32px] sm:text-[36px] lg:text-[44px] max-w-[1100px] !leading-[1.1em] font-italiana font-semibold">
        extraordinary experiences, event design, and production in the heart of{" "}
        <span
          className="font-qwitcher text-[2.5em] leading-[0.4em] translate-y-[0.05em] inline-block"
          style={{ textTransform: "none" }}
        >
          Miami
        </span>
      </h2>

      <div className="flex flex-col w-full gap-10">
        <span>AS SEEN IN:</span>

        <div className="flex w-full items-center gap-10 flex-wrap justify-center">
          <img
            src="/haute-living.png"
            alt="Haute Living"
            className="w-[150px] xl:w-[184px]"
          />
          <img
            src="/vogue.png"
            alt="Vogue"
            className="w-[150px] xl:w-[184px]"
          />
          <img
            src="/brides.png"
            alt="Brides"
            className="w-[150px] xl:w-[184px]"
          />
          <img
            src="/grace-ormonde.png"
            alt="Grace Ormonde"
            className="w-[150px] xl:w-[184px]"
          />
          <img
            src="/carats-cake.png"
            alt="Carats and Cake"
            className="w-[150px] xl:w-[184px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;

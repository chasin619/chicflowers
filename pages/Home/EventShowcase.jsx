import React from "react";

const EventShowcase = () => {
  return (
    <div className="flex flex-col items-center text-center gap-16 pt-[1vw] pb-[3vw]">
      <h2 className="uppercase text-[44px] max-w-[1100px] !leading-[1.1em] font-italiana font-semibold">
        extraordinary experiences, event design, and production in the heart of{" "}
        <span
          className="font-qwitcher text-[2.5em] leading-[0.4em] translate-y-[0.05em] inline-block"
          style={{ textTransform: "none" }}
        >
          Miami
        </span>
      </h2>

      <div className="flex flex-col gap-10">
        <span>AS SEEN IN:</span>

        <div className="flex items-center gap-10">
          <img
            src="/haute-living.png"
            alt="Haute Living"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/vogue.png"
            alt="Vogue"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/brides.png"
            alt="Brides"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/grace-ormonde.png"
            alt="Grace Ormonde"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/carats-cake.png"
            alt="Carats and Cake"
            className="w-[184px] event_brand-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;

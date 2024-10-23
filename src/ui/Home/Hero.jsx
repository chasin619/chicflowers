"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const background = useRef();

  const btn1 = useRef();
  const btn2 = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(background.current, { scale: 1, ease: "circ.out", duration: 0.6 });
    tl.fromTo(
      [btn1.current, btn2.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "circ.out",
      },
      0
    );
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center relative overflow-hidden">
      <div
        ref={background}
        style={{
          backgroundImage:
            "linear-gradient(#00000080, #00000080), url(/hero.jpg)",
          backgroundPosition: "50% 6%",
          scale: 1.15,
        }}
        className="bg-no-repeat bg-cover absolute inset-0 origin-top"
      />

      <div className="brand-name-wrapper first mt-[20vh] xs:mt-[17vh] sm:mt-24 lg:mt-16 aspect-[304/120] text-[80px] xs:text-[100px] sm:text-[120px] lg:text-[160px] h-[1em] z-30">
        <h1 className="text-white text-center text-[80px] xs:text-[100px] sm:text-[120px] lg:text-[160px] leading-none font-italiana font-bold tracking-widest brand-name">
          CHIC
        </h1>
      </div>

      <div className="flex gap-3 absolute top-1/2 -translate-y-1/2">
        <a
          href="#portfolio"
          id="portfolio-link"
          ref={btn1}
          style={{ opacity: 0 }}
          className="flex justify-center items-center uppercase text-white hover:text-black font-bold border-2 border-white rounded-[4px] h-12 px-5 text-[15px] hover:bg-white transition-colors duration-200"
        >
          Portfolio
        </a>
        <button
          ref={btn2}
          style={{ opacity: 0 }}
          className="uppercase text-white hover:text-black font-bold border-2 border-white rounded-[4px] h-12 px-5 text-[15px] hover:bg-white transition-colors duration-200"
        >
          Lets Play
        </button>
      </div>
    </div>
  );
};

export default Hero;

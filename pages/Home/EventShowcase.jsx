"use client";

import { motion, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const reviews = [
  "/review-1.jpg",
  "/review-2.jpg",
  "/review-3.jpg",
  "/review-4.jpg",
  "/review-5.jpg",
  "/review-6.jpg",
  "/review-7.jpg",
  "/review-8.jpg",
  "/review-9.jpg",
];

const CURSOR_SIZE = 80;

const EventShowcase = () => {
  const slider = useRef();
  const sliderTrack = useRef();

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mouse = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const slideProgress = useRef(0);
  const slideProgressAtMouseDown = useRef(null);
  const isMouseDown = useRef(false);
  const mouseDownAt = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMouseDown.current) return;

      mouse.x.set(e.clientX - CURSOR_SIZE / 2);
      mouse.y.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function clamp(value) {
    return Math.max(0, Math.min(1, value));
  }

  const handleMouseDown = (e) => {
    mouseDownAt.current = e.clientX;
    isMouseDown.current = true;
    slideProgressAtMouseDown.current = slideProgress.current;
  };
  const handleMouseUp = () => {
    mouseDownAt.current = null;
    isMouseDown.current = false;
    slideProgressAtMouseDown.current = null;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;

    const dx = -(e.clientX - mouseDownAt.current);

    const newSliderProgress = clamp(
      slideProgressAtMouseDown.current + dx / (reviews.length * 250)
    );

    slideProgress.current = newSliderProgress;

    const { width } = sliderTrack.current.getBoundingClientRect();

    const padding =
      getComputedStyle(sliderTrack.current).fontSize.slice(0, -2) * 2;

    const maxScroll = width - window.innerWidth + padding + 15;

    sliderTrack.current.style.translate = `${
      -maxScroll * slideProgress.current
    }px`;
  };

  return (
    <div className="flex flex-col items-center text-center gap-16 pt-12 lg:pt-8 pb-14">
      <h2 className="uppercase text-[32px] sm:text-[36px] lg:text-[44px] max-w-[1100px] !leading-[1.1em] font-italiana font-semibold px-6">
        extraordinary experiences, event design, and production in the heart of{" "}
        <span
          className="font-qwitcher text-[2.5em] leading-[0.55em] -my-[0.15em] translate-y-[0.05em] inline-block"
          style={{ textTransform: "none" }}
        >
          San Diego and LA
        </span>
      </h2>

      <div className="flex flex-col w-full gap-10">
        <div className="px-6">
          <span>AS SEEN IN:</span>
        </div>

        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          ref={slider}
          className="group relative overflow-hidden text-[12px] md:text-[24px] lg:text-[48px] px-[1em] select-none"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <motion.div
              style={{
                x: mouse.x,
                y: mouse.y,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
              }}
              className="fixed rounded-full bg-[#18799B] top-0 left-0 pointer-events-none flex justify-center gap-2"
            >
              <img src="/arrow-long.svg" className="w-4" />
              <img src="/arrow-long.svg" className="w-4 rotate-180" />
            </motion.div>
          </div>

          <div ref={sliderTrack} className="flex gap-2.5 lg:gap-5 w-max">
            {reviews.map((review, i) => (
              <React.Fragment key={i}>
                <div className="w-[50vw] md:w-[40vw] lg:w-[32vw] xl:w-[25vw] shrink-0 aspect-[511/757]">
                  <img src={review} className="w-full h-full object-cover" />
                </div>

                {i < reviews.length - 1 && (
                  <div className="w-0.5 bg-black shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;

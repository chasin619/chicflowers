"use client";

import { motion, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { reviewsData } from "@/data/home";

const CURSOR_SIZE = 80;

const Reviews = () => {
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

  const handleTouchStart = (e) => {
    mouseDownAt.current = e.touches[0].clientX;
    isMouseDown.current = true;
    slideProgressAtMouseDown.current = slideProgress.current;
  };

  const handleTouchEnd = () => {
    mouseDownAt.current = null;
    isMouseDown.current = false;
    slideProgressAtMouseDown.current = null;
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown.current) return;

    const dx = -(e.touches[0].clientX - mouseDownAt.current);

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
    <div className="my-24 md:y-32 space-y-10 lg:space-y-12">
      <div className="px-3 md:px-6 lg:px-12 flex flex-col gap-0.5">
        <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-medium !leading-[1.15]">
          PRAISE FOR CHIC
        </h2>
        <p className="lg:text-lg max-w-[730px] !leading-[1.35]">
          Don’t just believe the hype – see it for yourself. Take a peek at some
          of the real convos we have with Birch clients on the road to making
          their dreams a reality.
        </p>
      </div>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
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
          {reviewsData.map((review, i) => (
            <React.Fragment key={i}>
              <div className="w-[50vw] md:w-[40vw] lg:w-[32vw] xl:w-[25vw] shrink-0 aspect-[511/757]">
                <img src={review} className="w-full h-full object-cover" />
              </div>

              {i < reviewsData.length - 1 && (
                <div className="w-0.5 bg-black shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

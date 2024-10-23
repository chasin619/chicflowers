"use client";

import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { portfolioData } from "@/data/home";
import Link from "next/link";

const CURSOR_SIZE = 150;

const Portfolio = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mouse = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX - CURSOR_SIZE / 2);
      mouse.y.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="portfolio"
      className="grid xs:grid-cols-2 md:grid-cols-3 p-[3.333vw] gap-[3.333vw]"
    >
      {portfolioData.map((item, i) => (
        <Link
          key={i}
          href={`/events/${i + 1}`}
          className="aspect-square w-full relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
        >
          <div
            style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-italiana text-[3vw] font-bold mix-blend-screen text-center !leading-none w-[90%] tracking-wide">
              {item.venue}
            </div>

            <motion.div
              style={{
                x: mouse.x,
                y: mouse.y,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
              }}
              className="fixed rounded-full bg-white top-0 left-0 pointer-events-none mix-blend-difference"
            ></motion.div>
          </div>

          <img
            src={item.images[0].src}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;

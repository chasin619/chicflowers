"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import { Flip } from "gsap/all";
import Link from "next/link";

const Header = () => {
  const wrapper = useRef();

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useUpdateEffect(() => {
    const wrapper1 = document.querySelector(".brand-name-wrapper.first");
    const wrapper2 = document.querySelector(".brand-name-wrapper.second");
    const item = document.querySelector(".brand-name");

    if (!isHome) {
      item?.remove();

      return;
    }

    const state = Flip.getState(item);

    if (isScrolled) wrapper2.appendChild(item);
    else wrapper1.appendChild(item);

    const largeFontSize = getComputedStyle(wrapper1).fontSize;
    const smallFontSize = getComputedStyle(wrapper2).fontSize;

    Flip.from(state, {
      duration: 0.6,
      fontSize: isScrolled ? smallFontSize : largeFontSize,
      ease: "power2.out",
      absolute: true,
    });
  }, [isScrolled]);

  return (
    <div
      ref={wrapper}
      className={`fixed top-0 left-0 z-20 w-full flex justify-end p-3 sm:p-4 transition-colors duration-[400ms] ${
        isScrolled || !isHome ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="brand-name-wrapper second absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[36px] sm:text-[40px] lg:text-[48px] h-[1em] aspect-[304/120]">
        {!isHome && (
          <Link
            href="/"
            className="text-white text-[1em] text-center leading-none font-italiana font-bold tracking-widest absolute top-0 left-0"
          >
            CHIC
          </Link>
        )}
      </div>

      <button
        className={`uppercase font-bold border-2 rounded-[4px] h-10 px-4 sm:px-5 text-[14px] sm:text-[15px] transition-all duration-200 ${
          false
            ? "text-black hover:text-white border-black hover:bg-black"
            : "text-white hover:text-black border-white hover:bg-white"
        }`}
      >
        MENU
      </button>
    </div>
  );
};

export default Header;

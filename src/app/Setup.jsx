"use client";

import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Setup = () => {
  const [lenis, setLenis] = useState(null);

  const pathname = usePathname();

  gsap.registerPlugin(ScrollTrigger, Flip);

  useEffect(() => {
    if (window.scrollY > 0) {
      lenis?.scrollTo(0);
    }

    const portfolioLink = document.querySelector("#portfolio-link");

    if (portfolioLink)
      portfolioLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior (jumping)

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Get the top position of the target element
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;

          // Use Lenis to smoothly scroll to the target position
          lenis?.scrollTo(targetPosition, {
            offset: -72,
            duration: 1.2, // Same duration as your Lenis instance
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Same easing
          });
        }
      });
  }, [lenis, pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for scroll smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Customize easing
    });

    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};

export default Setup;

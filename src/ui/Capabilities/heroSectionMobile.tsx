"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HeroSectionMobile = () => {
  const { scrollYProgress } = useScroll();

  const leftTextX = useTransform(scrollYProgress, [0, 0.02], [-300, 0]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.02], [300, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  const flowerX = useTransform(scrollYProgress, [0, 1], [700, 1000]);
  const flowerFade = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const flower2X = useTransform(scrollYProgress, [0, 1.8], [1000, 1800]);
  const flower2Fade = useTransform(scrollYProgress, [0, 1.5], [0.8, 1]);

  const textRevealX = useTransform(scrollYProgress, [0, 0.15], [200, 0]);
  const textRevealOpacity = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);

  return (
    <div className="relative">
      <div className="h-[180vh] relative z-10 overflow-hidden">
        <div className="sticky top-0 left-0 w-full h-[100vh] bg-black overflow-hidden" />
        <div className="absolute inset-0 top-[100px] flex flex-col justify-center items-center">
          <motion.h1
            className="font-[OreloBold] text-4xl text-white"
            style={{ x: leftTextX, opacity: fadeIn, y: -350 }}
          >
            The Chic
          </motion.h1>
          <motion.h1
            className="font-[OreloBold] text-4xl text-white"
            style={{ x: rightTextX, opacity: fadeIn, y: -350 }}
          >
            Experience
          </motion.h1>
          <motion.h1
            className="font-[OreloBold] text-4xl text-white absolute top-[610px] z-0 left-0 flex justify-center items-center flex-col"
            style={{ x: textRevealX, opacity: textRevealOpacity }}
          >
            <span>With Us, Time</span>
            <span>is on Your side</span>
          </motion.h1>
        </div>
        <section>
          <motion.div
            style={{ y: flowerX, opacity: flowerFade }}
            className="absolute top-[-100px] left-0"
          >
            <Image
              src="/flower-5.webp"
              alt="Flower Image"
              height={100}
              width={100}
            />
          </motion.div>
          <motion.div
            style={{
              y: flowerX,
              opacity: flowerFade,
            }}
            className="absolute top-60 right-0"
          >
            <Image
              src="/flower-4.webp"
              alt="Flower Image"
              height={100}
              width={100}
            />
          </motion.div>
          <motion.div
            style={{
              y: flower2X,
              opacity: flower2Fade,
            }}
            className="absolute top-48 right-0"
          >
            <Image
              src="/flower-7.webp"
              alt="Flower Image"
              height={100}
              width={100}
            />
          </motion.div>
        </section>
        <div className="flex justify-center items-center px-4 z-10 bg-white mt-10 w-full">
        <p className="text-black text-center text-2xl m-auto">
          No matter what you envision or when you need it, Chic is fully
          committed.
          <p className="mt-16 block">
            {`Over the years, we've honed the art of turning dreams into realities
            – and making it happen in record time.`}
          </p>
          <p className="mt-16 block">
            Our team thrives on exceeding expectations, delivering more than
            promised, and working efficiently without ever compromising on
            quality.
            <p className="mt-16 block">We ARE IN IT TO WIN IT.</p>
          </p>
        </p>
      </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;

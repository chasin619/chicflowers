"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const leftTextX = useTransform(scrollYProgress, [0, 0.1], [-1000, 0]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.1], [1000, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const flowerX = useTransform(scrollYProgress, [0, 1], [1500, 1800]);
  const flowerFade = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const flower2X = useTransform(scrollYProgress, [0, 1.8], [1000, 1800]);
  const flower2Fade = useTransform(scrollYProgress, [0, 1.5], [0.4, 1]);

  const textRevealX = useTransform(scrollYProgress, [0, 1.2], [800, 0]);
  const textRevealOpacity = useTransform(scrollYProgress, [1.4, 1.6], [0.9, 1]);

  // Adjusted transform for paragraph appearance
  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const paragraphY = useTransform(scrollYProgress, [0, 1], [1200, 0]);

  return (
    <div className="h-[200vh] relative z-10">
      <motion.div
        style={{
          scale,
          opacity,
          borderRadius,
        }}
        className="sticky top-0 left-0 w-full h-[150vh] overflow-hidden"
      >
        <Image src="/wedding.jpeg" alt="Wedding" fill objectFit="cover" />
      </motion.div>

      <div className="absolute inset-0 top-[-1000] flex flex-col justify-center items-center">
        <motion.h1
          className="font-[OreloBold] text-[70px] text-white"
          style={{ x: leftTextX, opacity: fadeIn, y: 450 }}
        >
          The Chic
        </motion.h1>
        <motion.h1
          className="font-[OreloBold] text-[70px] text-white"
          style={{ x: rightTextX, opacity: fadeIn, y: 450 }}
        >
          Experience
        </motion.h1>
        <motion.h1
          className="font-[OreloBold] text-[70px] text-black absolute bottom-[450px] left-0 flex justify-center items-center flex-col"
          style={{ x: textRevealX, opacity: textRevealOpacity, y: 1500 }}
        >
          <span>With Us,</span>
          <span>Time is on</span>
          <span>Your side</span>
        </motion.h1>
      </div>
      <section className=" ">
        <motion.div
          style={{ y: flowerX, opacity: flowerFade }}
          className="absolute top-40"
        >
          <Image
            src="/flower-5.webp"
            alt="Flower Image"
            height={400}
            width={400}
          />
        </motion.div>
        <motion.div
          style={{
            y: flowerX,
            opacity: flowerFade,
          }}
          className="absolute top-20 right-0"
        >
          <Image
            src="/flower-4.webp"
            alt="Flower Image"
            height={400}
            width={400}
          />
        </motion.div>
        <motion.div
          style={{
            y: flower2X,
            opacity: flower2Fade,
          }}
          className="absolute bottom-10 right-0"
        >
          <Image
            src="/flower-7.webp"
            alt="Flower Image"
            height={400}
            width={400}
          />
        </motion.div>
      </section>
      <motion.div
        className="flex justify-center items-center px-4 absolute bottom-[-80rem] z-10 bg-[#f0f0f0] h-screen w-full"
        style={{ opacity: paragraphOpacity, y: paragraphY }}
      >
        <motion.p className="text-black text-center font-[FaktNormal] text-[30px] m-auto w-1/2 ">
          No matter what you want or when you want it, Chic is ALL IN. Over the
          years, we’ve become masters of making dreams into realities – and
          pulling off the magic in record time. Our team shares an ethos of
          over-delivering and exceeding expectations, always working fast but
          never sacrificing quality.
        </motion.p>
      </motion.div>
    </div>
  );
}

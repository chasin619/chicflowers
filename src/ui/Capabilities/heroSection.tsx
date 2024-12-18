"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const leftTextX = useTransform(scrollYProgress, [0, 0.1], [-1000, 0]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.1], [1000, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const flowerX = useTransform(scrollYProgress, [0, 1], [1500, 1800]);
  const flowerFade = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const flower2X = useTransform(scrollYProgress, [0, 1.8], [1000, 1800]);
  const flower2Fade = useTransform(scrollYProgress, [0, 1.5], [0.4, 1]);

  const textRevealX = useTransform(scrollYProgress, [0, 1.2], [660, 0]);
  const textRevealOpacity = useTransform(scrollYProgress, [1.4, 1.6], [0.9, 1]);

  return (
    <div className="h-[200vh] relative z-10">
      <div className="sticky top-0 left-0 w-full h-[100vh] bg-black overflow-hidden" />

      <div className="absolute inset-0 top-[-1000] flex flex-col justify-center items-center">
        <motion.h1
          className="font-[OreloBold] text-[70px] text-white"
          style={{ x: leftTextX, opacity: fadeIn, y: 150 }}
        >
          The Chic
        </motion.h1>
        <motion.h1
          className="font-[OreloBold] text-[70px] text-white"
          style={{ x: rightTextX, opacity: fadeIn, y: 150 }}
        >
          Experience
        </motion.h1>
        <motion.h1
          className="font-[OreloBold] text-[70px] z-20 text-white absolute bottom-[700px] left-0 flex justify-center items-center flex-col"
          style={{ x: textRevealX, opacity: textRevealOpacity, y: 400 }}
        >
          <span>With Us, Time</span>
          <span>is on Your side</span>
        </motion.h1>
      </div>
      <section className=" ">
        <motion.div
          style={{ y: flowerX, opacity: flowerFade }}
          className="absolute top-[-700px]"
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
          className="absolute top-20 right-0 z-20"
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
          className="absolute bottom-10 right-0 z-20"
        >
          <Image
            src="/flower-7.webp"
            alt="Flower Image"
            height={400}
            width={400}
          />
        </motion.div>
      </section>
      <div className="flex justify-center items-center px-4 absolute bottom-[-40rem] z-10 bg-white h-screen w-full">
        <p className="text-black text-center text-[40px] m-auto w-1/2 ">
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
  );
}

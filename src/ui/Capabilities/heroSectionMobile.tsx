"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HeroSectionMobile = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, -0.01]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);

  const leftTextX = useTransform(scrollYProgress, [0, 0.02], [-300, 0]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.02], [300, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  const flowerX = useTransform(scrollYProgress, [0, 1], [700, 1000]);
  const flowerFade = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const flower2X = useTransform(scrollYProgress, [0, 1.8], [1000, 1800]);
  const flower2Fade = useTransform(scrollYProgress, [0, 1.5], [0.8, 1]);

  const textRevealX = useTransform(scrollYProgress, [0, 0.15], [420, 75]);
  const textRevealOpacity = useTransform(scrollYProgress, [0, 0.1], [0.2, 1]);

  // Adjusted transform for paragraph appearance
  const paragraphOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const paragraphY = useTransform(scrollYProgress, [0, 1], [950, 0]);

  return (
    <div className="relative">
      <div className="h-[220vh] relative z-10 overflow-hidden">
        <motion.div
          style={{
            scale,
            opacity,
            borderRadius,
          }}
          className="sticky top-0 left-0 h-[120vh]"
        >
        {/* <Image src="/wedding.jpeg" alt="Wedding" fill objectFit="cover" /> */}
         </motion.div> 

        <div className="absolute inset-0 top-[100px] flex flex-col justify-center items-center">
          <motion.h1
            className="font-[OreloBold] text-4xl text-white"
            style={{ x: leftTextX, opacity: fadeIn, y: -400 }}
          >
            The Chic
          </motion.h1>
          <motion.h1
            className="font-[OreloBold] text-4xl text-white"
            style={{ x: rightTextX, opacity: fadeIn, y: -400 }}
          >
            Experience
          </motion.h1>
          <motion.h1
            className="font-[OreloBold] text-5xl text-black absolute bottom-[40px] z-0 left-0 flex justify-center items-center flex-col"
            style={{ x: textRevealX, opacity: textRevealOpacity }}
          >
            <span>With Us,</span>
            <span>Time is on</span>
            <span>Your side</span>
          </motion.h1>
        </div>
        <section>
          <motion.div
            style={{ y: flowerX, opacity: flowerFade }}
            className="absolute top-64"
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
            className="absolute top-32 right-0"
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
      </div>
      <motion.div
        className="flex justify-center items-center px-4 absolute top-[900px] z-10 h-screen  w-full"
        style={{ opacity: paragraphOpacity, y: paragraphY }}
      >
        <motion.p className="text-black text-center font-[FaktNormal] text-xl w-full">
          No matter what you envision or when you need it, Chic is fully committed. 
          Over the years, we've honed the art of turning dreams into realities – 
          and making it happen in record time. Our team thrives on exceeding expectations,
          delivering more than promised, and working efficiently without ever compromising on quality. 
          We ARE IN IT TO WIN IT. 
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSectionMobile;

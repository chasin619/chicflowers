"use client"
import React from "react";
import { Accordion } from "@/components/accordion";
import AboutSection from "@/ui/Capabilities/AboutSection";
import NumberBirthSection from "@/ui/Capabilities/NumberBirthSection";
import RecordSection from "@/ui/Capabilities/RecordSection";
import GallerySection from "@/ui/Capabilities/GallerySection";
import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";
const HeroSectionMobile = dynamic(
  () => import("@/ui/Capabilities/heroSectionMobile"),
  {
    ssr: false,
  }
);
const HeroSection = dynamic(() => import("@/ui/Capabilities/heroSection"), {
  ssr: false,
});

const Capabilities = () => {
  console.log(isMobile)
  return (
    <>
      {isMobile ? <HeroSectionMobile /> : <HeroSection />}
      <RecordSection />
      <div className="bg-purple flex justify-center items-center flex-col xl:px-60 lg:px-20 mobile:px-4 py-20 overflow-hidden">
        <h1 className="font-[OreloBold] lg:text-6xl mobile:text-4xl text-black text-center">
          The Birch Treatment
        </h1>
        <p className="text-2xl mobile:text-lg font-medium text-center mt-10 uppercase">
          We design our services around your desires.
        </p>
        <p className="text-base font-medium text-center my-4 mb-8">
          Full in-house production and creative means your dream can be a
          reality with any timeline. See what we’re capable of.
        </p>
        <Accordion />
        <NumberBirthSection />
        <AboutSection />
        <GallerySection />
      </div>
    </>
  );
};

export default Capabilities;

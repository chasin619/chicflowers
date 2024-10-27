import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        src="/wedding.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-center mobile:text-3xl md:text-4xl lg:text-6xl uppercase">
          The Story of Chic
        </h1>
        <p className="text-center mt-4 mb-8 lg:text-2xl md:text-xl mobile:text-lg font-medium lg:w-[60%] mobile:w-[90%]">
          Authenticity is the throughline at Chic. It’s what’s taken us from a
          balloon shop in Brooklyn to the world’s stage. Those who follow us
          know we like to serve the real behind the pretty, and the story of our
          Chic beginnings is no different.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

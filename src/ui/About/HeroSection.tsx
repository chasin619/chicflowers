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
          Authenticity is at the core of Chic Flowers. It’s what has made us a premier wedding florist in San Diego. 
          Our clients and followers know we showcase the true artistry behind our beautiful floral arrangements. 
          The story of Chic Flowers is rooted in dedication and passion, 
          guiding us to become a trusted leader in San Diego's wedding industry.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        src="/wedding.mov"
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
          Realness is deeply rooted in the European garden-inspired artistry of Chic Flowers. 
          It’s this foundation that has established us as a premier wedding florist in San Diego. 
          Our clients and followers recognize the timeless elegance and craftsmanship we bring 
          to every arrangement, reflecting the rich traditions of European floral design. 
          The story of Chic Flowers is one of passion and dedication, blossoming into a 
          trusted leader in San Diego's wedding industry
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

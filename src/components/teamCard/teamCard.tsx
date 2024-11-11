import Image from "next/image";
import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="relative border border-black rounded-2xl overflow-hidden">
      <div className="w-full h-[600px] relative">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-black">
            <span className="text-white text-5xl">Chic</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{member.name}</h3>
        <p className="text-base text-gray-500 uppercase">{member.position}</p>
        <div className="mt-4">
          <button className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
            <span className="text-black text-2xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default TeamCard;

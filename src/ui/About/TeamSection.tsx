import { TeamCard } from "@/components/teamCard";
import { teamMembers } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="w-full mt-24">
      <h1 className="text-5xl font-medium uppercase border-t border-b border-black py-7">
        Our Team
      </h1>
      <div className="w-full h-[60%] relative mt-4">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full mx-auto z-10">
          <span className="text-white lg:text-4xl mobile:text-lg md:text-2xl font-semibold text-center lg:w-[60%] mobile:w-[90%]">
            “ALL IN” is a mindset. It's showing up each day ready to bring your
            best, showing up for your clients, and, most importantly, showing up
            for each other.
          </span>
        </div>
        <div className="relative w-full lg:h-screen mobile:h-[70vh]">
          <Image
            src="/team.jpg"
            alt="Our Team"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

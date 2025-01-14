import { CountingBox } from "@/components/countingBox";
import React from "react";

const NumberBirthSection = () => {
  const countingData = [
    { target: "1050", text: "Events in the books" },
    { target: "105000", text: "Guest Experiences" },
    { target: "5000000", text: "Eyes reached online" },
  ];

  return (
    <div className="bg-black w-full mt-32 rounded-3xl flex items-center lg:flex-col mobile:flex-col mobile:gap-8 lg:gap-2">
      <h3 className="xl:text-2xl lg:text-xl mobile:text-base text-white uppercase mt-10">
      Chic by the Numbers
      </h3>
      <div className="flex justify-center items-center mobile:flex-col lg:flex-row md:flex-col ">
        {countingData.map((item, index) => (
          <CountingBox
            key={index}
            target={item.target}
            text={item.text}
            isLastItem={index !== countingData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberBirthSection;

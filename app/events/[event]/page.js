"use client";

import { useParams } from "next/navigation";
import React from "react";
import portfolioData from "@/data/portfolio";

const Event = () => {
  const params = useParams();

  const eventData = portfolioData[params.event - 1];

  return (
    <div className="flex flex-col px-[5vw] pt-[72px] items-center">
      <h1 className="font-italiana text-6xl font-bold my-16">
        {eventData.venue}
      </h1>

      <div className="grid grid-cols-3 gap-[3.333vw] [grid-auto-rows:500px]">
        {eventData.images.map((image, i) => (
          <div key={i}>
            <img
              src={image.src}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;

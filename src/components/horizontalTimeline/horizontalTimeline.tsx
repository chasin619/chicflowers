import React from "react";

const HorizontalTimeline = ({ index }: { index: number }) => {
  return (
    <div className="flex my-12">
      <div className="relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-black"></div>

        <div className="flex justify-between items-center">
          <div className="relative">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
          </div>

          {Array.from({ length: 13 }, (_, index) => {
            return (
              <div key={index} className="relative ml-16">
                {index !== 12 && <div className="w-[1px] h-8 bg-black" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;

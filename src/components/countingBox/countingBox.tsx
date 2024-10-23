"use client";
import { useEffect, useState } from "react";

interface CountingBoxProps {
  target: number | string;
  text: string;
  isLastItem: boolean;
}

const CountingBox: React.FC<CountingBoxProps> = ({
  target,
  text,
  isLastItem,
}) => {
  const [count, setCount] = useState<number>(0);
  const speed = 200;

  useEffect(() => {
    const targetNumber =
      typeof target === "string" ? parseFloat(target) : target;
    let start = 0;
    const increment = targetNumber / speed;

    const updateCount = () => {
      if (start < targetNumber) {
        start += increment;
        setCount(Math.ceil(start));
        setTimeout(updateCount, 30);
      } else {
        setCount(targetNumber);
      }
    };

    updateCount();

    return () => {
      setCount(0);
    };
  }, [target]);

  return (
    <div
      className={`flex justify-center items-center flex-col gap-2 lg:my-12 mobile:my-4 lg:py-10 mobile:py-2 xl:px-24 lg:px-12 mobile:px-16 border-white ${
        isLastItem
          ? "lg:border-r lg:border-b-0 mobile:border-r-0 mobile:border-b"
          : ""
      }`}
    >
      <h1 className="xl:text-6xl lg:text-4xl mobile:text-3xl font-semibold font-[OreloBold] text-white">
        {count}
      </h1>
      <h3 className="text-white">{text}</h3>
    </div>
  );
};

export default CountingBox;

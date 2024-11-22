"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LeftArrowSvg, RightArrowSvg } from "@/assets/svgs";
import Image from "next/image";
import { HorizontalTimeline } from "@/components/horizontalTimeline";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const data = [
    {
      upTitle: "Getting to Know Us",
      upDescription:
        "Your journey begins with a meeting where our team collaborates to capture your vision and turn it into reality. This is your time to dream, plan, and spark inspiration as we work together to bring your ideas to life.",
      downTitle: "Getting to Know You",
      downDescription:
        "During our initial discussion, we dive into all the beautiful details about you, your event, and your vision.",
    },
    {
      upTitle: "Site Visit",
      upDescription:
        "Chic takes a field trip to the venue where your event will come to life. Whether it’s nearby or far away, we explore the space to get fully acquainted, ensuring every detail is planned with precision and creativity.",
      downTitle: "You Learn About Us",
      downDescription:
        "With your initial interest comes a meeting with the team who will work on capturing your vision and making it happen. This is the time for dreaming, scheming, and sparking creativity.",
    },
    {
      upTitle: "We Learn About You",
      upDescription:
        "In our initial discussion, we get to learn all the gorgeous details about you, your event, and your vision.",
      downTitle: "You Learn About Us",
      downDescription:
        "With your initial interest comes a meeting with the team who will work on capturing your vision and making it happen. This is the time for dreaming, scheming, and sparking creativity.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={2}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 1,
          },
          1240: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: index === activeIndex ? "33.3%" : "33.3%",
            }}
          >
            <div className="flex items flex-col justify-start mr-10 overflow-hidden">
              <div
                className={`text-left max-w-[540px] mobile:text-[16px] mobile:w-60 lg:text-lg
                 lg:w-[540px] ${
                   index === activeIndex
                     ? "opacity-1"
                     : index === activeIndex + 1
                     ? "opacity-60"
                     : ""
                 }`}
              >
                <h2 className="lg:text-xl mobile:text-base font-bold mb-4 uppercase">
                  {item.upTitle}
                </h2>
                <p className="mb-8">{item.upDescription}</p>
              </div>
              <HorizontalTimeline index={index} />
              <div
                className={`text-left max-w-[540px] mobile:text-[16px] mobile:w-64 lg:text-lg
    lg:w-[540px] ${
      index === activeIndex
        ? "opacity-1"
        : index === activeIndex + 1
        ? "opacity-60"
        : ""
    }`}
              >
                <h2 className="lg:text-xl mobile:text-base font-bold mb-4 uppercase">
                  {item.downTitle}
                </h2>
                <p className="mb-8">{item.downDescription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-3 mt-4">
        <button
          className="border border-black h-16 w-16 rounded-full flex justify-center items-center"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={LeftArrowSvg} alt="Left Arrow" />
        </button>
        <button
          className="border border-black h-16 w-16 rounded-full flex justify-center items-center"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={RightArrowSvg} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Slider;

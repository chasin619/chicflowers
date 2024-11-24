"use client";

import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";

interface ContentSectionProps {
  htmlContent: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  htmlContent = `Planning a wedding can be both exciting and overwhelming. From selecting the perfect venue to choosing the floral arrangements, there are countless details that go into making your special day unforgettable. One of the most important aspects of a wedding is creating an atmosphere that reflects your personality as a couple. Whether it's a small intimate gathering or a large celebration with family and friends, every detail matters. Let us help you bring your vision to life with our personalized wedding services that cater to your unique style and preferences.

  Our team understands that each wedding is unique, and we pride ourselves on offering bespoke solutions that match your dreams. From the grand entrance to the final dance, we are committed to making every moment extraordinary. We collaborate closely with you to ensure that everything, from the music selection to the color scheme, aligns perfectly with your preferences. Our experienced coordinators are well-versed in handling all aspects of wedding planning, including vendor management, timeline creation, and on-the-day coordination, so you can relax and enjoy every moment of your special day.
  
  Imagine walking down the aisle surrounded by breathtaking floral arrangements, the scent of fresh blooms filling the air. Picture your guests seated comfortably in a beautifully decorated venue that captures the essence of your love story. We specialize in turning these dreams into reality, taking care of even the smallest details to create an unforgettable experience for you and your guests. Our commitment to excellence means that you can trust us to handle all the logistics, allowing you to focus on celebrating your love without any stress or worry. With our help, your wedding will be a day that you and your loved ones will cherish forever.`,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link Copied");
  };
  return (
    <div className="lg:px-16 px-4 lg:mt-12 mt-4 flex gap-48">
      <div className="hidden md:block">
        <p className="text-xl text-black font-semibold">Share</p>
        <div className="flex flex-col items-start gap-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full cursor-pointer bg-[#f0f0f0] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
              />
            </div>
            <span className="font-medium">Instagram</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full cursor-pointer bg-[#f0f0f0] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
              />
            </div>
            <span className="font-medium">Facebook</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full cursor-pointer bg-[#f0f0f0] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faTiktok}
                className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
              />
            </div>
            <span className="font-medium">Tiktok</span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full cursor-pointer bg-[#f0f0f0] flex items-center justify-center"
              onClick={handleCopy}
            >
              <FontAwesomeIcon
                icon={faCopy}
                className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
              />
            </div>
            <span className="font-medium">Copy link</span>
          </div>
        </div>
      </div>
      <div
        className="md:text-lg text-base text-gray-700 leading-relaxed lg:max-w-[75%] max-w-full"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default ContentSection;

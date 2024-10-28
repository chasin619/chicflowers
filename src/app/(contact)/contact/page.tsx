"use client";
import DetailSection from "@/ui/Contact/DetailSection";
import React from "react";
import UserForm from "@/ui/Contact/Form/UserForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import Image from "next/image";
import { LeftArrowSvg, RightArrowSvg } from "@/assets/svgs";
import EventInfoForm from "@/ui/Contact/Form/EventInfoForm";
import EventVisionForm from "@/ui/Contact/Form/EventVisionForm";
import SocailizeForm from "@/ui/Contact/Form/SocailizeForm";

const Contact = () => {
  const { steps, step, currentStepIndex, back, next } = useMultistepForm([
    <UserForm />,
    <EventInfoForm />,
    <EventVisionForm />,
    <SocailizeForm />,
  ]);

  return (
    <div className="bg-[#f0f0f0] min-h-screen flex gap-20 px-4 py-6 pt-20 mt-10 mobile:flex-col md:flex-row">
      <DetailSection />
      <div className="flex flex-col w-full">
        <div className="min-h-[70vh]">{step}</div>
        <div className="flex items-center justify-center self-end px-16">
          <div className="flex items-center space-x-3 mt-10">
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black text-black focus:outline-none"
              onClick={back}
            >
              <Image src={LeftArrowSvg} alt="Left Arrow" />
            </button>
            <span className="text-black text-lg">
              {currentStepIndex + 1} / {steps.length}
            </span>
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black text-black focus:outline-none"
              onClick={next}
            >
              <Image src={RightArrowSvg} alt="Left Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/* eslint-disable react/jsx-key */
"use client";
import DetailSection from "@/ui/Contact/DetailSection";
import React, { useState } from "react";
import UserForm from "@/ui/Contact/Form/UserForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import Image from "next/image";
import { LeftArrowSvg, RightArrowSvg } from "@/assets/svgs";
import EventInfoForm from "@/ui/Contact/Form/EventInfoForm";
import EventVisionForm from "@/ui/Contact/Form/EventVisionForm";
import SocailizeForm from "@/ui/Contact/Form/SocailizeForm";
import toast from "react-hot-toast";

const Contact = () => {
  const INITIAL_DATA = {
    personalInfo: {
      fullName: "",
      phoneNo: "",
      email: "",
      eventDate: "",
      eventType: "",
    },
    financialInfo: {
      venue: "",
      eventPlanner: "",
      guests: "",
      weddingInvestment: "",
      decorInvestment: "",
    },
    media: { description: "", visuals: "" },
    additionalInfo: {
      contactType: "",
      hearAbout: "",
      contact: "",
    },
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateFields = (sectionKey, fields) => {
    setFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        ...fields,
      },
    }));
  };

  const { steps, step, currentStepIndex, back, next, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm data={formData.personalInfo} updateFields={updateFields} />,
      <EventInfoForm
        data={formData.financialInfo}
        updateFields={updateFields}
      />,
      <EventVisionForm data={formData.media} updateFields={updateFields} />,
      <SocailizeForm
        data={formData.additionalInfo}
        personalInfo={formData.personalInfo}
        updateFields={updateFields}
      />,
    ]);

  const validateFields = (data) => {
    let isValid = true;
    Object.values(data).forEach((value) => {
      if (!value) isValid = false;
    });
    return isValid;
  };

  const stepForm = {
    0: "personalInfo",
    1: "financialInfo",
    2: "media",
    3: "additionalInfo",
  };
  const feilds = formData[stepForm[currentStepIndex]];
  const handleNextStep = () => {
    if (!validateFields(feilds)) {
      toast.error("Please fill out all fields before proceeding");
      return;
    }
    next();
  };

  const submitEventInquires = async () => {
    setIsLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    toast.success(data.message);
    setIsLoading(false);
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen flex gap-20 px-4 py-6 pt-20 mt-10 mobile:flex-col md:flex-row">
      <DetailSection />
      <div className="flex flex-col w-full">
        <div className="min-h-[70vh]">{step}</div>
        <div className="flex items-center justify-center self-end px-16">
          <div className="flex items-center mt-10 bg-white border p-2 px-2 rounded-full">
            {!isFirstStep && (
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full border  text-black focus:outline-none"
                onClick={back}
              >
                <Image src={LeftArrowSvg} alt="Left Arrow" />
              </button>
            )}
            <span className="text-black text-lg mx-3">
              {currentStepIndex + 1} / {steps.length}
            </span>
            {isLastStep && validateFields(feilds) ? (
              <button
                className={`flex items-center justify-center px-5 py-2 rounded-3xl border text-black focus:outline-none hover:bg-gray-900 hover:text-white transition-colors duration-300 ${
                  isLoading ? "opacity-15" : "opacity-100"
                }`}
                onClick={submitEventInquires}
                disabled={isLoading}
              >
                Submit
              </button>
            ) : (
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full border  text-black focus:outline-none"
                onClick={handleNextStep}
              >
                <Image src={RightArrowSvg} alt="Left Arrow" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

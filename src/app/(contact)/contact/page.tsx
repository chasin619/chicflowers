"use client";
import { Input } from "@/components/input";
import DetailSection from "@/ui/Contact/DetailSection";
import React, { useState } from "react";

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const FEILDS = [
    { label: "FULL NAME", placeholder: "Type something", required: true },
    {
      label: "WHERE ARE YOU BASED?",
      placeholder: "Type something",
      required: true,
    },
    { label: "EMAIL", placeholder: "Type something", required: true },
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen flex gap-20 px-4 py-6 pt-20 mt-10">
      <DetailSection />
      <div className="w-full px-16 h-[90vh]">
        <h2 className="text-2xl md:text-3xl text-gray-900 mb-6 font-semibold">
          Let's get to know each other
        </h2>

        <form className="space-y-8">
          <div className="space-y-8">
            {FEILDS.map((field, index) => (
              <Input
                key={index}
                label={field.label}
                placeholder={field.placeholder}
                required={field.required}
              />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-900 mt-12 mb-6 font-semibold">
            Spill the details...
          </h2>

          {/* Event Date Input */}
          <div className="relative">
            <label className="text-gray-700 font-bold mb-2">
              EVENT DATE OR TIMELINE *
            </label>
            <input
              type="text"
              placeholder="Type something"
              className="w-full bg-transparent border-2 border-gray-700 rounded-full px-4 py-3 mt-1 text-gray-900 focus:outline-none focus:border-gray-900"
              required
            />
            <span className="absolute text-gray-700 text-sm right-4 top-full mt-2">
              This field is required.
            </span>
          </div>

          {/* Event Type Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {[
              "WEDDING",
              "SOCIAL",
              "CORPORATE",
              "NON-PROFIT",
              "MITZVAH",
              "OTHER",
            ].map((type) => (
              <button
                key={type}
                type="button"
                className={`bg-transparent border-2 rounded-full px-6 py-2 focus:outline-none transition-colors duration-300 ${
                  selectedType === type
                    ? "bg-gray-900 text-white"
                    : "border-gray-700 text-gray-700 hover:bg-gray-900 hover:text-white"
                }`}
                onClick={() => handleTypeSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {selectedType === "OTHER" && (
            <div className="relative mt-8">
              <label className="text-gray-700 font-bold mb-2">OTHER</label>
              <input
                type="text"
                placeholder="Type something"
                className="w-full bg-transparent border-2 border-gray-700 rounded-full px-4 py-3 mt-1 text-gray-900 focus:outline-none focus:border-gray-900"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

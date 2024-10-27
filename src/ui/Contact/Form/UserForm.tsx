import { Input } from "@/components/input";
import { Select } from "@/components/select";
import React, { useState } from "react";

const UserForm = () => {
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

  return (
    <div className="w-full px-16">
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

        <Input
          label="EVENT DATE OR TIMELINE"
          placeholder="Type something"
          required
        />

        <Select
          value={selectedType}
          types={["WEDDING", "SOCIAL", "CORPORATE", "OTHER"]}
          onTypeSelect={setSelectedType}
        />

        {selectedType === "OTHER" && (
          <div className="relative mt-8">
            <label className="text-gray-700 font-bold mb-2">OTHER</label>
            <input
              type="text"
              placeholder="Type something"
              className="w-full bg-white border rounded-full px-4 py-3 mt-1 text-gray-900 focus:outline-none focus:border-gray-900"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;

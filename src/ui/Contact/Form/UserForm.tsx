import { Input } from "@/components/input";
import { Select } from "@/components/select";
import React, { useState } from "react";

const UserForm = ({ data, updateFields }) => {
  const [selectedType, setSelectedType] = useState<string | null>(
    data.eventType || null
  );

  const FEILDS = [
    {
      name: "fullName",
      label: "FULL NAME",
      placeholder: "Type something",
      required: true,
      value: data.fullName,
    },
    {
      name: "phoneNo",
      label: "PHONE NUMBER",
      placeholder: "Type something",
      required: true,
      value: data.phoneNo,
    },
    {
      name: "email",
      label: "EMAIL",
      placeholder: "Type something",
      required: true,
      value: data.email,
    },
  ];

  const handleSelect = (type) => {
    if (type) {
      setSelectedType(type);
      updateFields("personalInfo", { eventType: type });
    }
  };

  return (
    <div className="w-full mobile:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl text-gray-900 mb-6 font-semibold">
        {`Let's get to know each other`}
      </h2>

      <form className="space-y-8">
        <div className="space-y-8">
          {FEILDS.map((field, index) => {
            const { label, value, required, placeholder, name } = field;
            return (
              <Input
                key={index}
                label={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={(e) =>
                  updateFields("personalInfo", { [name]: e.target.value })
                }
              />
            );
          })}
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-900 mt-12 mb-6 font-semibold">
          Spill the details...
        </h2>

        <Input
          label="EVENT DATE"
          placeholder="Type something"
          name="eventDate"
          value={data.eventDate}
          required
          onChange={(e) =>
            updateFields("personalInfo", { eventDate: e.target.value })
          }
        />

        <Select
          value={selectedType}
          types={["WEDDING", "SOCIAL", "CORPORATE", "OTHER"]}
          onTypeSelect={handleSelect}
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

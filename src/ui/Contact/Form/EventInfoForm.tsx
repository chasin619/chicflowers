import { Input } from "@/components/input";
import { Select } from "@/components/select";
import React, { useState } from "react";

const EventInfoForm = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [details, setDetails] = useState({
    numberOfGuests: "",
    overallInvestment: "",
    decorInvestment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const FIELDS = [
    { label: "NUMBER OF GUESTS", name: "numberOfGuests", required: true },
    {
      label: "OVERALL WEDDING INVESTMENT ESTIMATE",
      name: "overallInvestment",
      required: true,
      hint: "***You should assume that your decor budget inputted below is approximately 20% of your overall wedding budget***",
    },
    {
      label: "ESTIMATED DECOR INVESTMENT ESTIMATE",
      name: "decorInvestment",
      required: true,
      hint: "Wedding decor refers to the various decorative elements used to enhance the ambiance and appearance of a wedding venue. This can include items like floral arrangements, table settings, lighting, drapery, and thematic decorations.",
    },
  ];

  return (
    <div className="w-full px-16">
      <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold">
        Do you have any of these details nailed down?
      </h2>
      <Select
        value={selectedType}
        types={[
          "VENUE",
          "START TIME",
          "EVENT PLANNER",
          "ENTERTAINMENT",
          "PHOTOGRAPHY",
          "CATERER",
        ]}
        onTypeSelect={setSelectedType}
      />

      <form className="space-y-8 mt-10">
        <div className="space-y-8">
          {FIELDS.map((field, index) => (
            <div key={index} className="relative">
              <Input
                value={details[field.name as keyof typeof details]}
                name={field.name}
                label={field.label}
                onChange={handleInputChange}
                placeholder="Type something"
                required={field.required}
              />
              {field.hint && (
                <span className="text-gray-500 text-sm mt-2 block">
                  {field.hint}
                </span>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default EventInfoForm;

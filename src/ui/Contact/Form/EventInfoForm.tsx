import React from "react";
import { Input } from "@/components/input";

const EventInfoForm = ({ data, updateFields }) => {

  const FIELDS = [
    {
      name: "venue",
      label: "VENUE",
      required: true,
      value: data.venue,
    },
    {
      name: "eventPlanner",
      label: "EVENT PLANNER",
      required: true,
      value: data.eventPlanner,
    },
    {
      name: "guests",
      label: "NUMBER OF GUESTS",
      required: true,
      value: data.guests,
    },
    {
      name: "weddingInvestment",
      label: "OVERALL WEDDING INVESTMENT ESTIMATE",
      required: true,
      value: data.weddingInvestment,
      hint: "***You should assume that your decor budget inputted below is approximately 20% of your overall wedding budget***",
    },
    {
      label: "ESTIMATED DECOR INVESTMENT ESTIMATE",
      name: "decorInvestment",
      required: true,
      value: data.decorInvestment,
      hint: "Wedding decor refers to the various decorative elements used to enhance the ambiance and appearance of a wedding venue. This can include items like floral arrangements, table settings, lighting, drapery, and thematic decorations.",
    },
  ];

  return (
    <div className="w-full mobile:px-8 lg:px-16">
      <form className="space-y-8 mt-10">
        <div className="space-y-8">
          {FIELDS.map((field, index) => (
            <div key={index} className="relative">
              <Input
                value={field.value}
                name={field.name}
                label={field.label}
                placeholder="Type something"
                required={field.required}
                onChange={(e) =>
                  updateFields("financialInfo", {
                    [field.name]: e.target.value,
                  })
                }
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

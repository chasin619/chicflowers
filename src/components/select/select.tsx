import React, { FC, useState } from "react";

interface SelectTypes {
  types?: string[];
  value: string;
  onTypeSelect: (type: string) => void;
}

const Select: FC<SelectTypes> = ({ types, onTypeSelect, value }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          className={`bg-transparent border-2 rounded-full px-6 py-2 focus:outline-none transition-colors duration-300 ${
            value === type
              ? "bg-gray-900 text-white"
              : "border-gray-700 text-gray-700 hover:bg-gray-900 hover:text-white"
          }`}
          onClick={() => onTypeSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Select;

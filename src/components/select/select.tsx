import React, { FC } from "react";

interface SelectTypes {
  types?: string[];
  value: string[] | string;
  onTypeSelect: (type: string[]) => void;
  multiple?: boolean;
}

const Select: FC<SelectTypes> = ({
  types = [],
  onTypeSelect,
  value,
  multiple = false,
}) => {
  const handleTypeSelect = (type: string) => {
    if (multiple) {
      const newValue = Array.isArray(value)
        ? value.includes(type)
          ? value.filter((v) => v !== type)
          : [...value, type]
        : [type];
      onTypeSelect(newValue);
    } else {
      onTypeSelect([type]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          className={`bg-white border rounded-full px-6 py-2 focus:outline-none transition-colors duration-300 ${
            Array.isArray(value) && value.includes(type)
              ? "!bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-900 hover:text-white"
          }`}
          onClick={() => handleTypeSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Select;

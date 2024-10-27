import React, { FC } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  onChange?: any;
  value: string;
};

const Input: FC<InputProps> = ({
  label,
  placeholder,
  error,
  required,
  onChange,
  value,
}) => {
  return (
    <div className="relative">
      <label
        className={`font-bold mb-2 ${error ? "text-red-600" : "text-gray-700"}`}
      >
        {label} {required && "*"}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={`w-full bg-transparent border-2 rounded-full px-4 py-3 mt-1 text-gray-900 focus:outline-none ${
          error ? "border-red-600" : "border-gray-700 focus:border-gray-900"
        }`}
        required={required}
        onChange={onChange}
      />
      {error && (
        <span className="absolute text-red-600 text-sm right-4 top-full mt-2">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

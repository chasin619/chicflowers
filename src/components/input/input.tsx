import React, { FC, ChangeEvent } from "react";

interface InputProps {
  label?: string;
  error?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  placeholder: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  label,
  error,
  required,
  placeholder,
  value,
  name,
  onChange,
  ...props
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          className={`font-bold mb-2 ${
            error ? "text-red-600" : "text-gray-700"
          }`}
        >
          {label} {required && "*"}
        </label>
      )}
      <input
        {...props}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={`w-full bg-white border rounded-full px-4 py-3 mt-1 text-gray-900 focus:outline-none ${
          error ? "border-red-600" : "focus:border-gray-900"
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

// Button.tsx
import React from "react";
import { ButtonProps } from "./button.interface";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white font-semibold rounded-lg shadow-md ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;


import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#2563EB] text-white px-6 py-3 rounded-[16.68px] font-medium shadow-md hover:bg-blue-700 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

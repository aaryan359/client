
interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean; // Optional: Disable button
  className?: string; // Optional: Add custom classes
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, className }) => {
  return (
    <button
      className={`bg-[#2563EB] text-black px-6 py-3 rounded-[16.68px] font-medium shadow-md hover:bg-blue-700 transition duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

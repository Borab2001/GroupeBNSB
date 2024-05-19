import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="
        px-4 py-2 text-lg md:px-6 md:py-3 md:text-xl lg:px-7 lg:py-4 lg:text-2xl 
        font-medium text-white bg-gray-900 
        border-2 border-transparent rounded-full relative overflow-hidden 
        transition-all duration-300 ease-in-out outline-none cursor-pointer 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_4px_4px_rgba(150,150,150,0.25),_0_1px_0_rgb(31,31,38),_0_10px_15px_-3px_rgba(0,0,0,0.1)]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

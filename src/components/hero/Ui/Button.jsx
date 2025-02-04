import React from "react";

const Button = ({ size = "md", variant = "solid", className = "", children, ...props }) => {
  const baseStyles = "font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    solid: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
    ghost: "text-yellow-400 hover:bg-yellow-500 hover:text-black",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
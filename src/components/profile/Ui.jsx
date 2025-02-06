
import React from 'react';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  className = '', 
  ...props 
}) => {
  const variants = {
    default: 'bg-[#424242] text-white hover:bg-[#424242]/90',
    ghost: '  hover:bg-gray-100',
  };

  const sizes = {
    default: 'px-4 py-2',
    icon: 'p-2',
  };

  const baseStyles = 'rounded-md font-medium transition-colors';

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
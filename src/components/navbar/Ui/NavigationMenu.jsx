// Ui/NavigationMenu.jsx
import React, { createContext, useContext, useState } from 'react';

const NavigationMenuContext = createContext();

export const NavigationMenu = ({ children, className = '' }) => {
  return (
    <nav className={`relative ${className}`}>
      {children}
    </nav>
  );
};

export const NavigationMenuList = ({ children }) => {
  return (
    <ul className="flex items-center gap-2 px-4">
      {children}
    </ul>
  );
};

export const NavigationMenuItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <li 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </li>
    </NavigationMenuContext.Provider>
  );
};

export const NavigationMenuTrigger = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(NavigationMenuContext);

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 
        ${isOpen ? 'text-gray-900' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      >
        <path
          d="M2 4L6 8L10 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const NavigationMenuContent = ({ children }) => {
  const { isOpen } = useContext(NavigationMenuContext);

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-md bg-white p-2 shadow-lg">
      {children}
    </div>
  );
};

export const NavigationMenuLink = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
    >
      {children}
    </a>
  );
};
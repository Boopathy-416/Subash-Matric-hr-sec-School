// Ui/ListItem.jsx
import React from 'react';

const ListItem = ({ title, href, children }) => {
  return (
    <li className="block">
      <a
        href={href}
        className="block rounded-md p-3 hover:bg-gray-100 transition-colors"
      >
        <div className="text-sm font-medium text-gray-900">
          {title}
        </div>
        {children && (
          <p className="mt-1 text-sm text-gray-500">
            {children}
          </p>
        )}
      </a>
    </li>
  );
};

export default ListItem;
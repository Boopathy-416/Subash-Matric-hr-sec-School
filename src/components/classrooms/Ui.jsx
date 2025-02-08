
import React from "react";

export default function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#17152f] bg-opacity-50">
      <div className="bg-black text-white border border-purple-500/20 p-6 rounded-lg max-w-2xl w-full">
        <button className="absolute top-20 right-20   text-white" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
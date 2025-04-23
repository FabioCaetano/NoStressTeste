import React from "react";
export function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`rounded px-4 py-2 font-semibold transition ${className}`}>
      {children}
    </button>
  );
}

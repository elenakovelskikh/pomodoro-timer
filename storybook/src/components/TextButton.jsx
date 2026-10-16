import React from "react";

// The quiet gray text buttons used for secondary actions ("Switch to long break", "Cancel", ...).
export function TextButton({ children, onClick, disabled = false, wide = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-full text-sm font-medium text-neutral-500 hover:text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed ${
        wide ? "w-full" : "px-4"
      }`}
      style={{ height: "44px" }}
    >
      {children}
    </button>
  );
}

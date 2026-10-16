import React from "react";

// Quiet gray text button for secondary actions ("Switch to long break", "Add more rounds", "Cancel").
export function GhostButton({ children = "Button", onClick, disabled = false, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-full text-control text-secondary hover:text-secondary-hover disabled:opacity-40 disabled:cursor-not-allowed h-11 ${
        fullWidth ? "w-full" : "px-4"
      }`}
    >
      {children}
    </button>
  );
}

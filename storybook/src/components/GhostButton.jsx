import React from "react";

// Quiet gray text button for secondary actions ("Switch to long break", "Add more rounds", ...).
// No fill, padding or radius — just the text in a 44px-tall hit area.
export function GhostButton({ children = "Button", onClick, disabled = false, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center text-control text-button-tertiary hover:text-button-tertiary-hover disabled:opacity-40 disabled:cursor-not-allowed h-11 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}

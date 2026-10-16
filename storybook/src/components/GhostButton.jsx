import React from "react";

// Quiet gray text button for secondary actions ("Switch to long break", "Add more rounds", "Cancel").
export function GhostButton({ children = "Button", onClick, disabled = false, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-full text-sm font-medium text-neutral-500 hover:text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed ${
        fullWidth ? "w-full" : "px-4"
      }`}
      style={{ height: "44px" }}
    >
      {children}
    </button>
  );
}

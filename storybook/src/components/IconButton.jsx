import React from "react";
import { MODES } from "../tokens";

const SIZES = { md: "h-11 w-11", lg: "h-14 w-14" };
const VARIANTS = {
  secondary: "bg-button-secondary text-button-secondary hover:bg-button-secondary-hover hover:text-button-secondary-hover",
  mode: "bg-button-mode text-button-primary hover:bg-button-mode-hover",
};

// Round button with an icon: gray (secondary) or in the current mode color (mode).
export function IconButton({ icon, label, variant = "secondary", size = "md", mode = "focus", disabled = false, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`flex items-center justify-center rounded-full disabled:opacity-40 disabled:cursor-not-allowed ${SIZES[size]} ${VARIANTS[variant]}`}
      style={variant === "mode" ? { boxShadow: `0 2px 8px -2px ${MODES[mode].shadow}59` } : undefined}
    >
      {icon}
    </button>
  );
}

import React from "react";
import { MODE_COLORS } from "../tokens";

const VARIANTS = {
  primary:
    "w-full px-6 rounded-xl type-button bg-button-primary text-button-primary hover:bg-button-primary-hover disabled:hover:bg-button-primary",
  secondary:
    "w-full px-6 rounded-xl type-button bg-button-secondary text-button-secondary hover:bg-button-secondary-hover hover:text-button-secondary-hover disabled:hover:bg-button-secondary disabled:hover:text-button-secondary",
  tertiary: "type-control text-button-tertiary hover:text-button-tertiary-hover disabled:hover:text-button-tertiary",
};

// Text button in three levels: primary (violet CTA), secondary (gray), tertiary (text only).
// Primary and secondary fill the width they're given (in the app they always sit in popups, alone
// or side by side); tertiary is as wide as its text.
export function Button({ variant = "primary", children = "Button", disabled = false, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-11 flex items-center justify-center whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed ${VARIANTS[variant]}`}
      style={variant === "primary" ? { boxShadow: `0 2px 8px -2px ${MODE_COLORS.focus.shadow}59` } : undefined}
    >
      {children}
    </button>
  );
}

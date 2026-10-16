import React from "react";
import { MODE_COLORS } from "../tokens";

// The violet call-to-action used in popups: bg-primary (same value as the Focus color) and the
// Focus shadow color.
export function PrimaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 rounded-full text-on-color text-button bg-primary hover:bg-primary-hover"
      style={{ boxShadow: `0 2px 8px -2px ${MODE_COLORS.focus.shadowColor}59` }}
    >
      {children}
    </button>
  );
}

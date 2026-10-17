import React from "react";
import { MODE_COLORS } from "../tokens";

// The violet call-to-action used in popups: bg-button-primary (same value as the Focus color) and the
// Focus shadow color. Fills its container; the label never wraps.
export function PrimaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-11 px-6 rounded-xl text-button-primary text-button bg-button-primary hover:bg-button-primary-hover whitespace-nowrap"
      style={{ boxShadow: `0 2px 8px -2px ${MODE_COLORS.focus.shadowColor}59` }}
    >
      {children}
    </button>
  );
}

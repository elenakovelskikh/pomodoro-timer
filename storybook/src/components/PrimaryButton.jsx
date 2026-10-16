import React from "react";
import { MODES } from "../tokens";

// The violet call-to-action used in popups. Its color is the Focus color (violet-600 = #7c3aed),
// its shadow is the Focus shadow color.
export function PrimaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 rounded-full text-white font-medium bg-violet-600 hover:bg-violet-700"
      style={{ boxShadow: `0 2px 8px -2px ${MODES.work.shadowColor}59` }}
    >
      {children}
    </button>
  );
}

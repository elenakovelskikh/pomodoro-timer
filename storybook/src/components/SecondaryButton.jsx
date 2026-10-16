import React from "react";

// Gray filled button that sits next to the primary one in popups (e.g. Cancel): same fill and
// content color as the round Reset/Skip buttons, same radius, height and text style as the
// primary button. It hugs its text so the primary button gets the rest of the row.
export function SecondaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 px-6 py-3 rounded-xl bg-secondary-button text-button text-label hover:bg-secondary-button-hover"
    >
      {children}
    </button>
  );
}

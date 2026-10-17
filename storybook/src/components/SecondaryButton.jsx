import React from "react";

// Gray filled button that pairs with the primary one in popups (e.g. Cancel): same fill and
// content color as the round Reset/Skip buttons, same height, radius and text style as the
// primary button. Fills its container; the label never wraps.
export function SecondaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-11 px-6 rounded-xl bg-secondary-button text-button text-on-secondary hover:text-on-secondary-hover hover:bg-secondary-button-hover whitespace-nowrap"
    >
      {children}
    </button>
  );
}

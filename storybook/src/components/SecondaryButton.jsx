import React from "react";

// Gray filled button that pairs with the primary one in popups (e.g. Cancel): same fill and
// content color as the round Reset/Skip buttons, same corner radius as the primary button.
export function SecondaryButton({ children = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center rounded-xl bg-secondary-button text-control text-label hover:bg-secondary-button-hover h-11"
    >
      {children}
    </button>
  );
}

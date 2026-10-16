import React from "react";

// The violet call-to-action used in both popups ("Start", "Add N rounds").
export function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 rounded-full text-white font-medium bg-violet-600 hover:bg-violet-700"
      style={{ boxShadow: "0 2px 8px -2px #7c3aed59" }}
    >
      {children}
    </button>
  );
}

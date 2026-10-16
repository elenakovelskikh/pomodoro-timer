import React from "react";
export function Credit({ inert }) {
  return (
    <div
      inert={inert ? "" : undefined}
      className="w-full flex items-center justify-center gap-1 py-4"
      style={{ fontSize: "10px", color: "#a3a3a3" }}
    >
      <span>Made by Elena Kovelskikh</span>
      <span>·</span>
      <a href="https://www.linkedin.com/in/kovelskikh/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 underline">
        LinkedIn
      </a>
      <span>·</span>
      <a href="https://github.com/elenakovelskikh" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 underline">
        GitHub
      </a>
    </div>
  );
}

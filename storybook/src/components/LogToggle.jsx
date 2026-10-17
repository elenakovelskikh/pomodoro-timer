import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "./Icons";

// "2 completed ⌄" under the controls: opens and closes the session log. The chevron only appears
// once there is something to show; it takes the button's tertiary color, so it darkens on hover.
export function LogToggle({ count = 0, open = false, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={count > 0 ? open : undefined}
      className="flex items-center min-h-11 text-button-tertiary hover:text-button-tertiary-hover"
    >
      <span className="flex items-baseline gap-1.5">
        <span className="type-heading text-primary">{count}</span>
        <span className="type-body text-primary">completed</span>
        {count > 0 && (
          <span className="self-end py-px">
            {open ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
          </span>
        )}
      </span>
    </button>
  );
}

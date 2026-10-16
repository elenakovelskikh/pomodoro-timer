import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "./Icons";

// "2 completed ⌄" under the controls: opens and closes the session log. The chevron only appears
// once there is something to show.
export function LogToggle({ count = 0, open = false, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center min-h-11">
      <span className="flex items-baseline gap-1.5">
        <span className="text-number text-primary">{count}</span>
        <span className="text-unit text-primary">completed</span>
        {count > 0 && (
          <span className="self-end py-px">
            {open ? <ChevronUpIcon size={16} className="text-secondary" /> : <ChevronDownIcon size={16} className="text-secondary" />}
          </span>
        )}
      </span>
    </button>
  );
}

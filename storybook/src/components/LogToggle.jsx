import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "./Icons";

// "2 completed ⌄" under the controls: opens and closes the session log. The chevron only appears
// once there is something to show.
export function LogToggle({ count = 0, open = false, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center" style={{ minHeight: "44px" }}>
      <span className="flex items-baseline gap-1.5">
        <span className="text-xl font-bold text-neutral-900 leading-none">{count}</span>
        <span className="text-sm text-neutral-900 leading-none">completed</span>
        {count > 0 && (
          <span className="self-end py-px">
            {open ? (
              <ChevronUpIcon size={16} style={{ color: "#737373" }} />
            ) : (
              <ChevronDownIcon size={16} style={{ color: "#737373" }} />
            )}
          </span>
        )}
      </span>
    </button>
  );
}

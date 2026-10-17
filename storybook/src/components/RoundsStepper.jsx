import React, { useId, useState } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

// value: a number of rounds, or null for "no limit" (shown as the infinity sign).
// At an end of the range its button is disabled and out of the Tab order, with one exception:
// if that button was just pressed to reach the limit, it stays focusable (aria-disabled) until
// focus leaves it, so keyboard focus isn't dropped. The value is a polite live region, read out
// after each press.
export function RoundsStepper({ label = "Label", value = null, onChange = () => {} }) {
  const labelId = useId();
  const atMin = value === null;
  const atMax = value === 16;
  // "min" or "max": the end the user just reached with that button, while it still has focus
  const [held, setHeld] = useState(null);
  const step =
    "w-11 h-11 flex items-center justify-center bg-button-secondary text-button-secondary hover:text-button-secondary-hover hover:bg-button-secondary-hover disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-button-secondary disabled:hover:text-button-secondary aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-button-secondary aria-disabled:hover:text-button-secondary";
  const press = (next, end) => {
    if (next === null || next === 16) setHeld(end);
    onChange(next);
  };
  return (
    <div role="group" aria-labelledby={labelId} className="w-full flex flex-col items-start gap-2">
      <div id={labelId} className="type-control text-label">{label}</div>
      <div className="flex items-stretch rounded-xl border border-subtle">
        <button
          type="button"
          aria-label="Fewer rounds"
          disabled={atMin && held !== "min"}
          aria-disabled={(atMin && held === "min") || undefined}
          onClick={() => !atMin && press(value === 1 ? null : value - 1, "min")}
          onBlur={() => held === "min" && setHeld(null)}
          className={`${step} rounded-l-xl`}
        >
          <MinusIcon size={20} />
        </button>
        <span className="w-24 flex items-center justify-center border-x border-subtle" aria-live="polite" aria-atomic="true">
          <span className="flex items-baseline gap-1.5 tabular-nums">
            {atMin ? (
              <>
                <span className="type-heading text-primary" aria-hidden="true">∞</span>
                <span className="sr-only">No limit</span>
              </>
            ) : (
              <>
                <span className="type-heading text-primary">{value}</span>
                <span className="type-body text-primary">{value === 1 ? "round" : "rounds"}</span>
              </>
            )}
          </span>
        </span>
        <button
          type="button"
          aria-label="More rounds"
          disabled={atMax && held !== "max"}
          aria-disabled={(atMax && held === "max") || undefined}
          onClick={() => !atMax && press(atMin ? 1 : value + 1, "max")}
          onBlur={() => held === "max" && setHeld(null)}
          className={`${step} rounded-r-xl`}
        >
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

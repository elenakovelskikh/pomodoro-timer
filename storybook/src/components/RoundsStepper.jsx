import React, { useId } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

// value: a number of rounds, or null for "no limit" (shown as the infinity sign).
// At the ends of the range the buttons are aria-disabled rather than disabled, so keyboard focus
// stays on them; the value is a polite live region, read out after each press.
export function RoundsStepper({ label = "Label", value = null, onChange = () => {} }) {
  const labelId = useId();
  const atMin = value === null;
  const atMax = value === 16;
  const step =
    "w-11 h-11 flex items-center justify-center bg-button-secondary text-button-secondary hover:text-button-secondary-hover hover:bg-button-secondary-hover aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-button-secondary aria-disabled:hover:text-button-secondary";
  return (
    <div role="group" aria-labelledby={labelId} className="w-full flex flex-col items-start gap-2">
      <div id={labelId} className="type-control text-label">{label}</div>
      <div className="flex items-stretch rounded-xl border border-subtle">
        <button
          type="button"
          aria-label="Fewer rounds"
          aria-disabled={atMin || undefined}
          onClick={() => !atMin && onChange(value === 1 ? null : value - 1)}
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
          aria-disabled={atMax || undefined}
          onClick={() => !atMax && onChange(atMin ? 1 : value + 1)}
          className={`${step} rounded-r-xl`}
        >
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

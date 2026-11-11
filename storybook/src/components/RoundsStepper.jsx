import React, { useId } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

// value: a number of rounds, or null for "no limit" (shown as the infinity sign).
// The value is a polite live region, read out after each press.
export function RoundsStepper({ label = "Label", value = null, onChange = () => {} }) {
  const labelId = useId();
  const noLimit = value === null;
  // The values go round in a loop: ∞ → 1 → 2 → … → 16 → ∞. "No limit" counts as more than 16,
  // so "+" at 16 gives ∞ and "−" at ∞ gives 16; "+" at ∞ starts again from 1, "−" at 1 gives ∞.
  // Neither button is ever disabled.
  const fewer = () => onChange(noLimit ? 16 : value === 1 ? null : value - 1);
  const more = () => onChange(noLimit ? 1 : value === 16 ? null : value + 1);
  const step =
    "w-11 h-11 flex items-center justify-center bg-button-secondary text-button-secondary hover:text-button-secondary-hover hover:bg-button-secondary-hover";
  return (
    <div role="group" aria-labelledby={labelId} className="w-full flex flex-col items-start gap-2">
      <div id={labelId} className="type-control text-label">{label}</div>
      <div className="flex items-stretch rounded-xl border border-subtle">
        <button type="button" aria-label="Fewer rounds" onClick={fewer} className={`${step} rounded-l-xl`}>
          <MinusIcon size={20} />
        </button>
        <span className="w-24 flex items-center justify-center border-x border-subtle" aria-live="polite" aria-atomic="true">
          <span className="flex items-baseline gap-1.5 tabular-nums">
            {noLimit ? (
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
        <button type="button" aria-label="More rounds" onClick={more} className={`${step} rounded-r-xl`}>
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { MinusIcon, PlusIcon } from "./Icons";

// value: a number of rounds, or null for "no limit" (shown as the infinity sign).
export function RoundsStepper({ label = "Number of rounds", value = null, onChange = () => {} }) {
  const step = "w-11 h-11 flex items-center justify-center bg-button-secondary text-button-secondary hover:text-button-secondary-hover hover:bg-button-secondary-hover disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-button-secondary disabled:hover:text-button-secondary";
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="text-control text-label">{label}</div>
      <div className="flex items-stretch rounded-xl border border-subtle">
        <button
          onClick={() => onChange(value === null ? null : value === 1 ? null : value - 1)}
          disabled={value === null}
          className={`${step} rounded-l-xl`}
        >
          <MinusIcon size={20} />
        </button>
        <span className="w-24 flex items-center justify-center border-x border-subtle">
          <span className="flex items-baseline gap-1.5 tabular-nums">
            <span className="text-number text-primary">{value === null ? "∞" : value}</span>
            {value !== null && <span className="text-unit text-primary">{value === 1 ? "round" : "rounds"}</span>}
          </span>
        </span>
        <button
          onClick={() => onChange(value === null ? 1 : Math.min(16, value + 1))}
          disabled={value === 16}
          className={`${step} rounded-r-xl`}
        >
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

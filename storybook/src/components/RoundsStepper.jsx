import React from "react";
import { MinusIcon, PlusIcon } from "./Icons";

// value: a number of rounds, or null for "no limit" (shown as the infinity sign).
export function RoundsStepper({ label = "Number of rounds", value = null, onChange = () => {} }) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="text-sm font-medium text-neutral-600">{label}</div>
      <div className="flex items-stretch rounded-xl border border-neutral-200">
        <button
          onClick={() => onChange(value === null ? null : value === 1 ? null : value - 1)}
          disabled={value === null}
          className="w-11 h-11 flex items-center justify-center rounded-l-xl bg-neutral-100 text-neutral-600 hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-neutral-100"
        >
          <MinusIcon size={20} />
        </button>
        <span className="w-24 flex items-center justify-center border-x border-neutral-200">
          <span className="flex items-baseline gap-1.5 tabular-nums">
            <span className="text-xl font-bold text-neutral-900 leading-none">{value === null ? "∞" : value}</span>
            {value !== null && (
              <span className="text-sm text-neutral-900 leading-none">{value === 1 ? "round" : "rounds"}</span>
            )}
          </span>
        </span>
        <button
          onClick={() => onChange(value === null ? 1 : Math.min(16, value + 1))}
          disabled={value === 16}
          className="w-11 h-11 flex items-center justify-center rounded-r-xl bg-neutral-100 text-neutral-600 hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-neutral-100"
        >
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

import React from "react";

// A proper ARIA radiogroup: one tab stop for the whole group (only the checked option is in the
// tab order), Left/Up and Right/Down move the checked option and keyboard focus together.
// The keyboard focus ring is the same as on every other button.
export function RadioGroup({ label, options, value, onChange }) {
  function handleKeyDown(e) {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const idx = options.findIndex((o) => o.value === value);
    const nextIdx = (idx + dir + options.length) % options.length;
    onChange(options[nextIdx].value);
    e.currentTarget.querySelectorAll('[role="radio"]')[nextIdx]?.focus();
  }

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="type-control text-label">{label}</div>
      <div role="radiogroup" aria-label={label} onKeyDown={handleKeyDown} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(opt.value)}
              className={`px-6 py-3 rounded-xl type-control whitespace-nowrap ${
                selected
                  ? "ring-2 ring-inset ring-radio-selected bg-radio-selected text-radio-selected"
                  : "ring-1 ring-inset ring-radio hover:ring-radio-hover text-button-tertiary hover:text-button-tertiary-hover"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

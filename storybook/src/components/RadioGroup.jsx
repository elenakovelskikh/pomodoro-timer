import React from "react";
// A proper ARIA radiogroup: one tab stop for the whole group (only the checked option is in the
// tab order), Left/Up and Right/Down move the checked option and keyboard focus together. Since
// focus and selection always coincide here, the checked pill's own ring already shows where
// focus is — no separate focus ring is drawn on top of it.
export function RadioGroup({ label, options, value, onChange, pillClassName }) {
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
      <div className="text-sm font-medium text-neutral-600">{label}</div>
      <div role="radiogroup" aria-label={label} onKeyDown={handleKeyDown} className="flex gap-2">
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
              className={`${pillClassName} focus-visible:outline-none ${
                selected
                  ? "ring-2 ring-inset ring-violet-500 bg-violet-50 text-violet-700"
                  : "ring-1 ring-inset ring-neutral-200 text-neutral-500"
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

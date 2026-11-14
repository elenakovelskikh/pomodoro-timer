import React from "react";

// Speaker time presets under the retro speaker timer. Pills look like RadioGroup, but each is a
// toggle button: picking one can ask for confirmation first, so arrow keys don't change it.
export function PresetPills({ presets = [2, 5], value = 5, onPick }) {
  return (
    <div role="group" aria-label="Speaker time" className="flex gap-2">
      {presets.map((min) => {
        const selected = min === value;
        return (
          <button
            key={min}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick?.(min)}
            className={`px-6 py-3 rounded-xl type-control whitespace-nowrap ${
              selected
                ? "ring-2 ring-inset ring-radio-selected bg-radio-selected text-radio-selected"
                : "ring-1 ring-inset ring-radio hover:ring-radio-hover text-button-tertiary hover:text-button-tertiary-hover"
            }`}
          >
            {min} min
          </button>
        );
      })}
    </div>
  );
}

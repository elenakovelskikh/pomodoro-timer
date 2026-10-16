import React from "react";
import { MODES } from "../tokens";

// Every color the timer UI actually uses, grouped by role. Values are the ones in index.html
// (Tailwind 3 class names in brackets where the site uses a class instead of a hex).
const groups = [
  {
    title: "Base",
    items: [
      ["white", "#ffffff", "Page and popup background; text and icons on colored buttons (bg-white, text-white)"],
      ["overlay", "rgba(255,255,255,0.6)", "Veil behind an open popup"],
      ["border", "#e5e5e5", "Popup and completion cards, stepper outline and dividers (border-neutral-200)"],
      ["ring-track", "#EBECF0", "Gray track under the progress arc"],
    ],
  },
  {
    title: "Text",
    items: [
      ["text-primary", "#262626", "Timer digits, popup titles, stepper numbers (text-neutral-800)"],
      ["text-strong", "#171717", '"2 completed" counter (text-neutral-900)'],
      ["text-label", "#525252", "Field labels; also icons on gray buttons (text-neutral-600)"],
      ["text-secondary", "#737373", "Ghost buttons, unselected radio pills (text-neutral-500)"],
      ["text-secondary-hover", "#404040", "Ghost buttons on hover (hover:text-neutral-700)"],
      ["text-muted", "#a3a3a3", 'Popup body text, "Round N", "… complete" (text-neutral-400)'],
      ["text-log", "#666666", "Session log lines"],
      ["icon-chevron", "#808080", "Chevrons next to the log toggles"],
      ["text-credit", "#999999", "Credit line"],
    ],
  },
  {
    title: "Secondary buttons",
    items: [
      ["secondary-button-bg", "#e5e5e5", "Reset, Skip, Pause (bg-neutral-200); content is text-label"],
      ["secondary-button-bg-hover", "#d4d4d4", "(hover:bg-neutral-300)"],
      ["stepper-button-bg", "#f5f5f5", "Stepper − / + (bg-neutral-100)"],
      ["stepper-button-bg-hover", "#e5e5e5", "(hover:bg-neutral-200)"],
    ],
  },
  {
    title: "Primary button (CTA)",
    items: [
      ["primary", MODES.work.color, "Same value as Focus color (bg-violet-600)"],
      ["primary-hover", "#6d28d9", "(hover:bg-violet-700)"],
      ["primary-shadow", MODES.work.shadowColor, "Same as Focus shadow, at 35% alpha"],
    ],
  },
  {
    title: "Selected radio pill",
    items: [
      ["selected-ring", "#8b5cf6", "(ring-violet-500)"],
      ["selected-bg", "#f5f3ff", "(bg-violet-50)"],
      ["selected-text", "#6d28d9", "(text-violet-700)"],
      ["unselected-ring", "#e5e5e5", "(ring-neutral-200)"],
    ],
  },
];

const Swatch = ({ name, value, note }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 shrink-0 rounded-xl border border-neutral-200" style={{ backgroundColor: value }} />
    <div className="text-sm">
      <div className="font-medium text-neutral-800">{name}</div>
      <div className="font-mono text-neutral-500">{value}</div>
      {note && <div className="text-xs text-neutral-400">{note}</div>}
    </div>
  </div>
);

function Colors() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-bold text-neutral-800">Modes</div>
        {Object.entries(MODES).map(([key, m]) => (
          <div key={key} className="grid grid-cols-3 gap-3">
            <Swatch name={`${m.label} · color`} value={m.color} note="Mode label, Start/Resume button" />
            <Swatch name={`${m.label} · arcColor`} value={m.arcColor} note="Progress arc and its cap" />
            <Swatch name={`${m.label} · shadowColor`} value={m.shadowColor} note="Ring tip shadow, Start/Resume shadow" />
          </div>
        ))}
      </div>
      {groups.map((g) => (
        <div key={g.title} className="flex flex-col gap-3">
          <div className="text-xl font-bold text-neutral-800">{g.title}</div>
          <div className="grid grid-cols-2 gap-3">
            {g.items.map(([name, value, note]) => <Swatch key={name} name={name} value={value} note={note} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default { title: "Foundations/Colors", component: Colors, parameters: { layout: "padded" } };
export const Palette = {};

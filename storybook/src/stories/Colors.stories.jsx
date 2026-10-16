import React from "react";
import { MODES } from "../tokens";

// Two layers. Primitives are raw values with neutral names (mostly Tailwind's own palette).
// Semantic tokens say what a color is FOR and point at a primitive; components should only
// ever use semantic tokens, so changing e.g. "text-muted" means editing one line.
const primitives = [
  {
    title: "Neutral (Tailwind)",
    items: [
      ["white", "#ffffff"], ["neutral-100", "#f5f5f5"], ["neutral-200", "#e5e5e5"], ["neutral-300", "#d4d4d4"],
      ["neutral-400", "#a3a3a3"], ["neutral-500", "#737373"], ["neutral-600", "#525252"], ["neutral-700", "#404040"],
      ["neutral-900", "#171717"],
    ],
  },
  {
    title: "Violet (Tailwind)",
    items: [["violet-50", "#f5f3ff"], ["violet-500", "#8b5cf6"], ["violet-600", "#7c3aed"], ["violet-700", "#6d28d9"]],
  },
  {
    title: "Custom",
    items: [
      ["gray-track", "#EBECF0"],
      ["violet-light", MODES.work.arcColor], ["violet-shadow", MODES.work.shadowColor],
      ["blue", MODES.break.color], ["blue-light", MODES.break.arcColor], ["blue-dark", MODES.break.shadowColor],
      ["teal", MODES.longBreak.color], ["teal-light", MODES.longBreak.arcColor], ["teal-dark", MODES.longBreak.shadowColor],
    ],
  },
];

const P = Object.fromEntries(primitives.flatMap((g) => g.items));

const semantic = [
  {
    title: "Text",
    items: [
      ["text-primary", "neutral-900", "Timer digits, headings, stepper numbers, counter"],
      ["text-hover", "neutral-700", "Ghost button on hover"],
      ["text-label", "neutral-600", "Field labels; icons on gray buttons"],
      ["text-secondary", "neutral-500", "Ghost buttons, unselected radio pills, log, chevrons"],
      ["text-muted", "neutral-400", 'Popup body, "Round N", "… complete", credit'],
      ["text-on-color", "white", "Text and icons on colored buttons"],
    ],
  },
  {
    title: "Surfaces",
    items: [
      ["bg-page", "white", "Page, popup and completion cards"],
      ["overlay", "white", "Veil behind a popup, at 60% opacity"],
      ["border", "neutral-200", "Card outlines, stepper outline and dividers"],
      ["ring-track", "gray-track", "Track under the progress arc"],
    ],
  },
  {
    title: "Buttons",
    items: [
      ["primary", "violet-600", "Popup CTA (same value as Focus mode-color)"],
      ["primary-hover", "violet-700", "Popup CTA on hover"],
      ["primary-shadow", "violet-shadow", "Popup CTA shadow, at 35%"],
      ["secondary-button-bg", "neutral-200", "Reset, Skip, Pause"],
      ["secondary-button-bg-hover", "neutral-300", ""],
      ["stepper-button-bg", "neutral-100", "Stepper − / +"],
      ["stepper-button-bg-hover", "neutral-200", ""],
    ],
  },
  {
    title: "Radio pill",
    items: [
      ["radio-selected-ring", "violet-500", ""],
      ["radio-selected-bg", "violet-50", ""],
      ["radio-selected-text", "violet-700", ""],
      ["radio-ring", "neutral-200", "Unselected"],
    ],
  },
];

const modeTokens = {
  work: ["violet-600", "violet-light", "violet-shadow"],
  break: ["blue", "blue-light", "blue-dark"],
  longBreak: ["teal", "teal-light", "teal-dark"],
};

const Swatch = ({ name, value, refName, note }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 shrink-0 rounded-xl border border-neutral-200" style={{ backgroundColor: value }} />
    <div className="text-sm">
      <div className="font-medium text-neutral-900">{name}</div>
      <div className="font-mono text-neutral-500">{refName ? `→ ${refName} · ${value}` : value}</div>
      {note && <div className="text-xs text-neutral-400">{note}</div>}
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <div className="text-xl font-bold text-neutral-900">{title}</div>
    {children}
  </div>
);

function Colors({ mode = "work" }) {
  const [main, arc, shadow] = modeTokens[mode];
  return (
    <div className="flex flex-col gap-10 max-w-3xl">
      <div className="flex flex-col gap-6">
        <div className="text-2xl font-bold text-neutral-900">Primitives</div>
        {primitives.map((g) => (
          <Section key={g.title} title={g.title}>
            <div className="grid grid-cols-3 gap-3">
              {g.items.map(([name, value]) => <Swatch key={name} name={name} value={value} />)}
            </div>
          </Section>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-2xl font-bold text-neutral-900">Semantic tokens</div>
        <Section title={`Mode · ${MODES[mode].label} (switch in the Mode toolbar)`}>
          <div className="grid grid-cols-3 gap-3">
            <Swatch name="mode-color" refName={main} value={P[main]} note="Mode label, Start/Resume" />
            <Swatch name="mode-arc" refName={arc} value={P[arc]} note="Progress arc and its cap" />
            <Swatch name="mode-shadow" refName={shadow} value={P[shadow]} note="Ring tip shadow, Start/Resume shadow" />
          </div>
        </Section>
        {semantic.map((g) => (
          <Section key={g.title} title={g.title}>
            <div className="grid grid-cols-2 gap-3">
              {g.items.map(([name, ref, note]) => <Swatch key={name} name={name} refName={ref} value={P[ref]} note={note} />)}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

export default { title: "Foundations/Colors", component: Colors, parameters: { layout: "padded" } };
export const Palette = { render: (_, { globals }) => <Colors mode={globals.mode} /> };

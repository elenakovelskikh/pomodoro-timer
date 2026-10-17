import React from "react";
import { THEME, MODES } from "../tokens";
import { Swatch, Section, Page, primitiveName } from "./foundations";

const notes = {
  text: {
    primary: "Timer digits, headings, numbers, counter",
    label: "Field labels",
    secondary: "Ghost buttons, unselected pills, log, chevrons",
    "secondary-hover": "Ghost buttons on hover",
    muted: 'Popup body, "Round N", "… complete", credit',
    "on-color": "Text and icons on colored buttons",
    "on-secondary": "Icons and text on gray buttons (stepper, Reset, Skip, Pause, Cancel)",
    "on-secondary-hover": "The same on hover",
    "radio-selected": "Selected pill text",
    mode: "Mode label",
  },
  bg: {
    page: "Page, popup and completion cards",
    overlay: "Veil behind an open popup",
    primary: "Popup CTA (same value as the Focus mode color)",
    "primary-hover": "Popup CTA on hover",
    "secondary-button": "Gray buttons: stepper − / +, Reset, Skip, Pause, Cancel",
    "secondary-button-hover": "Gray buttons on hover",
    "radio-selected": "Selected pill",
    mode: "Start / Resume",
    "mode-hover": "Start / Resume on hover",
  },
  border: { subtle: "Cards, stepper outline and dividers" },
  ring: { "radio-selected": "Selected pill outline", radio: "Unselected pill outline" },
  stroke: { "ring-track": "Gray track under the progress arc" },
};

const ref = (value) =>
  value === "var(--mode-color)" ? "→ mode color (Mode toolbar)"
  : value === "var(--mode-color-hover)" ? "→ mode hover color (Mode toolbar)"
  : primitiveName(value) ? `→ ${primitiveName(value)} · ${value}` : value;

const Group = ({ title, prefix, tokens, noteKey }) => (
  <Section title={title}>
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(tokens).map(([name, value]) => (
        <Swatch key={name} name={`${prefix}-${name}`} value={value} sub={ref(value)} note={notes[noteKey][name]} />
      ))}
    </div>
  </Section>
);

function Tokens({ mode }) {
  const m = MODES[mode];
  return (
    <Page
      title="Tokens"
      intro="Semantic tokens: what a color is for. Each one is a Tailwind class (text-secondary, bg-secondary-button, …) pointing at a palette primitive. Mode tokens change with the Mode toolbar."
    >
      <Section title={`Mode · ${m.label}`}>
        <div className="grid grid-cols-2 gap-3">
          <Swatch name="color" value={m.color} sub={ref(m.color)} note="Mode label, Start/Resume (via --mode-color)" />
          <Swatch name="hoverColor" value={m.hoverColor} sub={ref(m.hoverColor)} note="Start/Resume on hover (via --mode-color-hover)" />
          <Swatch name="arcColor" value={m.arcColor} sub={ref(m.arcColor)} note="Progress arc and its cap" />
          <Swatch name="shadowColor" value={m.shadowColor} sub={ref(m.shadowColor)} note="Ring tip shadow, colored button shadows" />
        </div>
      </Section>
      <Group title="Text" prefix="text" tokens={THEME.textColor} noteKey="text" />
      <Group title="Backgrounds" prefix="bg" tokens={THEME.backgroundColor} noteKey="bg" />
      <Group title="Borders" prefix="border" tokens={THEME.borderColor} noteKey="border" />
      <Group title="Rings" prefix="ring" tokens={THEME.ringColor} noteKey="ring" />
      <Group title="Strokes (SVG)" prefix="stroke" tokens={THEME.stroke} noteKey="stroke" />
    </Page>
  );
}

export default { title: "Foundations/Colors/Tokens", component: Tokens, parameters: { layout: "padded" } };
export const Default = { render: (_, { globals }) => <Tokens mode={globals.mode} /> };

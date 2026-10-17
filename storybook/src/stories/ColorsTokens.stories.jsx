import React from "react";
import { THEME, MODES } from "../tokens";
import { Swatch, Section, Page, primitiveName } from "./foundations";

const T = THEME.textColor, B = THEME.backgroundColor, R = THEME.ringColor;

// Each group lists [class, value, where it's used]. Values come straight from design-tokens.js.
const groups = [
  {
    title: "Text",
    subgroups: [
      {
        title: "Content",
        items: [
          ["text-primary", T.primary, 'Timer, headings, the number in the rounds stepper, the "2 completed" count'],
          ["text-secondary", T.secondary, 'Popup body text, "Round N", "… complete", log lines'],
          ["text-muted", T.muted, "Credit line"],
          ["text-label", T.label, 'Labels above controls: "Number of rounds", "Start with", "Long break length"'],
          ["text-mode", T.mode, "Mode label (FOCUS / BREAK / LONG BREAK)"],
        ],
      },
      {
        title: "Clickable elements",
        items: [
          ["text-button-primary", T["button-primary"], "Text and icons on the popup CTA and on Start/Resume"],
          ["text-button-secondary", T["button-secondary"], "Icons and text on gray buttons: stepper, Reset, Skip, Pause, Cancel"],
          ["text-button-secondary-hover", T["button-secondary-hover"], "The same on hover"],
          ["text-button-tertiary", T["button-tertiary"], "Text-only actions, both log toggles and their chevrons, unselected pills"],
          ["text-button-tertiary-hover", T["button-tertiary-hover"], "The same on hover"],
          ["text-radio-selected", T["radio-selected"], "Selected pill"],
        ],
      },
    ],
  },
  {
    title: "Backgrounds",
    subgroups: [
      {
        title: "General",
        items: [
          ["bg-page", B.page, "Page, popup and completion cards"],
          ["bg-overlay", B.overlay, "Veil behind an open popup"],
        ],
      },
      {
        title: "Buttons",
        items: [
          ["bg-button-primary", B["button-primary"], "Popup CTA (same value as the Focus mode color)"],
          ["bg-button-primary-hover", B["button-primary-hover"], "The same on hover"],
          ["bg-button-mode", B["button-mode"], "Start/Resume, in the current mode color"],
          ["bg-button-mode-hover", B["button-mode-hover"], "The same on hover"],
          ["bg-button-secondary", B["button-secondary"], "Gray buttons: stepper, Reset, Skip, Pause, Cancel"],
          ["bg-button-secondary-hover", B["button-secondary-hover"], "The same on hover"],
          ["bg-radio-selected", B["radio-selected"], "Selected pill"],
        ],
      },
    ],
  },
  {
    title: "Borders and outlines",
    intro: "Rings are outlines drawn with box-shadow instead of a border (so they don't change the element's size), but they play the same role.",
    subgroups: [
      {
        items: [
          ["border-subtle", THEME.borderColor.subtle, "Popup and completion cards, stepper outline and dividers"],
          ["ring-radio", R.radio, "Unselected pill"],
          ["ring-radio-hover", R["radio-hover"], "Unselected pill on hover"],
          ["ring-radio-selected", R["radio-selected"], "Selected pill"],
        ],
      },
    ],
  },
  {
    title: "Strokes (SVG)",
    subgroups: [{ items: [["stroke-ring-track", THEME.stroke["ring-track"], "Gray track under the progress arc"]] }],
  },
];

const ref = (value) =>
  value === "var(--mode-color)" ? "→ mode color (Mode toolbar)"
  : value === "var(--mode-color-hover)" ? "→ mode hover color (Mode toolbar)"
  : primitiveName(value) ? `→ ${primitiveName(value)} · ${value}` : value;

function Tokens({ mode }) {
  const m = MODES[mode];
  return (
    <Page
      title="Tokens"
      intro="Semantic tokens: what a color is for. Each one is a Tailwind class pointing at a palette primitive. Mode tokens change with the Mode toolbar."
    >
      <Section title={`Mode · ${m.label}`}>
        <div className="grid grid-cols-2 gap-3">
          <Swatch name="color" value={m.color} sub={ref(m.color)} note="Mode label, Start/Resume (via --mode-color)" />
          <Swatch name="hoverColor" value={m.hoverColor} sub={ref(m.hoverColor)} note="Start/Resume on hover (via --mode-color-hover)" />
          <Swatch name="arcColor" value={m.arcColor} sub={ref(m.arcColor)} note="Progress arc and its cap" />
          <Swatch name="shadowColor" value={m.shadowColor} sub={ref(m.shadowColor)} note="Ring tip shadow, colored button shadows" />
        </div>
      </Section>
      {groups.map((g) => (
        <Section key={g.title} title={g.title}>
          {g.intro && <div className="text-body text-secondary max-w-xl">{g.intro}</div>}
          {g.subgroups.map((sg, i) => (
            <div key={i} className="flex flex-col gap-3">
              {sg.title && <div className="text-control text-label">{sg.title}</div>}
              <div className="grid grid-cols-2 gap-3">
                {sg.items.map(([name, value, note]) => <Swatch key={name} name={name} value={value} sub={ref(value)} note={note} />)}
              </div>
            </div>
          ))}
        </Section>
      ))}
    </Page>
  );
}

export default { title: "Foundations/Colors/Tokens", component: Tokens, parameters: { layout: "padded" } };
export const Default = { render: (_, { globals }) => <Tokens mode={globals.mode} /> };

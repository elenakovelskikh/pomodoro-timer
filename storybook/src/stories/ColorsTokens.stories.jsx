import React from "react";
import { THEME } from "../tokens";
import { Swatch, Section, Page, primitiveName } from "./foundations";

const T = THEME.textColor, B = THEME.backgroundColor, R = THEME.ringColor;
const hover = (name, value) => [name, value, "On hover"];

// Each row is [default, hover?]: defaults on the left, their hover state on the right.
const groups = [
  {
    title: "Text",
    subgroups: [
      {
        title: "Content",
        rows: [
          [["text-primary", T.primary, "Main text"]],
          [["text-secondary", T.secondary, "Secondary text"]],
          [["text-muted", T.muted, "Least important text"]],
          [["text-label", T.label, "Control labels"]],
          [["text-mode", T.mode, "Mode label"]],
        ],
      },
      {
        title: "Clickable elements",
        rows: [
          [["text-button-primary", T["button-primary"], "Primary and mode buttons"]],
          [["text-button-secondary", T["button-secondary"], "Secondary buttons"], hover("text-button-secondary-hover", T["button-secondary-hover"])],
          [["text-button-tertiary", T["button-tertiary"], "Tertiary buttons and radio options"], hover("text-button-tertiary-hover", T["button-tertiary-hover"])],
          [["text-radio-selected", T["radio-selected"], "Selected radio option"]],
        ],
      },
    ],
  },
  {
    title: "Backgrounds",
    subgroups: [
      {
        title: "General",
        rows: [
          [["bg-page", B.page, "Page and cards"]],
          [["bg-overlay", B.overlay, "Behind popups"]],
        ],
      },
      {
        title: "Buttons",
        rows: [
          [["bg-button-primary", B["button-primary"], "Primary button"], hover("bg-button-primary-hover", B["button-primary-hover"])],
          [["bg-button-mode", B["button-mode"], "Mode button"], hover("bg-button-mode-hover", B["button-mode-hover"])],
          [["bg-button-secondary", B["button-secondary"], "Secondary buttons"], hover("bg-button-secondary-hover", B["button-secondary-hover"])],
          [["bg-radio-selected", B["radio-selected"], "Selected radio option"]],
        ],
      },
    ],
  },
  {
    title: "Borders and outlines",
    subgroups: [
      {
        rows: [
          [["border-subtle", THEME.borderColor.subtle, "Cards and control outlines"]],
          [["ring-radio", R.radio, "Radio option"], hover("ring-radio-hover", R["radio-hover"])],
          [["ring-radio-selected", R["radio-selected"], "Selected radio option"]],
        ],
      },
    ],
  },
  {
    title: "Strokes",
    subgroups: [{ rows: [[["stroke-ring-track", THEME.stroke["ring-track"], "Timer ring track"]]] }],
  },
];

const ref = (value) =>
  value === "var(--mode-accent)" ? "→ accent of the current mode"
  : value === "var(--mode-accent-hover)" ? "→ accentHover of the current mode"
  : primitiveName(value) ? `→ ${primitiveName(value)} · ${value}` : value;

const Rows = ({ rows }) => (
  <div className="grid grid-cols-2 gap-x-3 gap-y-4">
    {rows.flatMap((row, i) => [
      <Swatch key={`${i}a`} name={row[0][0]} value={row[0][1]} sub={ref(row[0][1])} note={row[0][2]} />,
      row[1] ? <Swatch key={`${i}b`} name={row[1][0]} value={row[1][1]} sub={ref(row[1][1])} note={row[1][2]} /> : <div key={`${i}b`} />,
    ])}
  </div>
);

function Tokens() {
  return (
    <Page title="Tokens" intro="What each color is for. Each token is a class whose value comes from the palette. Mode tokens take their color from the current mode (see Modes).">
      {groups.map((g) => (
        <Section key={g.title} title={g.title}>
          {g.subgroups.map((sg, i) => (
            <div key={i} className={`flex flex-col gap-3 ${i ? "mt-3" : ""}`}>
              {sg.title && <div className="type-button text-primary">{sg.title}</div>}
              <Rows rows={sg.rows} />
            </div>
          ))}
        </Section>
      ))}
    </Page>
  );
}

export default { title: "Foundations/Colors/Tokens", component: Tokens, parameters: { layout: "padded" } };
export const Default = { name: "Tokens" };

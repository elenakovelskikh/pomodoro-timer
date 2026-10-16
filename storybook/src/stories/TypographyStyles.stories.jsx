import React from "react";
import { THEME } from "../tokens";
import { Page, toPx } from "./foundations";

// Class names are written out in full (not built from the token name) so Tailwind can find them.
const styles = [
  ["display", "text-display tabular-nums text-primary", "24:59", "Timer"],
  ["emoji", "text-emoji", "📚💻✍️", "Mode emoji"],
  ["heading", "text-heading text-primary", "Automatic Pomodoro Focus Timer", "Popup title, completion heading"],
  ["mode-label", "text-mode-label uppercase text-mode", "Focus", "Mode label (uppercase, mode color)"],
  ["number", "text-number tabular-nums text-primary", "4", "Stepper value, completed counter"],
  ["button", "text-button text-primary", "Add 4 rounds", "Primary button"],
  ["control", "text-control text-secondary", "Switch to long break", "Ghost buttons, radio pills, field labels"],
  ["body", "text-body text-muted", "Start once: 25-minute focus rounds and 5-minute breaks switch automatically.", "Popup text, \"Round N\", \"… complete\""],
  ["unit", "text-unit text-primary", "rounds", "\"rounds\", \"completed\""],
  ["caption", "text-caption text-secondary", null, "Log lines (time in mono)"],
  ["credit", "text-credit text-muted", "Made by Elena Kovelskikh", "Credit line"],
];

const spec = (key) => {
  const [size, o] = THEME.fontSize[key];
  const lh = o.lineHeight.endsWith("rem") ? `${o.lineHeight} (${toPx(o.lineHeight)})` : `× ${o.lineHeight}`;
  return [`${size} (${toPx(size)})`, `line ${lh}`, `weight ${o.fontWeight ?? 400}`, o.letterSpacing && `tracking ${o.letterSpacing}`].filter(Boolean).join(" · ");
};

function TextStyles() {
  return (
    <Page title="Text styles" intro="Semantic styles, largest first. Each is one Tailwind class (text-heading, text-control, …) that sets size, line height and weight together; color is a separate class.">
      <div className="flex flex-col">
        {styles.map(([key, cls, sample, use]) => (
          <div key={key} className="flex flex-col gap-1 border-b border-subtle py-4">
            <div className="text-caption text-muted">
              <span className="text-control text-label">text-{key}</span> · {use} · <span className="font-mono">{spec(key)}</span>
            </div>
            <div className={cls}>
              {sample ?? (
                <span className="flex">
                  <span className="inline-block w-20">focus</span>
                  <span className="font-mono">10:00 – 10:25</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default { title: "Foundations/Typography/Text styles", component: TextStyles, parameters: { layout: "padded" } };
export const Default = {};

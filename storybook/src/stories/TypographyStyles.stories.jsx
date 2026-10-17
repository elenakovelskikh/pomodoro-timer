import React from "react";
import { THEME } from "../tokens";
import { Page, toPx } from "./foundations";

// Class names are written out in full (not built from the token name) so Tailwind can find them.
const styles = [
  ["display", "text-display tabular-nums text-primary", "24:59", "Timer"],
  ["emoji", "text-emoji", "📚💻✍️", "Emoji"],
  ["heading", "text-heading text-primary", "Automatic Pomodoro Focus Timer", "Headings"],
  ["mode-label", "text-mode-label uppercase text-mode", "Focus", "Mode label"],
  ["number", "text-number tabular-nums text-primary", "4", "Numbers"],
  ["button", "text-button text-primary", "Add 4 rounds", "Buttons"],
  ["control", "text-control text-button-tertiary", "Switch to long break", "Labels and small controls"],
  ["body", "text-body text-secondary", "Start once: 25-minute focus rounds and 5-minute breaks switch automatically.", "Body text"],
  ["unit", "text-unit text-primary", "rounds", "Units next to numbers"],
  ["caption", "text-caption text-secondary", null, "Captions"],
  ["credit", "text-credit text-muted", "Made by Elena Kovelskikh", "Footer"],
];

const spec = (key) => {
  const [size, o] = THEME.fontSize[key];
  const lh = o.lineHeight.endsWith("rem") ? `${o.lineHeight} (${toPx(o.lineHeight)})` : `× ${o.lineHeight}`;
  return [`${size} (${toPx(size)})`, `line ${lh}`, `weight ${o.fontWeight ?? 400}`, o.letterSpacing && `tracking ${o.letterSpacing}`].filter(Boolean).join(" · ");
};

function TextStyles() {
  return (
    <Page title="Text styles" intro="Text styles, largest first. Each class sets size, line height and weight together; color is set separately.">
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

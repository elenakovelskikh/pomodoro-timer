import React from "react";
import { TYPE } from "../tokens";
import { Page } from "./foundations";

// Class names are written out in full so Tailwind can find them. All samples share one color:
// color is set separately from the text style.
const styles = [
  ["type-display", "display", "24:59"],
  ["type-heading", "heading", "Add more rounds"],
  ["type-mode-label uppercase", "mode-label", "Focus"],
  ["type-button", "button", "Add 4 rounds"],
  ["type-control", "control", "Number of rounds"],
  ["type-body", "body", "Start once: 25-minute focus rounds and 5-minute breaks switch automatically."],
  ["type-caption", "caption", "focus  10:00 – 10:25"],
  ["type-credit", "credit", "Made by Elena Kovelskikh"],
];

const WEIGHT_NAMES = { 400: "Regular", 500: "Medium", 700: "Bold" };
const spec = (key) => {
  const s = TYPE[key];
  const size = parseFloat(s.fontSize) * 16;
  return [`${size} / ${s.lineHeight.endsWith("rem") ? parseFloat(s.lineHeight) * 16 : size * parseFloat(s.lineHeight)}`, WEIGHT_NAMES[s.fontWeight], s.letterSpacing && `+${s.letterSpacing}`].filter(Boolean).join(" · ");
};

function TextStyles() {
  return (
    <Page title="Text styles" intro="Largest first. Each class sets size, line height and weight; color is set separately. Line height is 125% for headings and 145% for running text, rounded down to whole pixels.">
      <div className="flex flex-col">
        {styles.map(([cls, key, sample]) => (
          <div key={key} className="grid grid-cols-[10rem_1fr] items-baseline gap-6 border-b border-subtle py-4">
            <div>
              <div className="type-control text-primary">type-{key}</div>
              <div className="type-caption text-secondary font-mono">{spec(key)}</div>
            </div>
            <div className={`${cls} text-primary`}>{sample}</div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default { title: "Foundations/Typography/Text styles", component: TextStyles, parameters: { layout: "padded" } };
export const Default = { name: "Text styles" };

// Storybook controls can't hold `null` in a select, so the rounds picker uses readable keys
// ("∞", "1" … "16") and `mapping` turns each key into the real value for the component.
export const ROUND_KEYS = ["∞", ...Array.from({ length: 16 }, (_, i) => String(i + 1))];
export function roundsArg(description) {
  return {
    control: "select",
    options: ROUND_KEYS,
    mapping: Object.fromEntries(ROUND_KEYS.map((k) => [k, k === "∞" ? null : Number(k)])),
    description,
    table: { type: { summary: "number | null" } },
  };
}

// Timer mode as a regular control; the preview decorator turns it into the mode CSS variables.
export const modeArg = {
  control: { type: "inline-radio", labels: { focus: "Focus", break: "Break", longBreak: "Long break" } },
  options: ["focus", "break", "longBreak"],
  description: "Timer mode",
  table: { type: { summary: '"focus" | "break" | "longBreak"' }, defaultValue: { summary: '"focus"' } },
};

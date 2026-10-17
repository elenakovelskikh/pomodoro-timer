// Storybook controls can't hold `null` or arbitrary objects in a select, so pickers use readable
// keys ("∞", "30 min", "Break") and `mapping` turns each key into the real value for the component.
export function optionsArg(options, description, summary) {
  return {
    control: "select",
    options: options.map((o) => o.label),
    mapping: Object.fromEntries(options.map((o) => [o.label, o.value])),
    description,
    table: { type: { summary } },
  };
}
export const keyForOption = (options, value) => options.find((o) => o.value === value)?.label;

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
export const keyForRounds = (value) => (value === null ? "∞" : String(value));

// Timer mode as a regular control; the preview decorator turns it into the mode CSS variables.
export const modeArg = {
  control: { type: "inline-radio", labels: { focus: "Focus", break: "Break", longBreak: "Long break" } },
  options: ["focus", "break", "longBreak"],
  description: "Timer mode",
  table: { type: { summary: '"focus" | "break" | "longBreak"' }, defaultValue: { summary: '"focus"' } },
};

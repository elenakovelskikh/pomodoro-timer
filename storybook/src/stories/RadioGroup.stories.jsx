import { useArgs } from "storybook/preview-api";
import { RadioGroup } from "../components/RadioGroup";
import { LONG_BREAK_OPTIONS, START_WITH_OPTIONS } from "../tokens";
import { optionsArg, keyForOption } from "./argHelpers";

const common = {
  label: { control: "text", description: "Text above the pills; also the group's accessible name", table: { type: { summary: "string" } } },
  options: { control: false, description: "The pills: `{ value, label }[]`", table: { type: { summary: "{ value: any, label: string }[]" } } },
  onChange: { control: false, description: "Called with the new value (click or arrow keys)", table: { type: { summary: "(value) => void" } } },
  pillClassName: { control: "text", description: "Size/padding classes for each pill", table: { type: { summary: "string" } } },
};

// Clicking a pill writes the choice back into the args, so the Control and the pills stay in sync.
function render(args) {
  const [, updateArgs] = useArgs();
  return <RadioGroup {...args} onChange={(v) => updateArgs({ value: keyForOption(args.options, v) })} />;
}

export default { title: "Components/RadioGroup", component: RadioGroup, tags: ["autodocs"], render };

export const LongBreakLength = {
  args: { label: "Long break length", options: LONG_BREAK_OPTIONS, value: "30 min", pillClassName: "px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap" },
  argTypes: { ...common, value: optionsArg(LONG_BREAK_OPTIONS, "Selected pill", "15 | 30 | null") },
};

export const StartWith = {
  args: { label: "Start with", options: START_WITH_OPTIONS, value: "Break", pillClassName: "px-6 py-3 rounded-xl text-sm font-medium" },
  argTypes: { ...common, value: optionsArg(START_WITH_OPTIONS, "Selected pill", "boolean (true = Break)") },
};

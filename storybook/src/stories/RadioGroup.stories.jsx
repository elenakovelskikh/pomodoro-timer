import { useState } from "react";
import { RadioGroup } from "../components/RadioGroup";
import { LONG_BREAK_OPTIONS, START_WITH_OPTIONS } from "../tokens";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Text above the pills; also the group's accessible name", table: { type: { summary: "string" } } },
    options: { description: "The pills: `{ value, label }[]`", table: { type: { summary: "{ value: any, label: string }[]" } } },
    value: { description: "Value of the selected pill", table: { type: { summary: "any" } } },
    onChange: { description: "Called with the new value (click or arrow keys)", table: { type: { summary: "(value) => void" } } },
    pillClassName: { description: "Size/padding classes for each pill", table: { type: { summary: "string" } } },
  },
};

function Stateful({ initial, ...props }) {
  const [value, setValue] = useState(initial);
  return <RadioGroup {...props} value={value} onChange={setValue} />;
}

export const LongBreakLength = {
  render: () => (
    <Stateful label="Long break length" options={LONG_BREAK_OPTIONS} initial={30} pillClassName="px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap" />
  ),
};
export const StartWith = {
  render: () => (
    <Stateful label="Start with" options={START_WITH_OPTIONS} initial={true} pillClassName="px-6 py-3 rounded-xl text-sm font-medium" />
  ),
};

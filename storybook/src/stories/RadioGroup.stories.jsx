import { useArgs } from "storybook/preview-api";
import { RadioGroup } from "../components/RadioGroup";

// One generic story: the real groups ("Long break length", "Start with") live in the popup
// stories. optionCount is a story-only control — the component itself just takes `options`.
const makeOptions = (n) => Array.from({ length: n }, (_, i) => ({ value: i + 1, label: `Option ${i + 1}` }));

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Text above the pills; also the group's accessible name", table: { type: { summary: "string" } } },
    optionCount: { control: { type: "range", min: 2, max: 5, step: 1 }, description: "Story only: how many pills to show", table: { category: "Story" } },
    value: { control: { type: "number", min: 1, max: 5 }, description: "Value of the selected pill", table: { type: { summary: "any" } } },
    options: { control: false, description: "The pills: `{ value, label }[]`", table: { type: { summary: "{ value: any, label: string }[]" } } },
    onChange: { control: false, description: "Called with the new value (click or arrow keys)", table: { type: { summary: "(value) => void" } } },
  },
  args: { label: "Label", optionCount: 3, value: 1 },
  render: function Render({ optionCount, ...args }) {
    const [, updateArgs] = useArgs();
    return <RadioGroup {...args} options={makeOptions(optionCount)} onChange={(v) => updateArgs({ value: v })} />;
  },
};

export const Default = {};

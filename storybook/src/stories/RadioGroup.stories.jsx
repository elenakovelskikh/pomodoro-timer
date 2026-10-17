import { useArgs } from "storybook/preview-api";
import { RadioGroup } from "../components/RadioGroup";

// One generic story with placeholder options. optionCount is a story-only control — the
// component itself just takes `options`.
const makeOptions = (n) => Array.from({ length: n }, (_, i) => ({ value: i + 1, label: `Option ${i + 1}` }));

export default {
  title: "Components/RadioGroup",
  parameters: { docs: { description: { component: "One choice out of a few options, shown as pills. Arrow keys move the selection." } } },
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Group label", table: { type: { summary: "string" } } },
    optionCount: { control: { type: "range", min: 2, max: 5, step: 1 }, description: "Number of options (preview only)", table: { category: "Story" } },
    value: { control: { type: "number", min: 1, max: 5 }, description: "Selected option", table: { type: { summary: "any" } } },
    options: { control: false, description: "Value and text of each option", table: { type: { summary: "{ value: any, label: string }[]" } } },
    onChange: { control: false, description: "Called with the new value", table: { type: { summary: "(value) => void" } } },
  },
  args: { label: "Label", optionCount: 3, value: 1 },
  render: function Render({ optionCount, ...args }) {
    const [, updateArgs] = useArgs();
    return <RadioGroup {...args} options={makeOptions(optionCount)} onChange={(v) => updateArgs({ value: v })} />;
  },
};

export const Default = {};

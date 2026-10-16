import { PrimaryButton } from "../components/PrimaryButton";
import { GhostButton } from "../components/GhostButton";

export default { title: "Components/Buttons", tags: ["autodocs"], parameters: { layout: "padded" } };

const textArg = { control: "text", description: "Button text", table: { type: { summary: "string" }, defaultValue: { summary: '"Button"' } } };
const clickArg = { action: "click", description: "Called on click", table: { type: { summary: "() => void" } } };

export const Primary = {
  render: ({ children, ...args }) => <div className="w-72"><PrimaryButton {...args}>{children}</PrimaryButton></div>,
  args: { children: "Button" },
  argTypes: { children: textArg, onClick: clickArg },
};

export const Ghost = {
  render: ({ children, ...args }) => <div className="w-72 flex justify-center"><GhostButton {...args}>{children}</GhostButton></div>,
  args: { children: "Button", fullWidth: false, disabled: false },
  argTypes: {
    children: textArg,
    fullWidth: { control: "boolean", description: "Stretch to the container width (e.g. Cancel in a popup) instead of hugging the text", table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } } },
    disabled: { control: "boolean", description: "Grayed out and not clickable", table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } } },
    onClick: clickArg,
  },
};

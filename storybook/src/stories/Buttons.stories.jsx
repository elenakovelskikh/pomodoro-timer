import { PrimaryButton } from "../components/PrimaryButton";
import { GhostButton } from "../components/GhostButton";
import { SecondaryButton } from "../components/SecondaryButton";

export default { title: "Components/Buttons", tags: ["autodocs"], parameters: { layout: "padded" } };

const textArg = { control: "text", description: "Button text", table: { type: { summary: "string" }, defaultValue: { summary: '"Button"' } } };
const clickArg = { action: "click", description: "Click handler", table: { type: { summary: "() => void" } } };

export const Primary = {
  render: ({ children, ...args }) => <div className="w-72"><PrimaryButton {...args}>{children}</PrimaryButton></div>,
  args: { children: "Button" },
  argTypes: { children: textArg, onClick: clickArg },
};

export const Secondary = {
  render: ({ children, ...args }) => <div className="w-72"><SecondaryButton {...args}>{children}</SecondaryButton></div>,
  args: { children: "Button" },
  argTypes: { children: textArg, onClick: clickArg },
};

export const Ghost = {
  render: ({ children, ...args }) => <div className="w-72 flex justify-center"><GhostButton {...args}>{children}</GhostButton></div>,
  args: { children: "Button", fullWidth: false, disabled: false },
  argTypes: {
    children: textArg,
    fullWidth: { control: "boolean", description: "Fill the container width", table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } } },
    disabled: { control: "boolean", description: "Not clickable", table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } } },
    onClick: clickArg,
  },
};

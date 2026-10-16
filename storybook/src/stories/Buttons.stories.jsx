import { PrimaryButton } from "../components/PrimaryButton";
import { TextButton } from "../components/TextButton";

export default { title: "Components/Buttons", tags: ["autodocs"], parameters: { layout: "padded" } };

export const Primary = {
  render: (args) => <div className="w-72"><PrimaryButton {...args}>Add 4 rounds</PrimaryButton></div>,
  argTypes: { onClick: { action: "click" } },
};
export const Text = {
  render: (args) => <TextButton {...args}>Switch to long break</TextButton>,
  argTypes: { onClick: { action: "click" }, disabled: { control: "boolean" } },
  args: { disabled: false },
};
export const TextWide = {
  render: (args) => <div className="w-72"><TextButton wide {...args}>Cancel</TextButton></div>,
  argTypes: { onClick: { action: "click" } },
};

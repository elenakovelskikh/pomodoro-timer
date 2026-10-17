import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  // an 18rem container for primary and secondary to fill, as they would in a popup; not part of the component
  decorators: [(Story) => <div style={{ width: "18rem", display: "flex", justifyContent: "center" }}><Story /></div>],
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "tertiary"], description: "Button level", table: { type: { summary: '"primary" | "secondary" | "tertiary"' }, defaultValue: { summary: '"primary"' } } },
    children: { control: "text", description: "Button text", table: { type: { summary: "string" } } },
    disabled: { control: "boolean", description: "Not clickable", table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } } },
    onClick: { action: "click", description: "Click handler", table: { type: { summary: "() => void" } } },
  },
  args: { variant: "primary", children: "Button", disabled: false },
};

export const Primary = {};
export const Secondary = { args: { variant: "secondary" } };
export const Tertiary = { args: { variant: "tertiary" } };

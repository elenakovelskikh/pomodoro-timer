import { Credit } from "../components/Credit";

export default {
  title: "Components/Credit",
  component: Credit,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    inert: { control: "boolean", description: "Not focusable or clickable (while a popup is open)", table: { type: { summary: "boolean" } } },
  },
  args: { inert: false },
};

export const Default = {};

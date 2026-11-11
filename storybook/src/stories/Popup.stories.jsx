import { useArgs } from "storybook/preview-api";
import { Popup } from "../components/Popup";
import { RoundsStepper } from "../components/RoundsStepper";

export default {
  title: "Components/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Card over the page: a title, optional text, controls and one or two buttons." } } },
};

// the CTA text follows the stepper, as in the app
const ctaLabel = (n) => (n === null ? "Continue without a limit" : n === 1 ? "Add 1 round" : `Add ${n} rounds`);

const action = (name, description) => ({ action: name, control: false, description, table: { type: { summary: "() => void" } } });

export const Default = {
  args: { title: "Add more rounds", description: "", primaryLabel: "Add 4 rounds", secondaryLabel: "Cancel", enterHint: "Press Enter to add the rounds.", inline: true, rounds: 4 },
  argTypes: {
    title: { control: "text", description: "Heading (optional)", table: { type: { summary: "string" } } },
    description: { control: "text", description: "Text under the heading (optional)", table: { type: { summary: "ReactNode" } } },
    enterHint: { control: "text", description: "Screen reader hint: Enter runs the primary button (optional)", table: { type: { summary: "string" } } },
    children: { control: false, description: "Controls inside the popup", table: { type: { summary: "ReactNode" } } },
    primaryLabel: { control: "text", description: "Primary button text", table: { type: { summary: "string" } } },
    onPrimary: action("primary", "Primary button click"),
    secondaryLabel: { control: "text", description: "Secondary button text (optional)", table: { type: { summary: "string" } } },
    onSecondary: action("secondary", "Secondary button click"),
    buttons: { control: "inline-radio", options: ["default", "confirm"], description: "default: secondary on the left hugging its text, primary taking the rest; confirm: primary (Cancel) left, secondary right, both as wide as their text", table: { type: { summary: '"default" | "confirm"' }, defaultValue: { summary: '"default"' } } },
    inline: { control: false, description: "Show without the backdrop (preview only)", table: { type: { summary: "boolean" } } },
    rounds: { table: { disable: true } },
  },
  // the stepper inside is live, like in the app
  render: function Render({ rounds, ...args }) {
    const [, updateArgs] = useArgs();
    return (
      <Popup {...args}>
        <RoundsStepper label="Number of rounds" value={rounds} onChange={(v) => updateArgs({ rounds: v, primaryLabel: ctaLabel(v) })} />
      </Popup>
    );
  },
};

export const Confirm = {
  name: "Are you sure…?",
  args: {
    title: "Set up new session",
    description: "Are you sure you want to set up a new session? The session log will be deleted, and this can't be undone.",
    primaryLabel: "Cancel",
    secondaryLabel: "Yes, set up new session",
    buttons: "confirm",
    inline: true,
  },
  parameters: { docs: { description: { story: "Confirmation before something that can't be undone. Cancel is the primary button; on narrow screens the two stack, Cancel on top." } } },
  render: (args) => <Popup {...args} />,
};

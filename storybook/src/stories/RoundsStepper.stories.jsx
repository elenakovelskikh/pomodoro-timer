import { useArgs } from "storybook/preview-api";
import { RoundsStepper } from "../components/RoundsStepper";
import { roundsArg, keyForRounds } from "./argHelpers";

function render(args) {
  const [, updateArgs] = useArgs();
  return <RoundsStepper {...args} onChange={(v) => updateArgs({ value: keyForRounds(v) })} />;
}

export default {
  title: "Components/RoundsStepper",
  component: RoundsStepper,
  tags: ["autodocs"],
  render,
  argTypes: {
    label: { control: "text", description: "Text above the stepper", table: { type: { summary: "string" } } },
    value: roundsArg("Number of rounds 1–16, or ∞ (null) for no limit"),
    onChange: { control: false, description: "Called with the new value. Minus from 1 goes to ∞, plus from ∞ goes to 1", table: { type: { summary: "(value: number | null) => void" } } },
  },
  args: { label: "Number of rounds", value: "∞" },
};

// The three edge states the stepper has to handle:
export const Unlimited = { parameters: { docs: { description: { story: "∞, no unit label, minus disabled." } } } };
export const SingleRound = { args: { value: "1" }, parameters: { docs: { description: { story: 'Singular "round"; minus goes back to ∞.' } } } };
export const Maximum = { args: { value: "16" }, parameters: { docs: { description: { story: "16 is the cap, plus disabled." } } } };

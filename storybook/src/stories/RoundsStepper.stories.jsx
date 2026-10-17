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
    label: { control: "text", description: "Label", table: { type: { summary: "string" } } },
    value: roundsArg("Number of rounds, or ∞ for no limit"),
    onChange: { control: false, description: "Called with the new value", table: { type: { summary: "(value: number | null) => void" } } },
  },
  args: { label: "Number of rounds", value: "∞" },
};

// The three edge states the stepper has to handle:
export const Unlimited = { parameters: { docs: { description: { story: "No limit; minus is disabled." } } } };
export const SingleRound = { args: { value: "1" }, parameters: { docs: { description: { story: "One round." } } } };
export const Maximum = { args: { value: "16" }, parameters: { docs: { description: { story: "Upper limit; plus is disabled." } } } };

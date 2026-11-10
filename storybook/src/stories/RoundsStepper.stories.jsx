import { Live } from "./Live";
import { RoundsStepper } from "../components/RoundsStepper";
import { roundsArg } from "./argHelpers";

const render = (args) => (
  <Live value={args.value}>{(value, setValue) => <RoundsStepper {...args} value={value} onChange={setValue} />}</Live>
);

export default {
  title: "Components/RoundsStepper",
  parameters: { docs: { description: { component: "Number of rounds, from 1 to 16 or no limit (∞). The values go round in a loop, so neither button is ever disabled." } } },
  component: RoundsStepper,
  tags: ["autodocs"],
  render,
  argTypes: {
    label: { control: "text", description: "Label above the stepper", table: { type: { summary: "string" } } },
    value: roundsArg("Number of rounds, or ∞ for no limit"),
    onChange: { control: false, description: "Called with the new value", table: { type: { summary: "(value: number | null) => void" } } },
  },
  args: { label: "Label", value: "∞" },
};

// The edges of the loop:
export const Unlimited = { parameters: { docs: { description: { story: "No limit (the default). Plus starts over from 1, minus gives 16." } } } };
export const SingleRound = { args: { value: "1" }, parameters: { docs: { description: { story: "One round: the unit is singular." } } } };
export const Maximum = { args: { value: "16" }, parameters: { docs: { description: { story: "The highest number. Plus gives no limit (∞)." } } } };

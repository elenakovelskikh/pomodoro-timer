import { useLiveArg } from "./liveArg";
import { RoundsStepper } from "../components/RoundsStepper";
import { roundsArg, keyForRounds } from "./argHelpers";

function render(args) {
  const [value, setValue] = useLiveArg(args, "value", keyForRounds);
  return <RoundsStepper {...args} value={value} onChange={setValue} />;
}

export default {
  title: "Components/RoundsStepper",
  parameters: { docs: { description: { component: "Number of rounds, from 1 to 16 or no limit (∞)." } } },
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

// The three edge states the stepper has to handle:
export const Unlimited = { parameters: { docs: { description: { story: "No limit; minus is disabled." } } } };
export const SingleRound = { args: { value: "1" }, parameters: { docs: { description: { story: "One round: the unit is singular." } } } };
export const Maximum = { args: { value: "16" }, parameters: { docs: { description: { story: "Upper limit; plus is disabled." } } } };

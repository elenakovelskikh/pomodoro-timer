import { useState } from "react";
import { RoundsStepper } from "../components/RoundsStepper";

export default {
  title: "Components/RoundsStepper",
  component: RoundsStepper,
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Text above the stepper", table: { type: { summary: "string" } } },
    value: { description: "Number of rounds 1–16, or `null` for no limit (∞)", table: { type: { summary: "number | null" } } },
    onChange: { description: "Called with the new value. Minus from 1 goes to ∞, plus from ∞ goes to 1", table: { type: { summary: "(value: number | null) => void" } } },
  },
};

function Stateful({ initial }) {
  const [value, setValue] = useState(initial);
  return <RoundsStepper value={value} onChange={setValue} />;
}

// The three edge states the stepper has to handle:
export const Unlimited = { render: () => <Stateful initial={null} />, parameters: { docs: { description: { story: "∞, no unit label, minus disabled." } } } };
export const SingleRound = { render: () => <Stateful initial={1} />, parameters: { docs: { description: { story: 'Singular "round"; minus goes back to ∞.' } } } };
export const Maximum = { render: () => <Stateful initial={16} />, parameters: { docs: { description: { story: "16 is the cap, plus disabled." } } } };

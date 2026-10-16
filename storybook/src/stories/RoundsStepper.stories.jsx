import { useState } from "react";
import { RoundsStepper } from "../components/RoundsStepper";

export default { title: "Components/RoundsStepper", component: RoundsStepper, tags: ["autodocs"] };

function Stateful({ initial }) {
  const [value, setValue] = useState(initial);
  return <RoundsStepper value={value} onChange={setValue} />;
}

export const Unlimited = { render: () => <Stateful initial={null} /> };
export const FourRounds = { render: () => <Stateful initial={4} /> };
export const OneRound = { render: () => <Stateful initial={1} /> };

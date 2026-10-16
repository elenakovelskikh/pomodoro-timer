import { useState } from "react";
import { SetupPopup, AddRoundsPopup } from "../components/Popups";

export default { title: "Components/Popups", parameters: { layout: "padded" } };

export const Setup = {
  render: () => {
    const [rounds, setRounds] = useState(null);
    const [lb, setLb] = useState(30);
    return <SetupPopup inline roundsLimit={rounds} onRoundsChange={setRounds} longBreakMinutes={lb} onLongBreakChange={setLb} />;
  },
};

export const AddRounds = {
  render: () => {
    const [amount, setAmount] = useState(4);
    const [br, setBr] = useState(true);
    const [lb, setLb] = useState(30);
    return (
      <AddRoundsPopup
        inline amount={amount} onAmountChange={setAmount}
        startsWithBreak={br} onStartsWithBreakChange={setBr}
        longBreakMinutes={lb} onLongBreakChange={setLb}
      />
    );
  },
};

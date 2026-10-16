import { useState } from "react";
import { Popup, SetupPopup, AddRoundsPopup } from "../components/Popups";
import { RoundsStepper } from "../components/RoundsStepper";

export default {
  title: "Components/Popups",
  component: Popup,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    title: { control: "text", description: "Optional heading", table: { type: { summary: "string" } } },
    description: { control: "text", description: "Optional text under the heading", table: { type: { summary: "ReactNode" } } },
    children: { control: false, description: "Optional controls between the text and the buttons", table: { type: { summary: "ReactNode" } } },
    primaryLabel: { control: "text", description: "Required primary (violet) button", table: { type: { summary: "string" } } },
    onPrimary: { action: "primary", table: { type: { summary: "() => void" } } },
    secondaryLabel: { control: "text", description: "Optional ghost button under the primary one; leave empty to hide it", table: { type: { summary: "string" } } },
    onSecondary: { action: "secondary", table: { type: { summary: "() => void" } } },
    inline: { control: false, description: "Render just the card, without the fullscreen veil", table: { type: { summary: "boolean" } } },
  },
};

export const Default = {
  args: { title: "Title", description: "Text", primaryLabel: "Button", secondaryLabel: "Button", inline: true },
  render: (args) => (
    <Popup {...args}>
      <RoundsStepper label="Control" value={4} />
    </Popup>
  ),
};

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

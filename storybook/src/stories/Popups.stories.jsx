import { useArgs } from "storybook/preview-api";
import { Popup, SetupPopup, AddRoundsPopup } from "../components/Popups";
import { RoundsStepper } from "../components/RoundsStepper";
import { LONG_BREAK_OPTIONS, START_WITH_OPTIONS } from "../tokens";
import { optionsArg, keyForOption, roundsArg, keyForRounds } from "./argHelpers";

export default {
  title: "Components/Popups",
  component: Popup,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

const action = (name) => ({ action: name, control: false, table: { type: { summary: "() => void" } } });

export const Default = {
  args: { title: "Title", description: "Text", primaryLabel: "Button", secondaryLabel: "Button", inline: true },
  argTypes: {
    title: { control: "text", description: "Optional heading", table: { type: { summary: "string" } } },
    description: { control: "text", description: "Optional text under the heading", table: { type: { summary: "ReactNode" } } },
    children: { control: false, description: "Optional controls between the text and the buttons", table: { type: { summary: "ReactNode" } } },
    primaryLabel: { control: "text", description: "Required primary (violet) button", table: { type: { summary: "string" } } },
    onPrimary: action("primary"),
    secondaryLabel: { control: "text", description: "Optional secondary (gray) button to the left of the primary one; leave empty to hide it", table: { type: { summary: "string" } } },
    onSecondary: action("secondary"),
    inline: { control: false, description: "Render just the card, without the fullscreen veil", table: { type: { summary: "boolean" } } },
  },
  render: (args) => (
    <Popup {...args}>
      <RoundsStepper label="Control" value={4} />
    </Popup>
  ),
};

export const Setup = {
  args: { roundsLimit: "∞", longBreakMinutes: "30 min", inline: true },
  argTypes: {
    roundsLimit: roundsArg("Number of rounds"),
    longBreakMinutes: optionsArg(LONG_BREAK_OPTIONS, "Long break length", "15 | 30 | null"),
    onStart: action("start"),
    inline: { control: false },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <SetupPopup
        {...args}
        onRoundsChange={(v) => updateArgs({ roundsLimit: keyForRounds(v) })}
        onLongBreakChange={(v) => updateArgs({ longBreakMinutes: keyForOption(LONG_BREAK_OPTIONS, v) })}
      />
    );
  },
};

export const AddRounds = {
  args: { amount: "4", startsWithBreak: "Break", longBreakMinutes: "30 min", inline: true },
  argTypes: {
    amount: roundsArg("How many more rounds; ∞ continues without a limit"),
    startsWithBreak: optionsArg(START_WITH_OPTIONS, "What comes first", "boolean"),
    longBreakMinutes: optionsArg(LONG_BREAK_OPTIONS, "Long break length", "15 | 30 | null"),
    onConfirm: action("confirm"),
    onCancel: action("cancel"),
    inline: { control: false },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <AddRoundsPopup
        {...args}
        onAmountChange={(v) => updateArgs({ amount: keyForRounds(v) })}
        onStartsWithBreakChange={(v) => updateArgs({ startsWithBreak: keyForOption(START_WITH_OPTIONS, v) })}
        onLongBreakChange={(v) => updateArgs({ longBreakMinutes: keyForOption(LONG_BREAK_OPTIONS, v) })}
      />
    );
  },
};

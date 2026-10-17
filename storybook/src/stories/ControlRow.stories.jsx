import { useArgs } from "storybook/preview-api";
import { ControlRow } from "../components/ControlRow";
import { modeArg } from "./argHelpers";

const fn = (description) => ({ description, table: { type: { summary: "() => void" } } });

export default {
  title: "Components/ControlRow",
  component: ControlRow,
  tags: ["autodocs"],
  // clicking the middle button switches Pause <-> Resume, like in the app
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <ControlRow
        {...args}
        onPlayPause={() => {
          args.onPlayPause?.();
          updateArgs({ buttonLabel: args.buttonLabel === "Pause" ? "Resume" : "Pause" });
        }}
      />
    );
  },
  argTypes: {
    mode: modeArg,
    buttonLabel: { control: "radio", options: ["Pause", "Resume", "Start"], description: "State of the middle button", table: { type: { summary: '"Pause" | "Resume" | "Start"' } } },
    disabled: { control: "boolean", description: "Disables all three buttons", table: { type: { summary: "boolean" } } },
    onReset: { action: "reset", ...fn("Restart the round") },
    onPlayPause: { action: "playPause", ...fn("Start, pause or resume") },
    onSkip: { action: "skip", ...fn("Skip to the next round") },
  },
  args: { mode: "focus", buttonLabel: "Pause", disabled: false },
};

export const Running = {};
export const Paused = { args: { buttonLabel: "Resume" } };
export const NotStarted = { args: { buttonLabel: "Start" } };
export const Disabled = { args: { disabled: true } };

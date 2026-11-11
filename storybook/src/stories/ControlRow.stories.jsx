import { Live } from "./Live";
import { ControlRow } from "../components/ControlRow";
import { modeArg } from "./argHelpers";

const fn = (description) => ({ description, table: { type: { summary: "() => void" } } });

export default {
  title: "Components/ControlRow",
  parameters: { docs: { description: { component: "Reset, Play/Pause and Skip under the timer. Click the middle button to switch between Pause and Resume." } } },
  component: ControlRow,
  tags: ["autodocs"],
  // clicking the middle button switches Pause <-> Resume, like in the app
  render: (args) => (
    <Live value={args.buttonLabel}>
      {(buttonLabel, setButtonLabel) => (
        <ControlRow
          {...args}
          buttonLabel={buttonLabel}
          onPlayPause={() => {
            args.onPlayPause?.();
            setButtonLabel(buttonLabel === "Pause" ? "Resume" : "Pause");
          }}
        />
      )}
    </Live>
  ),
  argTypes: {
    mode: {
      ...modeArg,
      control: { type: "inline-radio", labels: { ...modeArg.control.labels, speaker: "Speaker", overtime: "Over time" } },
      options: [...modeArg.options, "speaker", "overtime"],
    },
    buttonLabel: { control: "radio", options: ["Pause", "Resume", "Start"], description: "State of the middle button", table: { type: { summary: '"Pause" | "Resume" | "Start"' } } },
    disabled: { control: "boolean", description: "Disables all three buttons", table: { type: { summary: "boolean" } } },
    endButton: { control: "inline-radio", options: ["skip", "stop"], description: "Right button: Skip (Pomodoro) or Stop (retro speaker timer)", table: { type: { summary: '"skip" | "stop"' } } },
    stopDisabled: { control: "boolean", description: "Stop is off until the turn has started", table: { type: { summary: "boolean" } } },
    onReset: { action: "reset", ...fn("Restart the round") },
    onPlayPause: { action: "playPause", ...fn("Start, pause or resume") },
    onSkip: { action: "skip", ...fn("Skip to the next round") },
    onStop: { action: "stop", ...fn("End the speaker's turn, keeping the final time") },
  },
  args: { mode: "focus", buttonLabel: "Pause", disabled: false, endButton: "skip", stopDisabled: false },
};

export const Running = {};
export const Paused = { args: { buttonLabel: "Resume" } };
export const NotStarted = { args: { buttonLabel: "Start" } };
export const Disabled = { args: { disabled: true } };
export const SpeakerTimer = { args: { mode: "speaker", buttonLabel: "Pause", endButton: "stop" } };

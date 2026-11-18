import { Live } from "../stories/Live";
import { ControlRow } from "../components/ControlRow";

const fn = (description) => ({ description, table: { type: { summary: "() => void" } } });

// The speaker timer's controls: the shared ControlRow with Stop in place of Skip.
export default {
  title: "Retro/ControlRow",
  parameters: { docs: { description: { component: "Reset, Play/Pause and Stop under the speaker timer. Stop ends the turn and keeps its time on screen; it's off until the turn has started." } } },
  component: ControlRow,
  tags: ["autodocs"],
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
    mode: { control: "inline-radio", options: ["speaker", "commentator", "meeting"], description: "Whose timer: sets the Start/Resume color", table: { type: { summary: '"speaker" | "commentator" | "meeting"' } } },
    buttonLabel: { control: "radio", options: ["Pause", "Resume", "Start"], description: "State of the middle button", table: { type: { summary: '"Pause" | "Resume" | "Start"' } } },
    disabled: { control: "boolean", description: "Disables all three buttons", table: { type: { summary: "boolean" } } },
    endButton: { control: "inline-radio", options: ["stop", "skip"], description: "Right button: Stop (speaker timer) or Skip (meeting timer)", table: { type: { summary: '"skip" | "stop"' } } },
    stopDisabled: { control: "boolean", description: "Stop is off until the turn has started", table: { type: { summary: "boolean" } } },
    onReset: { action: "reset", ...fn("Restart the turn (not logged)") },
    onPlayPause: { action: "playPause", ...fn("Start, pause or resume") },
    onSkip: { action: "skip", ...fn("Skip to the next round") },
    onStop: { action: "stop", ...fn("End the speaker's turn, keeping the final time") },
  },
  args: { mode: "speaker", buttonLabel: "Pause", disabled: false, endButton: "stop", stopDisabled: false },
};

export const SpeakerTimer = {};
export const NotStarted = { args: { buttonLabel: "Start", stopDisabled: true } };
export const MeetingTimer = { args: { mode: "meeting", endButton: "skip" } };

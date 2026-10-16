import { ControlRow } from "../components/ControlRow";

const fn = (description) => ({ description, table: { type: { summary: "() => void" } } });

export default {
  title: "Components/ControlRow",
  component: ControlRow,
  tags: ["autodocs"],
  render: (args, { globals }) => <ControlRow {...args} mode={globals.mode} />,
  argTypes: {
    mode: { control: false, description: "Set from the Mode toolbar. Colors the middle button (Start/Resume) and its shadow", table: { type: { summary: '"focus" | "break" | "longBreak"' } } },
    buttonLabel: { control: "radio", options: ["Pause", "Resume", "Start"], description: "State of the middle button: Pause (gray) while running, Resume after a pause, Start before the segment has begun", table: { type: { summary: '"Pause" | "Resume" | "Start"' } } },
    disabled: { control: "boolean", description: "All three disabled (during the transition between segments)", table: { type: { summary: "boolean" } } },
    onReset: { action: "reset", ...fn("Restart the current segment") },
    onPlayPause: { action: "playPause", ...fn("Middle button: pause while running, resume/start otherwise") },
    onSkip: { action: "skip", ...fn("Finish the current segment now") },
  },
  args: { buttonLabel: "Pause", disabled: false },
};

export const Running = {};
export const Paused = { args: { buttonLabel: "Resume" } };
export const NotStarted = { args: { buttonLabel: "Start" } };
export const Disabled = { args: { disabled: true } };

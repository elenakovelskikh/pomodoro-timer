import { ControlRow } from "../components/ControlRow";

const fn = (summary) => ({ table: { type: { summary: "() => void" } }, description: summary });

export default {
  title: "Components/ControlRow",
  component: ControlRow,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ["work", "break", "longBreak"], description: "Colors the middle button (Start/Resume) and its shadow", table: { type: { summary: '"work" | "break" | "longBreak"' } } },
    buttonLabel: { control: "radio", options: ["Start", "Resume", "Pause"], description: "State of the middle button: Pause is gray, Start/Resume are colored", table: { type: { summary: '"Start" | "Resume" | "Pause"' } } },
    disabled: { control: "boolean", description: "All three disabled (during the transition between segments)", table: { type: { summary: "boolean" } } },
    onReset: { action: "reset", ...fn("Restart the current segment") },
    onToggle: { action: "toggle", ...fn("Start, pause or resume") },
    onSkip: { action: "skip", ...fn("Finish the current segment now") },
  },
  args: { mode: "work", buttonLabel: "Start", disabled: false },
};

export const Start = {};
export const Pause = { args: { buttonLabel: "Pause" } };
export const ResumeBreak = { args: { mode: "break", buttonLabel: "Resume" } };
export const ResumeLongBreak = { args: { mode: "longBreak", buttonLabel: "Resume" } };
export const Disabled = { args: { disabled: true } };

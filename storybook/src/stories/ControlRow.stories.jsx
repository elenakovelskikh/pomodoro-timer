import { ControlRow } from "../components/ControlRow";

export default {
  title: "Components/ControlRow",
  component: ControlRow,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ["work", "break", "longBreak"] },
    buttonLabel: { control: "radio", options: ["Start", "Resume", "Pause"] },
    disabled: { control: "boolean" },
    onReset: { action: "reset" },
    onToggle: { action: "toggle" },
    onSkip: { action: "skip" },
  },
  args: { mode: "work", buttonLabel: "Start", disabled: false },
};

export const Start = {};
export const Pause = { args: { buttonLabel: "Pause" } };
export const ResumeBreak = { args: { mode: "break", buttonLabel: "Resume" } };
export const ResumeLongBreak = { args: { mode: "longBreak", buttonLabel: "Resume" } };
export const Disabled = { args: { disabled: true } };

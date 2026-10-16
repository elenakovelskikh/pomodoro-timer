import { TimerRing } from "../components/TimerRing";

export default {
  title: "Components/TimerRing",
  component: TimerRing,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ["work", "break", "longBreak"] },
    progress: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    secondsLeft: { control: { type: "number" } },
    completedCycles: { control: { type: "number", min: 0 } },
    isTransitioning: { control: "boolean" },
  },
  args: { mode: "work", progress: 0.35, secondsLeft: 975, completedCycles: 0, isTransitioning: false },
};

export const Focus = {};
export const Break = { args: { mode: "break", progress: 0.5, secondsLeft: 150 } };
export const LongBreak = { args: { mode: "longBreak", progress: 0.2, secondsLeft: 1440 } };
export const JustStarted = { args: { progress: 0, secondsLeft: 1500 } };
export const Transitioning = { args: { progress: 1, secondsLeft: 0, isTransitioning: true } };

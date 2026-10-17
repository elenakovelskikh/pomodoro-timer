import { TimerRing } from "../components/TimerRing";
import { modeArg } from "./argHelpers";

export default {
  title: "Components/TimerRing",
  component: TimerRing,
  tags: ["autodocs"],
  argTypes: {
    mode: modeArg,
    progress: { control: { type: "range", min: 0, max: 1, step: 0.01 }, description: "How much of the round has passed, 0–1", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: 0 }, description: "Time left, in seconds", table: { type: { summary: "number" } } },
    round: { control: { type: "number", min: 1 }, description: "Round number (Focus only)", table: { type: { summary: "number" } } },
    isTransitioning: { control: "boolean", description: "Between rounds: shows the completion message", table: { type: { summary: "boolean" } } },
  },
  args: { mode: "focus", progress: 0.35, secondsLeft: 975, round: 1, isTransitioning: false },
};

export const Running = {};
export const JustStarted = { args: { progress: 0, secondsLeft: 1500 } };
export const Transitioning = { args: { progress: 1, secondsLeft: 0, isTransitioning: true } };

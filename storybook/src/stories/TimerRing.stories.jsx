import { TimerRing } from "../components/TimerRing";

export default {
  title: "Components/TimerRing",
  component: TimerRing,
  tags: ["autodocs"],
  render: (args, { globals }) => <TimerRing {...args} mode={globals.mode} />,
  argTypes: {
    mode: { control: false, description: "Set from the Mode toolbar. Picks the arc and shadow colors and the emoji", table: { type: { summary: '"focus" | "break" | "longBreak"' } } },
    progress: { control: { type: "range", min: 0, max: 1, step: 0.01 }, description: "Share of the segment already done, 0–1. The colored arc is what's left", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: 0 }, description: "Time shown in the middle; at 0 the moving cap and its shadow are hidden", table: { type: { summary: "number" } } },
    round: { control: { type: "number", min: 1 }, description: '"Round N" caption under the time, Focus only', table: { type: { summary: "number" } } },
    isTransitioning: { control: "boolean", description: 'The moment between segments: pulses and shows the "… complete" message instead of the time', table: { type: { summary: "boolean" } } },
  },
  args: { progress: 0.35, secondsLeft: 975, round: 1, isTransitioning: false },
};

export const Running = {};
export const JustStarted = { args: { progress: 0, secondsLeft: 1500 } };
export const Transitioning = { args: { progress: 1, secondsLeft: 0, isTransitioning: true } };

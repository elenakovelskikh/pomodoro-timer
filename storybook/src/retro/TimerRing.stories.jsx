import { TimerRing } from "../components/TimerRing";

// The meeting timer: the shared TimerRing in the retro's meeting mode.
export default {
  title: "Retro/TimerRing",
  parameters: { docs: { description: { component: "The meeting's Pomodoro: time left in the meeting round, with its own name and emoji." } } },
  component: TimerRing,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "inline-radio", options: ["meeting", "break"], description: "Meeting round or its break", table: { type: { summary: '"meeting" | "break"' } } },
    progress: { control: { type: "range", min: 0, max: 1, step: 0.01 }, description: "How much of the round has passed, 0–1", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: 0 }, description: "Time left, in seconds", table: { type: { summary: "number" } } },
    round: { control: { type: "number", min: 1 }, description: "Meeting round number", table: { type: { summary: "number" } } },
    isTransitioning: { control: "boolean", description: "At the end of a break: shows the completion message", table: { type: { summary: "boolean" } } },
  },
  args: { mode: "meeting", progress: 0.35, secondsLeft: 975, round: 1, isTransitioning: false },
};

export const Meeting = {};
export const Finished = { args: { progress: 1, secondsLeft: 0 } };
export const Break = { args: { mode: "break", progress: 0.4, secondsLeft: 180 } };

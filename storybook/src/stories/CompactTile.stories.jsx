import { CompactTile } from "../components/CompactTile";
import { modeArg } from "./argHelpers";

export default {
  title: "Components/CompactTile",
  component: CompactTile,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Discord Activity only. The minimised Activity next to the participants' video: the top of the timer screen scaled down, without the controls." } } },
  argTypes: {
    width: { control: { type: "range", min: 100, max: 300, step: 10 }, description: "Tile width in px (set by Discord)", table: { type: { summary: "number" } } },
    height: { control: { type: "range", min: 100, max: 300, step: 10 }, description: "Tile height in px (set by Discord)", table: { type: { summary: "number" } } },
    mode: modeArg,
    state: { control: "inline-radio", options: ["notStarted", "running", "paused", "transition", "done"], description: "What the session is doing", table: { type: { summary: '"notStarted" | "running" | "paused" | "transition" | "done"' } } },
    progress: { control: { type: "range", min: 0, max: 1, step: 0.01 }, description: "How much of the segment has passed, 0–1", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: 0 }, description: "Time left, in seconds", table: { type: { summary: "number" } } },
    round: { control: { type: "number", min: 1 }, description: "Round number (Focus only)", table: { type: { summary: "number" } } },
    completed: { control: { type: "number", min: 0 }, description: "Completed rounds (state done only)", table: { type: { summary: "number" } } },
  },
  args: { width: 150, height: 150, mode: "focus", state: "running", progress: 0.35, secondsLeft: 975, round: 1, completed: 4 },
  decorators: [(Story) => <div className="border border-subtle rounded-xl overflow-hidden"><Story /></div>],
};

export const Running = {};
export const Paused = { args: { state: "paused" } };
export const Break = { args: { mode: "break", secondsLeft: 180, progress: 0.4 } };
export const Done = { args: { state: "done" } };

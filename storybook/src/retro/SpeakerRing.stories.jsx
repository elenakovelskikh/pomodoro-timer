import { SpeakerRing } from "../components/SpeakerRing";

export default {
  title: "Retro/SpeakerRing",
  parameters: { docs: { description: { component: "Retro speaker timer: 5 minutes for a speaker, 2 for a commentator. Past zero the time stays at 00:00 and the caption shows the whole turn's time." } } },
  component: SpeakerRing,
  tags: ["autodocs"],
  argTypes: {
    minutes: { control: "inline-radio", options: [2, 5], description: "Time limit, in minutes: 5 is Speaker, 2 is Commentator", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: -600, max: 300 }, description: "Time left, in seconds; below zero is time over", table: { type: { summary: "number" } } },
    timeUp: { control: "boolean", description: "The moment of zero, while the sound plays: pulses with \"Time's up\"", table: { type: { summary: "boolean" } } },
  },
  args: { minutes: 5, secondsLeft: 185, timeUp: false },
};

export const Counting = {};
export const NotStarted = { args: { secondsLeft: 300 } };
export const TimeUp = { args: { secondsLeft: 0, timeUp: true } };
export const Commentator = { args: { minutes: 2, secondsLeft: 48 } };
export const OverTime = { args: { minutes: 5, secondsLeft: -75 } };

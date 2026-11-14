import { SpeakerRing } from "../components/SpeakerRing";

export default {
  title: "Components/SpeakerRing",
  parameters: { docs: { description: { component: "Retro speaker timer: 5 minutes for a speaker, 2 for a commentator. Past zero the time stays at 00:00 and the caption shows the whole turn's time." } } },
  component: SpeakerRing,
  tags: ["autodocs"],
  argTypes: {
    minutes: { control: "inline-radio", options: [2, 5], description: "Time limit, in minutes: 5 is Speaker, 2 is Commentator", table: { type: { summary: "number" } } },
    secondsLeft: { control: { type: "number", min: -600, max: 300 }, description: "Time left, in seconds; below zero is time over", table: { type: { summary: "number" } } },
  },
  args: { minutes: 5, secondsLeft: 185 },
};

export const Counting = {};
export const NotStarted = { args: { secondsLeft: 300 } };
export const TimeUp = { args: { secondsLeft: 0 } };
export const Commentator = { args: { minutes: 2, secondsLeft: 48 } };
export const OverTime = { args: { minutes: 5, secondsLeft: -75 } };

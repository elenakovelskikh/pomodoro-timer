import preview from "../.storybook/preview.jsx";

export default {
  ...preview,
  parameters: {
    ...preview.parameters,
    options: { storySort: { order: ["Retro", ["SpeakerRing", "PresetPills", "TurnLog", "TimerRing", "ControlRow"]] } },
  },
};

import "../src/index.css";
import { MODES } from "../src/tokens";

export default {
  // Mode-dependent components have a `mode` control; like the app's screen root, the decorator
  // turns it into --mode-accent / --mode-accent-hover for everything inside the story.
  decorators: [
    (Story, { args }) => {
      const m = MODES[args.mode ?? "focus"];
      return (
        <div style={{ "--mode-accent": m.accent, "--mode-accent-hover": m.accentHover }}>
          <Story />
        </div>
      );
    },
  ],
  initialGlobals: { backgrounds: { value: "white" } },
  parameters: {
    layout: "centered",
    backgrounds: { options: { white: { name: "white", value: "#ffffff" } } },
    options: {
      // Foundations first, in reading order (raw values before what they are used for);
      // Components alphabetically. Storybook requires this to be written inline.
      storySort: {
        order: [
          "Foundations", ["Colors", ["Palette", "Tokens", "Modes"], "Typography", ["Primitives", "Text styles"]],
          "Components", ["Button", "ControlRow", "IconButton", "Log", "Popup", "RadioGroup", "RoundsStepper", "TimerRing"],
        ],
      },
    },
  },
};

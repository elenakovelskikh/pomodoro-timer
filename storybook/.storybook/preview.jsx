import "../src/index.css";
import { MODES } from "../src/tokens";

export default {
  // A toolbar switch for the timer mode. Stories of mode-dependent components read it from
  // `globals.mode`; the decorator also sets --mode-accent / --mode-accent-hover, like the app's screen root does.
  globalTypes: {
    mode: {
      description: "Timer mode",
      toolbar: {
        title: "Mode",
        icon: "circlehollow",
        items: [
          { value: "focus", title: "Focus" },
          { value: "break", title: "Break" },
          { value: "longBreak", title: "Long break" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { mode: "focus", backgrounds: { value: "white" } },
  decorators: [
    (Story, { globals }) => (
      <div style={{ "--mode-accent": MODES[globals.mode ?? "focus"].accent, "--mode-accent-hover": MODES[globals.mode ?? "focus"].accentHover }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: { options: { white: { name: "white", value: "#ffffff" } } },
  },
};

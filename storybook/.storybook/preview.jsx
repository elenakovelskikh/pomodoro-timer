import "../src/index.css";

export default {
  // A toolbar switch for the timer mode. Stories of mode-dependent components read it from
  // `globals.mode`, so one click recolors the ring, buttons, mode label, etc.
  globalTypes: {
    mode: {
      description: "Timer mode",
      toolbar: {
        title: "Mode",
        icon: "circlehollow",
        items: [
          { value: "work", title: "Focus" },
          { value: "break", title: "Break" },
          { value: "longBreak", title: "Long break" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { mode: "work", backgrounds: { value: "white" } },
  parameters: {
    layout: "centered",
    backgrounds: { options: { white: { name: "white", value: "#ffffff" } } },
  },
};

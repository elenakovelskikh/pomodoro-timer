// The Retro Storybook: components and variants that only the retro timers use (the speaker timer,
// its presets and turn log, the meeting timer). It shares the components, styles and tokens with
// the main Storybook in ../.storybook and is published separately, at /storybook-retro/.
import main from "../.storybook/main.js";

export default {
  ...main,
  stories: ["../src/retro/**/*.stories.jsx"],
};

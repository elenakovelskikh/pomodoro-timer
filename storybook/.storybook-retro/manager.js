import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Same header as the main Storybook, named for the retro timers.
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: `<span style="display:inline-flex;align-items:center;gap:8px"><img src="./brand-icon.png" alt="" width="24" height="24" />Violet Tomato Retro</span>`,
    brandUrl: "https://elenakovelskikh.github.io/pomodoro-timer/",
    brandTarget: "_blank",
  }),
});

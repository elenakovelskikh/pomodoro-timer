import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Sidebar header: the project's name, linking to the live site, instead of the Storybook logo.
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Violet Tomato",
    brandUrl: "https://elenakovelskikh.github.io/pomodoro-timer/",
    brandTarget: "_blank",
  }),
});

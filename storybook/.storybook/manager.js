import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Sidebar header: the site's icon and the project's name, linking to the live site, instead of
// the Storybook logo. brandTitle may be HTML; the icon is served by staticDirs in main.js.
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: `<span style="display:inline-flex;align-items:center;gap:8px"><img src="./brand-icon.png" alt="" width="24" height="24" />Violet Tomato Storybook</span>`,
    brandUrl: "https://elenakovelskikh.github.io/pomodoro-timer/",
    brandTarget: "_blank",
  }),
});

import { fileURLToPath } from "node:url";

// the repo root, so stories can load ../design-tokens.js — the same file the site uses
const repoRoot = fileURLToPath(new URL("../..", import.meta.url));

export default {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  // the site's own icon, served next to Storybook for the browser tab and the sidebar header
  staticDirs: [{ from: "../../favicon-48.png", to: "/brand-icon.png" }],
  viteFinal: (config) => {
    config.server ??= {};
    config.server.fs ??= {};
    config.server.fs.allow = [...(config.server.fs.allow ?? []), repoRoot];
    return config;
  },
};

import { createRequire } from "node:module";

// Same tokens as the site: ../design-tokens.js replaces Tailwind's palette and type scale.
const { THEME } = createRequire(import.meta.url)("../design-tokens.js");

export default {
  content: ["./src/**/*.{js,jsx,mdx}", "./.storybook/**/*.{js,jsx}"],
  future: { hoverOnlyWhenSupported: true },
  theme: THEME,
};

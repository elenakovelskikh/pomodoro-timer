// Same setup as the site's inline config (tailwind.config in index.html): hover: utilities only on devices that can hover.
export default {
  content: ["./src/**/*.{js,jsx,mdx}", "./.storybook/**/*.{js,jsx}"],
  future: { hoverOnlyWhenSupported: true },
};

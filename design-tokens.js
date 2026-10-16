// Design tokens — the one source for both the site (loaded as a plain <script>, exposes
// window.DESIGN_TOKENS) and Storybook (reads it with require, or imports it for the global).
//
// PALETTE: primitives — raw values named by hue and step. Nothing in the UI should use them directly.
// MODE_COLORS: per-mode semantic colors, also read by the SVG ring and the colored shadows.
// THEME: semantic tokens plugged into Tailwind, so markup uses class names like
//   text-secondary, bg-stepper-button, ring-radio-selected, text-heading.
// Tailwind's own color palette and font-size scale are replaced, not extended, so classes
// like text-neutral-500 or text-sm no longer exist and only these tokens can be used.
(function (root) {
  const PALETTE = {
    white: "#ffffff",
    neutral: {
      100: "#f5f5f5",
      150: "#EBECF0",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      900: "#171717",
    },
    violet: { 50: "#f5f3ff", 300: "#d1baf6", 500: "#8b5cf6", 600: "#7c3aed", 650: "#7738E4", 700: "#6d28d9" },
    blue: { 200: "#abdef5", 500: "#009AE2", 700: "#006DA1" },
    teal: { 200: "#ABDEDD", 500: "#009C99", 700: "#007371" },
  };
  const P = PALETTE;

  // color: mode label and Start/Resume; arcColor: progress arc and its cap;
  // shadowColor: ring tip shadow and the colored button shadows
  const MODE_COLORS = {
    focus: { color: P.violet[600], arcColor: P.violet[300], shadowColor: P.violet[650] },
    break: { color: P.blue[500], arcColor: P.blue[200], shadowColor: P.blue[700] },
    longBreak: { color: P.teal[500], arcColor: P.teal[200], shadowColor: P.teal[700] },
  };

  const THEME = {
    colors: { transparent: "transparent", current: "currentColor" },
    textColor: {
      primary: P.neutral[900],
      label: P.neutral[600],
      secondary: P.neutral[500],
      "secondary-hover": P.neutral[700],
      muted: P.neutral[400],
      "on-color": P.white,
      "radio-selected": P.violet[700],
      mode: "var(--mode-color)",
    },
    backgroundColor: {
      page: P.white,
      overlay: "rgb(255 255 255 / 0.6)",
      primary: P.violet[600],
      "primary-hover": P.violet[700],
      "secondary-button": P.neutral[200],
      "secondary-button-hover": P.neutral[300],
      "stepper-button": P.neutral[100],
      "stepper-button-hover": P.neutral[200],
      "radio-selected": P.violet[50],
      mode: "var(--mode-color)",
    },
    borderColor: { subtle: P.neutral[200] },
    ringColor: { "radio-selected": P.violet[500], radio: P.neutral[200] },
    // text styles: size / line-height / weight (and tracking) in one class
    fontSize: {
      display: ["3rem", { lineHeight: "1", fontWeight: "700" }],
      emoji: ["1.875rem", { lineHeight: "1.875rem" }],
      heading: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }],
      "mode-label": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700", letterSpacing: "0.025em" }],
      number: ["1.25rem", { lineHeight: "1", fontWeight: "700" }],
      button: ["1rem", { lineHeight: "1.5rem", fontWeight: "500" }],
      control: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
      body: ["0.875rem", { lineHeight: "1.25rem" }],
      unit: ["0.875rem", { lineHeight: "1" }],
      caption: ["0.75rem", { lineHeight: "1rem" }],
      credit: ["0.625rem", { lineHeight: "0.9375rem" }],
    },
  };

  const TOKENS = { PALETTE, MODE_COLORS, THEME };
  if (typeof module === "object" && module.exports) module.exports = TOKENS;
  else root.DESIGN_TOKENS = TOKENS;
})(typeof globalThis !== "undefined" ? globalThis : this);

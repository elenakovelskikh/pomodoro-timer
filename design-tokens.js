// Design tokens — the one source for both the site (loaded as a plain <script>, exposes
// window.DESIGN_TOKENS) and Storybook (reads it with require, or imports it for the global).
//
// PALETTE: primitives — raw values named by hue and step. Nothing in the UI should use them directly.
// MODE_COLORS: per-mode semantic colors, also read by the SVG ring and the colored shadows.
// THEME: semantic tokens plugged into Tailwind, so markup uses class names like
//   text-secondary, bg-button-secondary, ring-radio-selected, text-heading.
// Tailwind's own color palette and font-size scale are replaced, not extended, so classes
// like text-neutral-500 or text-sm no longer exist and only these tokens can be used.
(function (root) {
  const PALETTE = {
    neutral: {
      0: "#ffffff",
      100: "#F0F0F0",
      200: "#e5e5e5",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      900: "#171717",
    },
    violet: { 50: "#f5f3ff", 200: "#d1baf6", 500: "#7c3aed", 700: "#6d28d9" },
    blue: { 200: "#abdef5", 500: "#009AE2", 700: "#006DA1" },
    teal: { 200: "#ABDEDD", 500: "#009C99", 700: "#007371" },
  };
  const P = PALETTE;

  // color: mode label and Start/Resume; hoverColor: Start/Resume on hover;
  // arcColor: progress arc and its cap; shadowColor: ring tip shadow and the colored button shadows
  const MODE_COLORS = {
    focus: { color: P.violet[500], hoverColor: P.violet[700], arcColor: P.violet[200], shadowColor: P.violet[700] },
    break: { color: P.blue[500], hoverColor: P.blue[700], arcColor: P.blue[200], shadowColor: P.blue[700] },
    longBreak: { color: P.teal[500], hoverColor: P.teal[700], arcColor: P.teal[200], shadowColor: P.teal[700] },
  };

  const THEME = {
    colors: { transparent: "transparent", current: "currentColor" },
    textColor: {
      primary: P.neutral[900],
      label: P.neutral[600],
      secondary: P.neutral[500],
      muted: P.neutral[400],
      // tertiary buttons: text-only actions ("Start long break", "Add more rounds", log toggles)
      // and the text of unselected radio pills
      "button-tertiary": P.neutral[500],
      "button-tertiary-hover": P.neutral[600],
      // selected radio pill (unselected pills use the tertiary button colors)
      "radio-selected": P.violet[500],
      // text and icons on the colored buttons: popup CTA and the mode-colored Start/Resume
      "button-primary": P.neutral[0],
      // secondary buttons: icons and text on the gray buttons (stepper, Reset, Skip, Pause, Cancel)
      "button-secondary": P.neutral[600],
      "button-secondary-hover": P.neutral[700],
      mode: "var(--mode-color)",
    },
    backgroundColor: {
      page: P.neutral[0],
      overlay: "rgb(255 255 255 / 0.6)",
      // primary buttons: the violet popup CTA
      "button-primary": P.violet[500],
      "button-primary-hover": P.violet[700],
      // secondary buttons: the gray ones (stepper, Reset, Skip, Pause, Cancel)
      "button-secondary": P.neutral[100],
      "button-secondary-hover": P.neutral[200],
      "radio-selected": P.violet[50],
      // Start/Resume: a primary-level button in the current mode color
      "button-mode": "var(--mode-color)",
      "button-mode-hover": "var(--mode-color-hover)",
    },
    borderColor: { subtle: P.neutral[200] },
    ringColor: { "radio-selected": P.violet[500], radio: P.neutral[200], "radio-hover": P.neutral[400] },
    // SVG strokes
    stroke: { "ring-track": P.neutral[100] },
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

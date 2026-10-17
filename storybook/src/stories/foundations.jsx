import React from "react";
import { Story } from "@storybook/addon-docs/blocks";
import { PALETTE } from "../tokens";

// helpers shared by the Foundations pages

// Foundations pages are plain documentation: each one is shown as a docs page that renders just
// its single story, with no addon panel or toolbar. Each page also sets tags: ["autodocs", "!dev"]
// (written inline: Storybook reads tags statically).
export const PAGE_PARAMETERS = { layout: "padded", docs: { page: () => <Story /> } };

// "neutral-900" for a value that is one of the primitives
const byValue = {};
for (const [hue, v] of Object.entries(PALETTE)) {
  if (typeof v === "string") byValue[v.toLowerCase()] = hue;
  else for (const [step, value] of Object.entries(v)) byValue[value.toLowerCase()] ??= `${hue}-${step}`;
}
export const primitiveName = (value) => byValue[String(value).toLowerCase()];

export const toPx = (rem) => (String(rem).endsWith("rem") ? `${parseFloat(rem) * 16}px` : rem);

export const Swatch = ({ name, value, sub, note }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 shrink-0 rounded-xl border border-subtle" style={{ background: value }} />
    <div className="type-body">
      <div className="type-control text-primary">{name}</div>
      <div className="font-mono text-secondary">{sub ?? value}</div>
      {note && <div className="type-caption text-muted">{note}</div>}
    </div>
  </div>
);

export const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <div className="type-heading text-primary">{title}</div>
    {children}
  </div>
);

export const Page = ({ title, intro, children }) => (
  <div className="flex flex-col gap-8 max-w-3xl">
    <div className="flex flex-col gap-2">
      <div className="type-display text-primary" style={{ fontSize: "2rem", lineHeight: "2.5rem" }}>{title}</div>
      {intro && <div className="type-body text-secondary max-w-xl">{intro}</div>}
    </div>
    {children}
  </div>
);

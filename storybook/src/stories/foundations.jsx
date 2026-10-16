import React from "react";
import { PALETTE } from "../tokens";

// helpers shared by the Foundations pages

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
    <div className="text-body">
      <div className="text-control text-primary">{name}</div>
      <div className="font-mono text-secondary">{sub ?? value}</div>
      {note && <div className="text-caption text-muted">{note}</div>}
    </div>
  </div>
);

export const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <div className="text-heading text-primary">{title}</div>
    {children}
  </div>
);

export const Page = ({ title, intro, children }) => (
  <div className="flex flex-col gap-8 max-w-3xl">
    <div className="flex flex-col gap-2">
      <div className="text-display text-primary" style={{ fontSize: "2rem", lineHeight: "2.5rem" }}>{title}</div>
      {intro && <div className="text-body text-secondary max-w-xl">{intro}</div>}
    </div>
    {children}
  </div>
);

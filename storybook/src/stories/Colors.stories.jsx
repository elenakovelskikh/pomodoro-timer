import React from "react";
import { MODES } from "../tokens";

const Swatch = ({ name, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl border border-neutral-200" style={{ backgroundColor: value }} />
    <div className="text-sm">
      <div className="font-medium text-neutral-800">{name}</div>
      <div className="font-mono text-neutral-500">{value}</div>
    </div>
  </div>
);

function Colors() {
  return (
    <div className="flex flex-col gap-8">
      {Object.entries(MODES).map(([key, m]) => (
        <div key={key} className="flex flex-col gap-3">
          <div className="text-xl font-bold" style={{ color: m.color }}>{m.label}</div>
          <div className="grid grid-cols-2 gap-3">
            <Swatch name="color (label, button)" value={m.color} />
            <Swatch name="arcColor (progress ring)" value={m.arcColor} />
            <Swatch name="shadowColor" value={m.shadowColor} />
            <Swatch name="bg" value={m.bg} />
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <div className="text-xl font-bold text-neutral-800">Neutrals</div>
        <div className="grid grid-cols-2 gap-3">
          <Swatch name="ring track" value="#EBECF0" />
          <Swatch name="button gray (neutral-200)" value="#e5e5e5" />
          <Swatch name="CTA violet (violet-600)" value="#7c3aed" />
          <Swatch name="text (neutral-800)" value="#262626" />
        </div>
      </div>
    </div>
  );
}

export default { title: "Foundations/Colors", component: Colors, parameters: { layout: "padded" } };
export const Palette = {};

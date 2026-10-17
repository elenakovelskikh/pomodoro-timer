import React from "react";
import { MODES } from "../tokens";
import { Page, primitiveName, PAGE_PARAMETERS } from "./foundations";

// Every mode has the same four roles, filled from its own hue: step 500 for the accent,
// 700 for its hover and the shadows, 200 for the progress arc.
const ROLES = [
  ["accent", "Mode label, Start and Resume"],
  ["accentHover", "Start and Resume on hover"],
  ["arc", "Progress arc"],
  ["shadow", "Ring tip and button shadows"],
];

function Modes() {
  const modes = Object.values(MODES);
  return (
    <Page title="Modes" intro="Each timer mode has its own color family: violet, blue or teal. The roles and steps are the same in every mode; switching modes swaps the family.">
      <div className="grid grid-cols-[minmax(8rem,1fr)_repeat(3,minmax(0,1fr))] gap-x-4 gap-y-5 items-center">
        <div />
        {modes.map((m) => (
          <div key={m.label} className="type-mode-label uppercase" style={{ color: m.accent }}>{m.label}</div>
        ))}
        {ROLES.flatMap(([role, note]) => [
          <div key={role}>
            <div className="type-control text-primary font-mono">{role}</div>
            <div className="type-caption text-muted">{note}</div>
          </div>,
          ...modes.map((m) => (
            <div key={role + m.label} className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 rounded-xl border border-subtle" style={{ background: m[role] }} />
              <div className="type-body">
                <div className="type-control text-primary">{primitiveName(m[role])}</div>
                <div className="font-mono text-secondary">{m[role]}</div>
              </div>
            </div>
          )),
        ])}
      </div>
    </Page>
  );
}

export default { title: "Foundations/Colors/Modes", component: Modes, tags: ["autodocs", "!dev"], parameters: PAGE_PARAMETERS };
export const Default = { name: "Modes" };

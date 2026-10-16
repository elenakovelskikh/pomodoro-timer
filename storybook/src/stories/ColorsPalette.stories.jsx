import React from "react";
import { PALETTE } from "../tokens";
import { Swatch, Section, Page } from "./foundations";

function Palette() {
  const hues = Object.entries(PALETTE).filter(([, v]) => typeof v === "object");
  return (
    <Page
      title="Palette"
      intro="Primitives: every raw color value, named by hue and lightness step (higher = darker). Components never use these directly — they use the semantic tokens, which point here."
    >
      <Section title="Base">
        <div className="grid grid-cols-3 gap-3"><Swatch name="white" value={PALETTE.white} /></div>
      </Section>
      {hues.map(([hue, steps]) => (
        <Section key={hue} title={hue[0].toUpperCase() + hue.slice(1)}>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(steps).map(([step, value]) => <Swatch key={step} name={`${hue}-${step}`} value={value} />)}
          </div>
        </Section>
      ))}
    </Page>
  );
}

export default { title: "Foundations/Colors/Palette", component: Palette, parameters: { layout: "padded" } };
export const Default = {};

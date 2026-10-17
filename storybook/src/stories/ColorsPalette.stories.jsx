import React from "react";
import { PALETTE } from "../tokens";
import { Swatch, Section, Page, PAGE_PARAMETERS } from "./foundations";

function Palette() {
  const hues = Object.entries(PALETTE).filter(([, v]) => typeof v === "object");
  return (
    <Page
      title="Palette"
      intro="All raw color values, named by hue and lightness (higher is darker). Components use them only through tokens."
    >
      {hues.map(([hue, steps]) => (
        <Section key={hue} title={hue[0].toUpperCase() + hue.slice(1)}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(steps).map(([step, value]) => <Swatch key={step} name={`${hue}-${step}`} value={value} />)}
          </div>
        </Section>
      ))}
    </Page>
  );
}

export default { title: "Foundations/Colors/Palette", component: Palette, tags: ["autodocs", "!dev"], parameters: PAGE_PARAMETERS };
export const Default = { name: "Palette" };

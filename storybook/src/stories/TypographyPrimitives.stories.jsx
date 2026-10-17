import React from "react";
import { TYPE } from "../tokens";
import { Section, Page, toPx, PAGE_PARAMETERS } from "./foundations";

const textStyles = Object.entries(TYPE).filter(([name]) => name !== "emoji").map(([, css]) => css);
const sizes = [...new Set(textStyles.map((s) => s.fontSize))].sort((a, b) => parseFloat(b) - parseFloat(a));
const WEIGHT_NAMES = { 400: "Regular", 500: "Medium", 700: "Bold" };
const weights = [...new Set(textStyles.map((s) => s.fontWeight))].sort();

const Row = ({ label, sub, children }) => (
  <div className="flex items-baseline gap-6 border-b border-subtle py-3">
    <div className="w-40 shrink-0">
      <div className="type-control text-primary">{label}</div>
      {sub && <div className="type-caption text-secondary font-mono">{sub}</div>}
    </div>
    <div className="text-primary">{children}</div>
  </div>
);

function Primitives() {
  return (
    <Page title="Type primitives" intro="The building blocks of the text styles. Sizes are in rem (px at the default 16px), so text follows the browser's font size setting.">
      <Section title="Sizes">
        <div>{sizes.map((s) => <Row key={s} label={toPx(s)} sub={s}><span style={{ fontSize: s, lineHeight: 1.25 }}>Focus</span></Row>)}</div>
      </Section>
      <Section title="Weights">
        <div>{weights.map((w) => <Row key={w} label={WEIGHT_NAMES[w]} sub={w}><span style={{ fontWeight: w }}>Focus</span></Row>)}</div>
      </Section>
    </Page>
  );
}

export default { title: "Foundations/Typography/Primitives", component: Primitives, tags: ["autodocs", "!dev"], parameters: PAGE_PARAMETERS };
export const Default = { name: "Primitives" };

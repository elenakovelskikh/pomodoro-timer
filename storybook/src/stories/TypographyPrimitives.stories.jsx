import React from "react";
import { THEME } from "../tokens";
import { Section, Page, toPx } from "./foundations";

const styles = Object.values(THEME.fontSize);
const uniq = (xs) => [...new Set(xs)];
const sizes = uniq(styles.map(([size]) => size)).sort((a, b) => parseFloat(b) - parseFloat(a));
const lineHeights = uniq(styles.map(([, o]) => o.lineHeight).filter(Boolean));
const tracking = uniq(styles.map(([, o]) => o.letterSpacing).filter(Boolean));

const Row = ({ label, sub, children }) => (
  <div className="flex items-baseline gap-6 border-b border-subtle py-3">
    <div className="w-40 shrink-0">
      <div className="text-control text-primary">{label}</div>
      {sub && <div className="text-caption text-muted font-mono">{sub}</div>}
    </div>
    <div className="text-primary">{children}</div>
  </div>
);

function Primitives() {
  return (
    <Page
      title="Type primitives"
      intro="The raw ingredients. Text styles combine them; components use only the text styles. All sizes are in rem (px shown at the default 16px), so text follows the browser's font-size setting."
    >
      <Section title="Families">
        <div>
          <Row label="sans" sub="Tailwind default (system UI font)"><span className="font-sans">Automatic Pomodoro Focus Timer 0123456789</span></Row>
          <Row label="mono" sub="Tailwind default monospace"><span className="font-mono">10:00 – 10:25</span></Row>
        </div>
      </Section>
      <Section title="Sizes">
        <div>{sizes.map((s) => <Row key={s} label={s} sub={toPx(s)}><span style={{ fontSize: s, lineHeight: 1.2 }}>Focus</span></Row>)}</div>
      </Section>
      <Section title="Weights">
        <div>
          <Row label="400" sub="regular"><span style={{ fontWeight: 400 }}>Focus</span></Row>
          <Row label="500" sub="medium"><span style={{ fontWeight: 500 }}>Focus</span></Row>
          <Row label="700" sub="bold"><span style={{ fontWeight: 700 }}>Focus</span></Row>
        </div>
      </Section>
      <Section title="Line heights">
        <div className="text-body text-secondary font-mono">{lineHeights.map((l) => `${l}${l.endsWith("rem") ? ` (${toPx(l)})` : " (× size)"}`).join("  ·  ")}</div>
      </Section>
      <Section title="Letter spacing">
        <div className="text-body text-secondary font-mono">{tracking.join("  ·  ")} — mode label only</div>
      </Section>
    </Page>
  );
}

export default { title: "Foundations/Typography/Primitives", component: Primitives, parameters: { layout: "padded" } };
export const Default = {};

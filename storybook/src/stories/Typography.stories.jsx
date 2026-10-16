import React from "react";

// Every text style in the UI, largest first. Sizes/line-heights are Tailwind 3 defaults:
// text-5xl 48/48, text-xl 20/28, text-base 16/24, text-sm 14/20, text-xs 12/16.
// Fonts: Tailwind's default sans stack (system UI font) unless marked mono.
const rows = [
  ["Timer digits", "48 / 48 · bold · tabular figures", "text-5xl font-bold tabular-nums text-neutral-800", {}, "24:59"],
  ["Emoji", "30 / 30 (inline px, no Tailwind class)", "", { fontSize: "30px", lineHeight: "30px" }, "📚💻✍️"],
  ["Mode label", "20 / 28 · bold · uppercase · +0.025em", "text-xl font-bold tracking-wide uppercase text-violet-600", {}, "Focus"],
  ["Heading", "20 / 28 · bold (popup title, completion heading)", "text-xl font-bold text-neutral-800", {}, "Automatic Pomodoro Focus Timer"],
  ["Number", "20 / 20 · bold · tabular (stepper value, completed counter)", "text-xl font-bold leading-none tabular-nums text-neutral-800", {}, "4"],
  ["Primary button", "16 / 24 · medium (size inherited, not set on the button)", "text-base font-medium text-neutral-800", {}, "Button"],
  ["Ghost button / radio pill", "14 / 20 · medium", "text-sm font-medium text-neutral-500", {}, "Button"],
  ["Field label", "14 / 20 · medium", "text-sm font-medium text-neutral-600", {}, "Number of rounds"],
  ["Body", "14 / 20 · regular (popup text, \"Round N\")", "text-sm text-neutral-400", {}, "Start once: 25-minute focus rounds…"],
  ["Unit", "14 / 14 · regular (\"rounds\", \"completed\")", "text-sm leading-none text-neutral-800", {}, "rounds"],
  ["Log", "12 / 16 · label regular, time mono", "text-xs", { color: "#666666" }, null],
  ["Credit", "10 px (inline px; Tailwind's smallest class is 12px)", "", { fontSize: "10px", color: "#999999" }, "Made by Elena Kovelskikh"],
];

function Typography() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      {rows.map(([name, spec, cls, style, sample]) => (
        <div key={name} className="flex flex-col gap-1">
          <div className="text-xs text-neutral-400">
            <span className="font-medium text-neutral-600">{name}</span> · {spec}
            {cls && <> · <code>{cls}</code></>}
          </div>
          <div className={cls} style={style}>
            {sample ?? (
              <span className="flex">
                <span style={{ width: "80px" }}>focus</span>
                <span className="font-mono">10:00 – 10:25</span>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default { title: "Foundations/Typography", component: Typography, parameters: { layout: "padded" } };
export const Scale = {};

import React from "react";

const rows = [
  ["Timer digits", "text-5xl font-bold tabular-nums text-neutral-800", "24:59"],
  ["Mode label", "text-xl font-bold tracking-wide uppercase", "Focus"],
  ["Popup title", "text-xl font-bold text-neutral-800", "Automatic Pomodoro Focus Timer"],
  ["Field label", "text-sm font-medium text-neutral-600", "Number of rounds"],
  ["Body / helper", "text-sm text-neutral-400", "Start once: 25-minute focus rounds..."],
  ["Button text", "font-medium", "Add 4 rounds"],
  ["Log line", "text-xs", "focus 10:00 – 10:25"],
  ["Credit", "text-[10px]", "Made by Elena Kovelskikh"],
];

function Typography() {
  return (
    <div className="flex flex-col gap-5">
      {rows.map(([name, cls, sample]) => (
        <div key={name} className="flex flex-col gap-1">
          <div className="text-xs text-neutral-400">{name} · <code>{cls}</code></div>
          <div className={cls}>{sample}</div>
        </div>
      ))}
    </div>
  );
}

export default { title: "Foundations/Typography", component: Typography, parameters: { layout: "padded" } };
export const Scale = {};

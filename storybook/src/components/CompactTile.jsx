import React from "react";
import { MODES, formatTime } from "../tokens";

// Discord Activity only: what the Activity shows as a small tile (about 150px square on a phone)
// when it's minimised next to the participants' video. The full layout doesn't fit there, so the
// tile gets the top of the full view — mode label and ring, with the same contents and proportions
// — scaled to the space there is, without the controls. Sizes are scaled inline (the text styles'
// fixed sizes wouldn't fit); colors are tokens. The caption is the one thing not scaled all the
// way down, since 14px would become unreadable.
//
// state: "notStarted" | "running" | "paused" | "transition" (a segment just ended) | "done"
export function CompactTile({ width = 150, height = 150, mode = "focus", state = "running", progress = 0.35, secondsLeft = 975, round = 1, completed = 0 }) {
  const { label, arc: arcColor, accent, accentHover } = MODES[mode];
  const k = Math.min((width * 0.92) / 288, (height * 0.92) / (20 + 24 + 288));
  const px = (n) => n * k;
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const done = state === "done";
  const transition = state === "transition";
  const emoji = done ? ["🎉"] : transition ? [mode === "focus" ? "💪" : mode === "break" ? "🙌" : "🔋"] : [].concat(MODES[mode].emoji);
  const caption = done
    ? `${completed} completed`
    : transition
    ? mode === "focus" ? "Focus round complete" : mode === "break" ? "Break complete" : "Long break complete"
    : state === "notStarted"
    ? "Not started"
    : state === "paused"
    ? "Paused"
    : mode === "focus"
    ? `Round ${round}`
    : "";
  return (
    <div
      className="flex flex-col items-center justify-center bg-page overflow-hidden"
      style={{ width, height, "--mode-accent": accent, "--mode-accent-hover": accentHover }}
    >
      <div className="font-bold tracking-wide uppercase text-mode" style={{ fontSize: px(20), lineHeight: 1 }}>
        {done ? "Done" : label}
      </div>
      <div className={`relative ${transition ? "animate-pulse" : ""}`} style={{ width: px(288), height: px(288), marginTop: px(24) }}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 280 280" aria-hidden="true" focusable="false">
          <circle cx="140" cy="140" r={radius} fill="none" className="stroke-ring-track" strokeWidth="10" />
          {!done && secondsLeft > 0 && (
            <circle
              cx="140" cy="140" r={radius} fill="none" stroke={arcColor} strokeWidth="10"
              strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference * progress}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center" style={{ gap: px(4), height: px(30), marginBottom: px(12) }} aria-hidden="true">
            {emoji.map((e, i) => (
              <span key={i} style={{ fontSize: px(30), lineHeight: 1 }}>{e}</span>
            ))}
          </div>
          {!done && !transition && (
            <div className="font-bold tabular-nums text-primary" style={{ fontSize: px(48), lineHeight: 1 }}>
              {formatTime(secondsLeft)}
            </div>
          )}
          <div className="flex items-center justify-center text-secondary" style={{ fontSize: Math.max(8, px(14)), lineHeight: 1, height: px(30), marginTop: px(12) }}>
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
}

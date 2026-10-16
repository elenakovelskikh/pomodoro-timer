import React, { useId } from "react";
import { MODES, formatTime } from "../tokens";

// Pure view of the timer ring: everything it shows comes from props, no timers or state.
export function TimerRing({ mode = "work", progress = 0, secondsLeft = 25 * 60, completedCycles = 0, isTransitioning = false }) {
  // unique ids so several rings on one page (e.g. a docs page) don't share a gradient/clip
  const uid = useId().replace(/:/g, "");
  const shadowId = `ring-tip-shadow-${uid}`;
  const bandId = `ring-band-${uid}`;

  const { shadowColor, arcColor } = MODES[mode];
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * progress;
  const tipDeg = (1 - progress) * 360;
  const shadowDeg = 1.5;
  const shadowCenter = {
    x: 140 + radius * Math.cos((shadowDeg * Math.PI) / 180),
    y: 140 + radius * Math.sin((shadowDeg * Math.PI) / 180),
  };
  const centerLabel = mode === "work" ? `Round ${completedCycles + 1}` : "";

  return (
    <div className={`relative w-72 h-72 ${isTransitioning ? "animate-pulse" : ""}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 280 280">
        <defs>
          <radialGradient id={shadowId}>
            <stop offset="0%" stopColor={shadowColor} stopOpacity="0.25" />
            <stop offset="45%" stopColor={shadowColor} stopOpacity="0.07" />
            <stop offset="100%" stopColor={shadowColor} stopOpacity="0" />
          </radialGradient>
          <clipPath id={bandId}>
            <path
              clipRule="evenodd"
              d={`M 140 ${140 - radius - 5} a ${radius + 5} ${radius + 5} 0 1 0 0.01 0 Z
                  M 140 ${140 - radius + 5} a ${radius - 5} ${radius - 5} 0 1 0 0.01 0 Z`}
            />
          </clipPath>
        </defs>
        <circle cx="140" cy="140" r={radius} fill="none" stroke="#EBECF0" strokeWidth="10" />
        <circle
          cx="140" cy="140" r={radius} fill="none" stroke={arcColor} strokeWidth="10"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashoffset}
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <g
          style={{
            transform: `rotate(${tipDeg}deg)`,
            transformOrigin: "140px 140px",
            transition: "transform 1s linear",
            display: secondsLeft > 0 ? undefined : "none",
          }}
        >
          <circle cx={shadowCenter.x} cy={shadowCenter.y} r="8" fill={`url(#${shadowId})`} clipPath={`url(#${bandId})`} />
          <circle cx={140 + radius} cy="140" r="5" fill={arcColor} />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {isTransitioning ? (
          <>
            <div style={{ fontSize: "30px", lineHeight: "34px" }}>{mode === "work" ? "💪" : mode === "break" ? "🙌" : "🔋"}</div>
            <div className="text-sm text-neutral-400 mt-1">
              {mode === "work" ? "Focus round complete" : mode === "break" ? "Break complete" : "Long break complete"}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-1" style={{ height: "30px", marginBottom: "12px" }}>
              {Array.isArray(MODES[mode].emoji) ? (
                MODES[mode].emoji.map((e, i) => (
                  <span key={i} style={{ fontSize: "30px", lineHeight: "30px" }}>{e}</span>
                ))
              ) : (
                <span style={{ fontSize: "30px", lineHeight: "30px" }}>{MODES[mode].emoji}</span>
              )}
            </div>
            <div className="text-5xl font-bold tabular-nums text-neutral-800">{formatTime(secondsLeft)}</div>
            <div className="flex items-center justify-center text-sm text-neutral-400" style={{ height: "30px", marginTop: "12px" }}>
              {centerLabel}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

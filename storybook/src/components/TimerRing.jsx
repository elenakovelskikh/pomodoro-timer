import React, { useId } from "react";
import { MODES, PALETTE, formatTime } from "../tokens";

// Pure view of the timer ring: everything it shows comes from props, no timers or state.
// `round` is the "Round N" caption under the time; it only shows in Focus.
export function TimerRing({ mode = "focus", progress = 0, secondsLeft = 25 * 60, round = 1, isTransitioning = false }) {
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
        <circle cx="140" cy="140" r={radius} fill="none" stroke={PALETTE.neutral[150]} strokeWidth="10" />
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
            <div className="text-emoji leading-[2.125rem]">{mode === "focus" ? "💪" : mode === "break" ? "🙌" : "🔋"}</div>
            <div className="text-body text-muted mt-1">
              {mode === "focus" ? "Focus round complete" : mode === "break" ? "Break complete" : "Long break complete"}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-1 h-[1.875rem] mb-3">
              {Array.isArray(MODES[mode].emoji) ? (
                MODES[mode].emoji.map((e, i) => <span key={i} className="text-emoji">{e}</span>)
              ) : (
                <span className="text-emoji">{MODES[mode].emoji}</span>
              )}
            </div>
            <div className="text-display tabular-nums text-primary">{formatTime(secondsLeft)}</div>
            <div className="flex items-center justify-center text-body text-muted h-[1.875rem] mt-3">
              {mode === "focus" ? `Round ${round}` : ""}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import React, { useId } from "react";
import { RETRO_MODES, roleFor, formatTime, formatShort } from "../tokens";

// Pure view of the retro speaker timer's ring: Speaker for 5 minutes, Commentator for 2.
// secondsLeft goes below zero once the time is up: the time then stays at 00:00 with an empty ring,
// and the caption says how long the whole turn has taken ("over time · total 6:15").
export function SpeakerRing({ minutes = 5, secondsLeft = 5 * 60 }) {
  const uid = useId().replace(/:/g, "");
  const shadowId = `speaker-tip-shadow-${uid}`;
  const bandId = `speaker-band-${uid}`;

  const overtime = secondsLeft <= 0;
  const { emoji, arc: arcColor, shadow: shadowColor } = RETRO_MODES[roleFor(minutes)];
  const total = minutes * 60;
  const progress = overtime ? 1 : Math.min(1, Math.max(0, 1 - secondsLeft / total));
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const tipDeg = (1 - progress) * 360;
  const shadowDeg = 1.5;
  const shadowCenter = {
    x: 140 + radius * Math.cos((shadowDeg * Math.PI) / 180),
    y: 140 + radius * Math.sin((shadowDeg * Math.PI) / 180),
  };

  return (
    <div className="relative w-72 h-72">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 280 280" aria-hidden="true" focusable="false">
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
        <circle cx="140" cy="140" r={radius} fill="none" className="stroke-ring-track" strokeWidth="10" />
        <circle
          cx="140" cy="140" r={radius} fill="none" stroke={arcColor} strokeWidth="10"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference * progress}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s" }}
        />
        <g
          style={{
            transform: `rotate(${tipDeg}deg)`,
            transformOrigin: "140px 140px",
            transition: "transform 1s linear",
            display: overtime ? "none" : undefined,
          }}
        >
          <circle cx={shadowCenter.x} cy={shadowCenter.y} r="8" fill={`url(#${shadowId})`} clipPath={`url(#${bandId})`} />
          <circle cx={140 + radius} cy="140" r="5" fill={arcColor} />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-[1.875rem] mb-3" aria-hidden="true">
          <span className="type-emoji">{emoji}</span>
        </div>
        <div className="type-display tabular-nums text-primary">{formatTime(Math.max(0, secondsLeft))}</div>
        <div className="flex items-center justify-center type-body text-secondary h-[1.875rem] mt-3">
          {overtime ? `over time · total ${formatShort(total - secondsLeft)}` : formatShort(total)}
        </div>
      </div>
    </div>
  );
}

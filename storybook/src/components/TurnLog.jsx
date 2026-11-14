import React from "react";
import { RETRO_MODES, formatTime } from "../tokens";

// Retro page: finished speaker and commentator turns, grouped by the meeting round (the Pomodoro's
// "Round N") they happened in. Same look as HistoryLog: the name, then the time in monospace.
//   log: [{ round, turns: [{ role: "speaker" | "commentator", seconds, limit }, …] }, …]
export function TurnLog({ log = [] }) {
  return (
    <div className="flex flex-col items-start gap-3 mt-4 text-left">
      {log.map(({ round, turns }) => (
        <div key={round} className="flex flex-col items-start gap-0.5">
          <div className="type-caption text-primary">Round {round}</div>
          {turns.map((t, i) => (
            <div key={i} className="flex type-caption text-secondary">
              <span className="inline-block w-24">{RETRO_MODES[t.role].label}</span>
              <span className="font-mono">
                {formatTime(t.seconds)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { formatClock } from "../tokens";

export function HistoryLog({ history }) {
  return (
    <div className="flex flex-col items-start gap-0.5 mt-4 text-left">
      {history.map((entry, i) => {
        const label = entry.type === "focus" ? "focus" : entry.type === "break" ? "break" : "long break";
        return (
          <div key={i} className="flex type-caption text-secondary">
            <span className="inline-block w-20">{label}</span>
            <span className="tabular-nums">
              {formatClock(entry.start)} – {formatClock(entry.end)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

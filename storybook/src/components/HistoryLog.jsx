import React from "react";
import { formatClock } from "../tokens";
export function HistoryLog({ history }) {
  return (
    <div className="flex flex-col items-start gap-0.5 mt-4 text-left">
      {history.map((entry, i) => {
        const label = entry.type === "focus" ? "focus" : entry.type === "break" ? "break" : "long break";
        return (
          <div key={i} className="flex text-xs" style={{ color: "#737373" }}>
            <span className="inline-block" style={{ width: "80px" }}>{label}</span>
            <span className="font-mono">
              {formatClock(entry.start)} – {formatClock(entry.end)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

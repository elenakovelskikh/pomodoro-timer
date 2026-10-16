import React from "react";
import { MODES } from "../tokens";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "./Icons";

// Reset / play-pause / skip. buttonLabel is "Start", "Resume" or "Pause"; Pause gets the gray
// look, the other two get the mode's color and its colored shadow.
export function ControlRow({ mode = "work", buttonLabel = "Start", disabled = false, onReset, onToggle, onSkip }) {
  const { color, shadowColor } = MODES[mode];
  const looksActive = buttonLabel === "Pause";
  return (
    <div className="flex items-center gap-5">
      <button
        onClick={onReset}
        disabled={disabled}
        className="flex items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ height: "44px", width: "44px" }}
        title="Reset current round"
      >
        <RotateCcwIcon size={20} />
      </button>
      <button
        onClick={onToggle}
        disabled={disabled}
        aria-label={buttonLabel}
        title={buttonLabel}
        className={`flex items-center justify-center rounded-full disabled:opacity-40 disabled:cursor-not-allowed ${
          looksActive ? "bg-neutral-200 text-neutral-600 hover:bg-neutral-300" : "text-white"
        }`}
        style={{
          height: "56px",
          width: "56px",
          ...(looksActive ? {} : { backgroundColor: color, boxShadow: `0 2px 8px -2px ${shadowColor}59` }),
        }}
      >
        {looksActive ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
      </button>
      <button
        onClick={onSkip}
        disabled={disabled}
        className="flex items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ height: "44px", width: "44px" }}
        title="Skip"
      >
        <SkipForwardIcon size={20} />
      </button>
    </div>
  );
}

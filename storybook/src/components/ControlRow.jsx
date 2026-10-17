import React from "react";
import { MODES } from "../tokens";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "./Icons";

// Reset / play-pause / skip. buttonLabel is "Pause", "Resume" or "Start"; Pause gets the gray
// look, the other two the mode color (bg-mode / bg-mode-hover, from CSS variables) and its shadow.
export function ControlRow({ mode = "focus", buttonLabel = "Pause", disabled = false, onReset, onPlayPause, onSkip }) {
  const { shadowColor } = MODES[mode];
  const looksActive = buttonLabel === "Pause";
  const secondary = "flex items-center justify-center rounded-full bg-control text-on-control hover:text-on-control-hover hover:bg-control-hover disabled:opacity-40 disabled:cursor-not-allowed h-11 w-11";
  return (
    <div className="flex items-center gap-5">
      <button onClick={onReset} disabled={disabled} className={secondary} title="Reset current round">
        <RotateCcwIcon size={20} />
      </button>
      <button
        onClick={onPlayPause}
        disabled={disabled}
        aria-label={buttonLabel}
        title={buttonLabel}
        className={`flex items-center justify-center h-14 w-14 rounded-full disabled:opacity-40 disabled:cursor-not-allowed ${
          looksActive ? "bg-control text-on-control hover:text-on-control-hover hover:bg-control-hover" : "bg-mode hover:bg-mode-hover text-on-color"
        }`}
        style={looksActive ? undefined : { boxShadow: `0 2px 8px -2px ${shadowColor}59` }}
      >
        {looksActive ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
      </button>
      <button onClick={onSkip} disabled={disabled} className={secondary} title="Skip">
        <SkipForwardIcon size={20} />
      </button>
    </div>
  );
}

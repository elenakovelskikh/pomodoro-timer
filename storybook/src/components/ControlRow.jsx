import React from "react";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "./Icons";
import { IconButton } from "./IconButton";

// Reset / play-pause / skip. buttonLabel is "Pause", "Resume" or "Start": Pause is gray,
// Start and Resume are in the mode color.
export function ControlRow({ mode = "focus", buttonLabel = "Pause", disabled = false, onReset, onPlayPause, onSkip }) {
  const running = buttonLabel === "Pause";
  return (
    <div className="flex items-center gap-5">
      <IconButton icon={<RotateCcwIcon size={20} />} label="Reset current round" disabled={disabled} onClick={onReset} />
      <IconButton
        icon={running ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
        label={buttonLabel}
        variant={running ? "secondary" : "mode"}
        size="lg"
        mode={mode}
        disabled={disabled}
        onClick={onPlayPause}
      />
      <IconButton icon={<SkipForwardIcon size={20} />} label="Skip" disabled={disabled} onClick={onSkip} />
    </div>
  );
}

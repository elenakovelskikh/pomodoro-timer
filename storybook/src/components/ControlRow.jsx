import React from "react";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon, StopIcon } from "./Icons";
import { IconButton } from "./IconButton";

// Reset / play-pause / skip. buttonLabel is "Pause", "Resume" or "Start": Pause is gray,
// Start and Resume are in the mode color. The retro speaker timer has Stop instead of Skip: it ends
// the turn and keeps the final time on screen; it's off until the turn has started.
export function ControlRow({ mode = "focus", buttonLabel = "Pause", disabled = false, endButton = "skip", stopDisabled = false, onReset, onPlayPause, onSkip, onStop }) {
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
      {endButton === "stop" ? (
        <IconButton icon={<StopIcon size={20} />} label="Stop" disabled={disabled || stopDisabled} onClick={onStop} />
      ) : (
        <IconButton icon={<SkipForwardIcon size={20} />} label="Skip" disabled={disabled} onClick={onSkip} />
      )}
    </div>
  );
}

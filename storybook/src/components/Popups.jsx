import React from "react";
import { LONG_BREAK_OPTIONS, START_WITH_OPTIONS } from "../tokens";
import { RadioGroup } from "./RadioGroup";
import { RoundsStepper } from "./RoundsStepper";
import { PrimaryButton } from "./PrimaryButton";
import { TextButton } from "./TextButton";

// `inline` renders the card in normal flow (for Storybook); without it the card covers the
// screen with the white veil, like in the app.
function PopupFrame({ children, inline }) {
  const card = (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-neutral-200 shadow-xl p-6 flex flex-col items-center gap-6">
      {children}
    </div>
  );
  if (inline) return card;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
      {card}
    </div>
  );
}

export function SetupPopup({ roundsLimit = null, onRoundsChange, longBreakMinutes = 30, onLongBreakChange, onStart, inline = false }) {
  return (
    <PopupFrame inline={inline}>
      <div className="w-full text-left">
        <div className="text-xl font-bold text-neutral-800">Automatic Pomodoro Focus Timer</div>
        <div className="text-sm text-neutral-400 mt-3">
          Start once: 25&#8209;minute focus rounds and 5&#8209;minute breaks switch automatically, each
          one is logged and ends with a sound alert. Every 4th round gets an optional longer break.
        </div>
      </div>
      <RoundsStepper value={roundsLimit} onChange={onRoundsChange} />
      <RadioGroup
        label="Long break length"
        options={LONG_BREAK_OPTIONS}
        value={longBreakMinutes}
        onChange={onLongBreakChange}
        pillClassName="px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap"
      />
      <PrimaryButton onClick={onStart}>Start</PrimaryButton>
    </PopupFrame>
  );
}

export function AddRoundsPopup({
  amount = 4, onAmountChange,
  startsWithBreak = true, onStartsWithBreakChange,
  longBreakMinutes = 30, onLongBreakChange,
  onConfirm, onCancel, inline = false,
}) {
  return (
    <PopupFrame inline={inline}>
      <RoundsStepper label="How many more rounds?" value={amount} onChange={onAmountChange} />
      <RadioGroup
        label="Start with"
        options={START_WITH_OPTIONS}
        value={startsWithBreak}
        onChange={onStartsWithBreakChange}
        pillClassName="px-6 py-3 rounded-xl text-sm font-medium"
      />
      <RadioGroup
        label="Long break length"
        options={LONG_BREAK_OPTIONS}
        value={longBreakMinutes}
        onChange={onLongBreakChange}
        pillClassName="px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap"
      />
      <div className="w-full flex flex-col items-center gap-1">
        <PrimaryButton onClick={onConfirm}>
          {amount === null ? "Continue without a limit" : amount === 1 ? "Add 1 round" : `Add ${amount} rounds`}
        </PrimaryButton>
        <TextButton wide onClick={onCancel}>Cancel</TextButton>
      </div>
    </PopupFrame>
  );
}

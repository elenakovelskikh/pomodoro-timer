import React from "react";
import { LONG_BREAK_OPTIONS, START_WITH_OPTIONS } from "../tokens";
import { RadioGroup } from "./RadioGroup";
import { RoundsStepper } from "./RoundsStepper";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

// Base popup: optional title, text and controls (children), a required primary button and an
// optional secondary (gray) one to its left. `inline` renders just the card in normal flow (for Storybook);
// without it the card sits over the page on the white veil, like in the app.
export function Popup({ title, description, children, primaryLabel = "Button", onPrimary, secondaryLabel, onSecondary, inline = false }) {
  const card = (
    <div className="w-full max-w-sm bg-page rounded-2xl border border-subtle shadow-xl p-6 flex flex-col items-center gap-6">
      {(title || description) && (
        <div className="w-full text-left">
          {title && <div className="text-heading text-primary">{title}</div>}
          {description && <div className={`text-body text-muted ${title ? "mt-3" : ""}`}>{description}</div>}
        </div>
      )}
      {children}
      {secondaryLabel ? (
        // One row (secondary hugging its label, primary taking the rest) while both labels fit on
        // one line; once they don't, the primary wraps onto its own line and wrap-reverse puts it
        // above the secondary, both full width. The 1 : 999 grow ratio keeps the secondary hugging.
        <div className="w-full flex flex-wrap-reverse gap-2">
          <div className="grow"><SecondaryButton onClick={onSecondary}>{secondaryLabel}</SecondaryButton></div>
          <div className="grow-[999]"><PrimaryButton onClick={onPrimary}>{primaryLabel}</PrimaryButton></div>
        </div>
      ) : (
        <PrimaryButton onClick={onPrimary}>{primaryLabel}</PrimaryButton>
      )}
    </div>
  );
  if (inline) return card;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-overlay">
      {card}
    </div>
  );
}

export function SetupPopup({ roundsLimit = null, onRoundsChange, longBreakMinutes = 30, onLongBreakChange, onStart, inline = false }) {
  return (
    <Popup
      inline={inline}
      title="Automatic Pomodoro Focus Timer"
      description={
        <>
          Start once: 25&#8209;minute focus rounds and 5&#8209;minute breaks switch automatically, each
          one is logged and ends with a sound alert. Every 4th round gets an optional longer break.
        </>
      }
      primaryLabel="Start"
      onPrimary={onStart}
    >
      <RoundsStepper value={roundsLimit} onChange={onRoundsChange} />
      <RadioGroup
        label="Long break length"
        options={LONG_BREAK_OPTIONS}
        value={longBreakMinutes}
        onChange={onLongBreakChange}
      />
    </Popup>
  );
}

export function AddRoundsPopup({
  amount = 4, onAmountChange,
  startsWithBreak = true, onStartsWithBreakChange,
  longBreakMinutes = 30, onLongBreakChange,
  onConfirm, onCancel, inline = false,
}) {
  return (
    <Popup
      inline={inline}
      primaryLabel={amount === null ? "Continue without a limit" : amount === 1 ? "Add 1 round" : `Add ${amount} rounds`}
      onPrimary={onConfirm}
      secondaryLabel="Cancel"
      onSecondary={onCancel}
    >
      <RoundsStepper label="How many more rounds?" value={amount} onChange={onAmountChange} />
      <RadioGroup
        label="Start with"
        options={START_WITH_OPTIONS}
        value={startsWithBreak}
        onChange={onStartsWithBreakChange}
      />
      <RadioGroup
        label="Long break length"
        options={LONG_BREAK_OPTIONS}
        value={longBreakMinutes}
        onChange={onLongBreakChange}
      />
    </Popup>
  );
}

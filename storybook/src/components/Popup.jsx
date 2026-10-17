import React, { useId } from "react";
import { Button } from "./Button";

// Popup: optional title and text, controls (children), a required primary button and an optional
// secondary (gray) one to its left. It's a modal dialog named by its title and described by its text. `inline` renders just
// the card in normal flow (for Storybook); without it the card sits over the page on the white veil.
export function Popup({ title, description, children, primaryLabel = "Button", onPrimary, secondaryLabel, onSecondary, inline = false }) {
  const titleId = useId();
  const descriptionId = useId();
  const card = (
    <div
      role="dialog"
      aria-modal={inline ? undefined : "true"}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      className="w-full max-w-sm bg-page rounded-2xl border border-subtle shadow-xl p-6 flex flex-col items-center gap-6"
    >
      {(title || description) && (
        <div className="w-full text-left">
          {title && <h2 id={titleId} className="type-heading text-primary">{title}</h2>}
          {description && <p id={descriptionId} className={`type-body text-secondary ${title ? "mt-3" : ""}`}>{description}</p>}
        </div>
      )}
      {children}
      {secondaryLabel ? (
        // One row (secondary hugging its label, primary taking the rest) while both labels fit on
        // one line; once they don't, the primary wraps onto its own line and wrap-reverse puts it
        // above the secondary, both full width. The 1 : 999 grow ratio keeps the secondary hugging.
        <div className="w-full flex flex-wrap-reverse gap-2">
          <div className="grow"><Button variant="secondary" onClick={onSecondary}>{secondaryLabel}</Button></div>
          <div className="grow-[999]"><Button variant="primary" onClick={onPrimary}>{primaryLabel}</Button></div>
        </div>
      ) : (
        <Button variant="primary" onClick={onPrimary}>{primaryLabel}</Button>
      )}
    </div>
  );
  if (inline) return card;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-overlay">{card}</div>;
}

import React from "react";

// Discord Activity only: the dark notice at the top of the screen about the shared timer's
// connection. Nothing is shown while synced. `inline` renders it in normal flow (for Storybook);
// in the Activity it sits fixed at the top of the screen. It's a status region, so screen readers
// announce changes.
const PROBLEMS = {
  discord: "Discord didn't connect the Activity.",
  load: "The sync service didn't load.",
  denied: "The room couldn't be opened.",
  offline: "No connection to the room.",
};

export function SyncNotice({ status = "connecting", problem = "offline", onRetry, inline = false }) {
  const text =
    status === "connecting"
      ? "Connecting… Until then, this timer is only on your screen."
      : status === "failed"
      ? `Not synced. ${PROBLEMS[problem] ?? ""} This timer is only on your screen.`
      : status === "reconnecting"
      ? "Reconnecting…"
      : null;
  return (
    <div
      className={`${inline ? "" : "fixed top-2 left-0 z-[60]"} w-full flex justify-center px-4 pointer-events-none`}
      role="status"
    >
      {text && (
        <div className="pointer-events-auto max-w-sm px-3 py-1 rounded-2xl bg-notice text-notice type-caption text-center">
          {text}
          {status === "failed" && (
            <>
              {" "}
              <button onClick={onRetry} className="underline font-medium">Try again</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

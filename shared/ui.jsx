// Shared by the website (index.html) and the Discord Activity (discord/index.html): constants,
// sounds, icons and the UI pieces both screens use. Loaded as a text/babel script before each
// page's own script; Babel's preset turns these top-level declarations into globals the page
// script then uses. Each page keeps its own modes and session logic.
//
// HistoryLog takes start/end as Dates or timestamps (the Activity's shared state stores numbers).
// playSound / SOUND_DURATION_MS kinds: "focusEnd" (a focus round just finished), "breakEnd".

const { useState, useEffect, useRef, useCallback, useId } = React;

const BREAK_MIN = 5;
const LONG_BREAK_MIN = 30;
const CYCLES_BEFORE_LONG_BREAK = 4;

// null = no long break at all — every 4th round just gets the regular short break instead
const LONG_BREAK_OPTIONS = [
  { value: 15, label: "15 min" },
  { value: 30, label: "30 min" },
  { value: null, label: "None" },
];

const START_WITH_OPTIONS = [
  { value: true, label: "Break" },
  { value: false, label: "Focus" },
];

const COMPLETION_HEADINGS = ["Great job!", "Nice work!", "You crushed it!", "Well done!", "Way to go!", "Amazing focus!"];


function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function formatClock(date) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

const N = { G4:392.00, A4:440.00, C5:523.25, D5:587.33, E5:659.25, G5:783.99, A5:880.00, C6:1046.50, D6:1174.66, E6:1318.51, G6:1567.98 };

// One audio context for the page. Browsers only let it play after the person has clicked or
// pressed a key, so it's (re)started on every such input.
let audioCtx = null;
function audio() {
  audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
}
["pointerdown", "keydown"].forEach((type) => document.addEventListener(type, audio, true));

// Plays the notes now, or delayMs from now; returns a function that cancels them. A sound booked
// ahead is played by the browser's audio engine on its own, so it comes on time even while the
// page is in the background and its timers only run about once a minute.
function playNotes(notes, delayMs = 0) {
  const ctx = audio();
  const out = ctx.createGain();
  out.connect(ctx.destination);
  const now = ctx.currentTime + Math.max(0, delayMs) / 1000;
  notes.forEach(({ freq, start, dur, gain = 0.22, type = "sine" }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = now + start;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(g);
    g.connect(out);
    osc.start(t0);
    osc.stop(t0 + dur);
  });
  return () => out.disconnect();
}

const FANFARE_EXTENDED = [
  { freq: N.G4, start: 0,    dur: 0.2 },
  { freq: N.C5, start: 0.15, dur: 0.2 },
  { freq: N.E5, start: 0.30, dur: 0.2 },
  { freq: N.G5, start: 0.45, dur: 0.2 },
  { freq: N.C6, start: 0.60, dur: 0.2 },
  { freq: N.E6, start: 0.75, dur: 0.2 },
  { freq: N.G6, start: 0.90, dur: 0.25 },
  { freq: N.C6, start: 1.10, dur: 0.8 },
];

const PENTATONIC_CLIMB = [
  { freq: N.C5, start: 0,    dur: 0.22 },
  { freq: N.D5, start: 0.16, dur: 0.22 },
  { freq: N.E5, start: 0.32, dur: 0.22 },
  { freq: N.G5, start: 0.48, dur: 0.22 },
  { freq: N.A5, start: 0.64, dur: 0.22 },
  { freq: N.C6, start: 0.80, dur: 0.6 },
];

function playSound(kind, delayMs = 0) {
  // kind: "focusEnd" — a focus round just finished, "breakEnd" — a break just finished
  return playNotes(kind === "focusEnd" ? FANFARE_EXTENDED : PENTATONIC_CLIMB, delayMs);
}

// how long each melody actually plays, used to hold off starting the next round
const SOUND_DURATION_MS = { focusEnd: 1900, breakEnd: 1400 };

// size is given in px at the default 16px root font size and rendered in rem, so icons scale with text
function Icon({ children, size = 18, className, style }) {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      className={className}
      style={{ width: `${size / 16}rem`, height: `${size / 16}rem`, ...style }}
    >
      {children}
    </svg>
  );
}
const PlayIcon = (props) => <Icon {...props}><polygon points="6 3 20 12 6 21 6 3" /></Icon>;
const PauseIcon = (props) => <Icon {...props}><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></Icon>;
const RotateCcwIcon = (props) => <Icon {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></Icon>;
const SkipForwardIcon = (props) => <Icon {...props}><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></Icon>;
const ChevronDownIcon = (props) => <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
const ChevronUpIcon = (props) => <Icon {...props}><path d="m18 15-6-6-6 6" /></Icon>;
const MinusIcon = (props) => <Icon {...props}><line x1="5" y1="12" x2="19" y2="12" /></Icon>;
const PlusIcon = (props) => <Icon {...props}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Icon>;

// A proper ARIA radiogroup: one tab stop for the whole group (only the checked option is in the
// tab order), Left/Up and Right/Down move the checked option and keyboard focus together.
// The keyboard focus ring is the same as on every other button (see the <style> block).
function RadioGroup({ label, options, value, onChange }) {
  function handleKeyDown(e) {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const idx = options.findIndex((o) => o.value === value);
    const nextIdx = (idx + dir + options.length) % options.length;
    onChange(options[nextIdx].value);
    e.currentTarget.querySelectorAll('[role="radio"]')[nextIdx]?.focus();
  }

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="type-control text-label">{label}</div>
      <div role="radiogroup" aria-label={label} onKeyDown={handleKeyDown} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(opt.value)}
              className={`px-6 py-3 rounded-xl type-control whitespace-nowrap ${
                selected
                  ? "ring-2 ring-inset ring-radio-selected bg-radio-selected text-radio-selected"
                  : "ring-1 ring-inset ring-radio hover:ring-radio-hover text-button-tertiary hover:text-button-tertiary-hover"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HistoryLog({ history }) {
  return (
    <div className="flex flex-col items-start gap-0.5 mt-4 text-left">
      {history.map((entry, i) => {
        const label = entry.type === "focus" ? "focus" : entry.type === "break" ? "break" : "long break";
        return (
          <div key={i} className="flex type-caption text-secondary">
            <span className="inline-block w-20">{label}</span>
            <span className="font-mono">
              {formatClock(new Date(entry.start))} – {formatClock(new Date(entry.end))}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// The links are 24px tall (WCAG 2.5.8 minimum target size) even though the text is 10px;
// the row's padding is trimmed to match, so the footer keeps its height.
// privacyHref: the page's privacy policy — the site's own relative page; the Activity passes a full
// address, since inside Discord only full links open (in the browser, through Discord).
function Credit({ inert, privacyHref = "privacy.html" }) {
  const link = "inline-flex items-center min-h-6 hover:text-label underline";
  return (
    <footer
      inert={inert ? "" : undefined}
      className="w-full flex items-center justify-center gap-1 py-[0.6875rem] type-credit text-muted"
    >
      <span>Made by Elena Kovelskikh</span>
      <span aria-hidden="true">·</span>
      <a href="https://www.linkedin.com/in/kovelskikh/" target="_blank" rel="noopener noreferrer" className={link}>
        LinkedIn<span className="sr-only"> (opens in a new tab)</span>
      </a>
      <span aria-hidden="true">·</span>
      <a href="https://github.com/elenakovelskikh" target="_blank" rel="noopener noreferrer" className={link}>
        GitHub<span className="sr-only"> (opens in a new tab)</span>
      </a>
      <span aria-hidden="true">·</span>
      <a href={privacyHref} target="_blank" rel="noopener noreferrer" className={link}>
        Privacy<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </footer>
  );
}

// The page moves focus itself in a few places (into a popup, back out, to Play/Pause), which
// screen readers rely on. Browsers then show the keyboard focus ring even after a tap or click,
// so when the last input was a pointer, the element is marked to hide the ring until a key
// is pressed or focus leaves it.
let lastInputWasPointer = false;
document.addEventListener("pointerdown", () => { lastInputWasPointer = true; }, true);
document.addEventListener("keydown", () => {
  lastInputWasPointer = false;
  delete document.activeElement?.dataset?.quietFocus;
}, true);
function moveFocus(el) {
  if (!el?.focus) return;
  if (lastInputWasPointer) {
    el.dataset.quietFocus = "";
    el.addEventListener("blur", () => delete el.dataset.quietFocus, { once: true });
  }
  el.focus();
}

// Rounds picker: − / value / +. value is a number of rounds or null for "no limit" (∞).
// The value is a polite live region, read out after each press.
function RoundsStepper({ label, value, onChange }) {
  const labelId = useId();
  const noLimit = value === null;
  // The values go round in a loop: ∞ → 1 → 2 → … → 16 → ∞. "No limit" counts as more than 16,
  // so "+" at 16 gives ∞ and "−" at ∞ gives 16; "+" at ∞ starts again from 1, "−" at 1 gives ∞.
  // Neither button is ever disabled.
  const fewer = () => onChange(noLimit ? 16 : value === 1 ? null : value - 1);
  const more = () => onChange(noLimit ? 1 : value === 16 ? null : value + 1);
  const step =
    "w-11 h-11 flex items-center justify-center bg-button-secondary text-button-secondary hover:text-button-secondary-hover hover:bg-button-secondary-hover";
  return (
    <div role="group" aria-labelledby={labelId} className="w-full flex flex-col items-start gap-2">
      <div id={labelId} className="type-control text-label">{label}</div>
      <div className="flex items-stretch rounded-xl border border-subtle">
        <button type="button" aria-label="Fewer rounds" onClick={fewer} className={`${step} rounded-l-xl`}>
          <MinusIcon size={20} />
        </button>
        <span className="w-24 flex items-center justify-center border-x border-subtle" aria-live="polite" aria-atomic="true">
          <span className="flex items-baseline gap-1.5 tabular-nums">
            {noLimit ? (
              <>
                <span className="type-heading text-primary" aria-hidden="true">∞</span>
                <span className="sr-only">No limit</span>
              </>
            ) : (
              <>
                <span className="type-heading text-primary">{value}</span>
                <span className="type-body text-primary">{value === 1 ? "round" : "rounds"}</span>
              </>
            )}
          </span>
        </span>
        <button type="button" aria-label="More rounds" onClick={more} className={`${step} rounded-r-xl`}>
          <PlusIcon size={20} />
        </button>
      </div>
    </div>
  );
}

// Popup over the page: a modal dialog named by its title, with its text as the description, so
// screen readers read both when it opens. While focus is on the dialog itself (right after it
// opens), Enter runs onSubmit — the primary button with the current settings; once focus is on a
// control, Enter presses that control as usual. enterHint tells screen reader users about it.
// Focus moves into it when it opens and
// goes back to whatever had it before when it closes; Escape closes it if onClose is given.
// The page behind it is made inert by the caller, so Tab can't leave the dialog.
function Dialog({ title, description, enterHint, children, onSubmit, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const hintId = useId();
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    moveFocus(ref.current);
    return () => moveFocus(previous);
  }, []);
  return (
    // The veil scrolls when the popup is taller than the screen (phone in landscape, 200% zoom);
    // otherwise the popup sits in the middle.
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-overlay"
      onKeyDown={onClose ? (e) => e.key === "Escape" && onClose() : undefined}
    >
      <div className="min-h-full flex items-center justify-center p-6">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={[description && descriptionId, enterHint && hintId].filter(Boolean).join(" ") || undefined}
        tabIndex={-1}
        onKeyDown={
          onSubmit
            ? (e) => {
                if (e.key !== "Enter" || e.target !== e.currentTarget) return;
                // otherwise the same keypress also clicks whatever button gets focus next
                e.preventDefault();
                onSubmit();
              }
            : undefined
        }
        className="w-full max-w-[26rem] bg-page rounded-2xl border border-subtle shadow-xl p-6 flex flex-col items-center gap-6 focus:outline-none"
      >
        <div className="w-full text-left">
          <h2 id={titleId} className="type-heading text-primary">{title}</h2>
          {description && <p id={descriptionId} className="type-body text-secondary mt-3">{description}</p>}
          {/* hidden: read only as part of the dialog's description when it opens, so the VoiceOver
              cursor doesn't stop on it (it would frame the whole popup for an invisible element) */}
          {enterHint && <p id={hintId} hidden>{enterHint}</p>}
        </div>
        {children}
      </div>
      </div>
    </div>
  );
}

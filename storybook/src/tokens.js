// Data the components need, mirroring index.html. Colors come from ../../design-tokens.js,
// the same file the site loads, so they can't drift apart.
import "../../design-tokens.js";

export const { PALETTE, MODE_COLORS, THEME, TYPE } = globalThis.DESIGN_TOKENS;

export const FOCUS_MIN = 25;
export const BREAK_MIN = 5;
export const LONG_BREAK_MIN = 30;

export const LONG_BREAK_OPTIONS = [
  { value: 15, label: "15 min" },
  { value: 30, label: "30 min" },
  { value: null, label: "None" },
];

export const START_WITH_OPTIONS = [
  { value: true, label: "Break" },
  { value: false, label: "Focus" },
];

export const MODES = {
  focus: { label: "Focus", minutes: FOCUS_MIN, ...MODE_COLORS.focus, emoji: ["📚", "💻", "✍️"] },
  break: { label: "Break", minutes: BREAK_MIN, ...MODE_COLORS.break, emoji: "☕" },
  longBreak: { label: "Long break", minutes: LONG_BREAK_MIN, ...MODE_COLORS.longBreak, emoji: "🌴" },
};

// Retro page. Left: the meeting's Pomodoro (focus colors, its own name and emoji). Right: the
// speaker (5 min) or commentator (2 min) timer; past zero only its colors change, to overtime.
export const SPEAKER_PRESETS = [2, 5];
export const roleFor = (minutes) => (minutes === 2 ? "commentator" : "speaker");
export const RETRO_MODES = {
  meeting: { label: "Meeting", ...MODE_COLORS.focus, emoji: ["🌞", "🌧️", "🌈"] },
  speaker: { label: "Speaker", ...MODE_COLORS.speaker, emoji: "🎤" },
  commentator: { label: "Commentator", ...MODE_COLORS.speaker, emoji: "💬" },
  overtime: { label: "Over time", ...MODE_COLORS.overtime },
};
// every mode a button or ring can be colored with
export const ALL_MODES = { ...MODES, ...RETRO_MODES };

export function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export function formatClock(date) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

// for captions: 5:00, 12:30
export function formatShort(s) {
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}

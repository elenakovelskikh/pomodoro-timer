export const WORK_MIN = 25;
export const BREAK_MIN = 5;
export const LONG_BREAK_MIN = 30;
export const CYCLES_BEFORE_LONG_BREAK = 4;

export const LONG_BREAK_OPTIONS = [
  { value: 15, label: "15 min" },
  { value: 30, label: "30 min" },
  { value: null, label: "None" },
];

export const START_WITH_OPTIONS = [
  { value: true, label: "Break" },
  { value: false, label: "Focus" },
];

export const COMPLETION_HEADINGS = ["Great job!", "Nice work!", "You crushed it!", "Well done!", "Way to go!", "Amazing focus!"];

export const MODES = {
  work: { label: "Focus", minutes: WORK_MIN, color: "#7c3aed", arcColor: "#d1baf6", shadowColor: "#7738E4", emoji: ["📚", "💻", "✍️"] },
  break: { label: "Break", minutes: BREAK_MIN, color: "#009AE2", arcColor: "#abdef5", shadowColor: "#006DA1", emoji: "☕" },
  longBreak: { label: "Long break", minutes: LONG_BREAK_MIN, color: "#009C99", arcColor: "#ABDEDD", shadowColor: "#007371", emoji: "🌴" },
};

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


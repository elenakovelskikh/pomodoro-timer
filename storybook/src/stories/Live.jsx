import { useState, useEffect } from "react";

// Holds a value the story changes itself when clicked (stepper value, Pause/Resume, log
// open/closed). A React component, so every rendering of a story keeps its own copy: on a docs
// page the top story and its copy in the list are the same story, and Storybook's own state
// (useArgs, its hooks) is shared between them. A change made in the Controls panel still flows in.
//   <Live value={args.value}>{(value, setValue) => …}</Live>
export function Live({ value, children }) {
  const [current, setCurrent] = useState(value);
  useEffect(() => setCurrent(value), [value]);
  return children(current, setCurrent);
}

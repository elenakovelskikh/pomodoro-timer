// Storybook's own useState/useEffect: they can be combined with useArgs in a story, React's can't.
import { useArgs, useState, useEffect } from "storybook/preview-api";

// An arg the story changes itself when clicked (stepper value, Pause/Resume, log open/closed).
// On a docs page Storybook re-renders only the top story after updateArgs, so each story keeps
// its own copy in React state; updateArgs still keeps the Controls panel in sync, and a change
// made in Controls flows back in. toArg turns the value into what the control stores.
export function useLiveArg(args, key, toArg = (v) => v) {
  const [, updateArgs] = useArgs();
  const [value, setValue] = useState(args[key]);
  useEffect(() => setValue(args[key]), [args[key]]);
  const set = (v) => {
    setValue(v);
    updateArgs({ [key]: toArg(v) });
  };
  return [value, set];
}

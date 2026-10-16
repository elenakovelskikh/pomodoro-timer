import React from "react";

// size is given in px at the default 16px root font size and rendered in rem, so icons scale with text
export function Icon({ children, size = 18, className, style }) {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}
      style={{ width: `${size / 16}rem`, height: `${size / 16}rem`, ...style }}
    >
      {children}
    </svg>
  );
}
export const PlayIcon = (props) => <Icon {...props}><polygon points="6 3 20 12 6 21 6 3" /></Icon>;
export const PauseIcon = (props) => <Icon {...props}><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></Icon>;
export const RotateCcwIcon = (props) => <Icon {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></Icon>;
export const SkipForwardIcon = (props) => <Icon {...props}><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></Icon>;
export const ChevronDownIcon = (props) => <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
export const ChevronUpIcon = (props) => <Icon {...props}><path d="m18 15-6-6-6 6" /></Icon>;
export const MinusIcon = (props) => <Icon {...props}><line x1="5" y1="12" x2="19" y2="12" /></Icon>;
export const PlusIcon = (props) => <Icon {...props}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Icon>;

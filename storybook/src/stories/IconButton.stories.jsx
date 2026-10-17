import { IconButton } from "../components/IconButton";
import { modeArg } from "./argHelpers";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "../components/Icons";

const ICONS = { Play: <PlayIcon size={20} />, Pause: <PauseIcon size={20} />, Reset: <RotateCcwIcon size={20} />, Skip: <SkipForwardIcon size={20} /> };

export default {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["secondary", "mode"], description: "Gray, or in the mode color", table: { type: { summary: '"secondary" | "mode"' }, defaultValue: { summary: '"secondary"' } } },
    size: { control: "radio", options: ["md", "lg"], description: "44 or 56 px", table: { type: { summary: '"md" | "lg"' }, defaultValue: { summary: '"md"' } } },
    icon: { control: "select", options: Object.keys(ICONS), mapping: ICONS, description: "Icon", table: { type: { summary: "ReactNode" } } },
    label: { control: "text", description: "Accessible name and tooltip", table: { type: { summary: "string" } } },
    mode: modeArg,
    disabled: { control: "boolean", description: "Not clickable", table: { type: { summary: "boolean" } } },
    onClick: { action: "click", description: "Click handler", table: { type: { summary: "() => void" } } },
  },
  args: { variant: "secondary", size: "md", mode: "focus", icon: "Skip", label: "Skip", disabled: false },
};

export const Secondary = {};
export const Mode = { args: { variant: "mode", size: "lg", icon: "Play", label: "Start" } };

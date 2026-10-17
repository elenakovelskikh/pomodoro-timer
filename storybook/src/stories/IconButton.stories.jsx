import { IconButton } from "../components/IconButton";
import { modeArg } from "./argHelpers";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "../components/Icons";

const ICONS = { Play: <PlayIcon size={20} />, Pause: <PauseIcon size={20} />, Reset: <RotateCcwIcon size={20} />, Skip: <SkipForwardIcon size={20} /> };

export default {
  title: "Components/IconButton",
  parameters: { docs: { description: { component: "Round button with an icon, gray or in the mode color." } } },
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["secondary", "mode"], description: "Gray, or in the mode color", table: { type: { summary: '"secondary" | "mode"' }, defaultValue: { summary: '"secondary"' } } },
    size: { control: "radio", options: ["md", "lg"], description: "md (44 px): Reset and Skip; lg (56 px): Play/Pause", table: { type: { summary: '"md" | "lg"' }, defaultValue: { summary: '"md"' } } },
    icon: { control: "select", options: Object.keys(ICONS), mapping: ICONS, description: "Icon inside the button", table: { type: { summary: "ReactNode" } } },
    label: { control: "text", description: "Accessible name and tooltip", table: { type: { summary: "string" } } },
    mode: modeArg,
    disabled: { control: "boolean", description: "Not clickable", table: { type: { summary: "boolean" } } },
    onClick: { action: "click", description: "Click handler", table: { type: { summary: "() => void" } } },
  },
  args: { variant: "secondary", size: "md", mode: "focus", icon: "Skip", label: "Skip", disabled: false },
};

export const ResetAndSkip = { name: "Reset and Skip" };
export const Start = { name: "Start / Resume", args: { variant: "mode", size: "lg", icon: "Play", label: "Start" } };
export const Pause = { args: { size: "lg", icon: "Pause", label: "Pause" } };

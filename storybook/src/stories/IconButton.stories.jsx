import { IconButton } from "../components/IconButton";
import { PlayIcon, PauseIcon, RotateCcwIcon, SkipForwardIcon } from "../components/Icons";

const ICONS = { Play: <PlayIcon size={20} />, Pause: <PauseIcon size={20} />, Reset: <RotateCcwIcon size={20} />, Skip: <SkipForwardIcon size={20} /> };

export default {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  render: (args, { globals }) => <IconButton {...args} mode={globals.mode} />,
  argTypes: {
    variant: { control: "radio", options: ["secondary", "mode"], description: "Gray, or in the current mode color", table: { type: { summary: '"secondary" | "mode"' }, defaultValue: { summary: '"secondary"' } } },
    size: { control: "radio", options: ["md", "lg"], description: "44 or 56 px", table: { type: { summary: '"md" | "lg"' }, defaultValue: { summary: '"md"' } } },
    icon: { control: "select", options: Object.keys(ICONS), mapping: ICONS, description: "Icon", table: { type: { summary: "ReactNode" } } },
    label: { control: "text", description: "Accessible name and tooltip", table: { type: { summary: "string" } } },
    mode: { control: false, description: "Timer mode (set in the toolbar)", table: { type: { summary: '"focus" | "break" | "longBreak"' } } },
    disabled: { control: "boolean", description: "Not clickable", table: { type: { summary: "boolean" } } },
    onClick: { action: "click", description: "Click handler", table: { type: { summary: "() => void" } } },
  },
  args: { variant: "secondary", size: "md", icon: "Skip", label: "Skip", disabled: false },
};

export const Secondary = {};
export const Mode = { args: { variant: "mode", size: "lg", icon: "Play", label: "Start" } };

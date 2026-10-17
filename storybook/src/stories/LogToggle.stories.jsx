import { useLiveArg } from "./liveArg";
import { LogToggle } from "../components/LogToggle";
import { HistoryLog } from "../components/HistoryLog";

const at = (h, m) => new Date(2026, 9, 6, h, m);
const sample = [
  { type: "focus", round: 1, start: at(10, 0), end: at(10, 25) },
  { type: "break", round: 1, start: at(10, 25), end: at(10, 30) },
  { type: "focus", round: 2, start: at(10, 30), end: at(10, 55) },
  { type: "longBreak", round: 2, start: at(10, 55), end: at(11, 25) },
];

export default {
  title: "Components/Log",
  parameters: { docs: { description: { component: "Number of completed rounds. Opens the log of finished rounds with their times." } } },
  component: LogToggle,
  tags: ["autodocs"],
  argTypes: {
    count: { control: { type: "number", min: 0 }, description: "Number of completed rounds", table: { type: { summary: "number" } } },
    open: { control: "boolean", description: "Log is open", table: { type: { summary: "boolean" } } },
    onClick: { control: false, description: "Toggle the log", table: { type: { summary: "() => void" } } },
  },
  // the toggle plus the log it controls; clicking flips `open`
  render: function Render(args) {
    const [open, setOpen] = useLiveArg(args, "open");
    return (
      <div className="flex flex-col items-center gap-1">
        <LogToggle {...args} open={open} onClick={() => args.count > 0 && setOpen(!open)} />
        {open && args.count > 0 && <HistoryLog history={sample} />}
      </div>
    );
  },
  args: { count: 2, open: false },
};

export const Default = {};
export const Open = { args: { open: true } };
export const Empty = { args: { count: 0 }, parameters: { docs: { description: { story: "Nothing completed yet." } } } };

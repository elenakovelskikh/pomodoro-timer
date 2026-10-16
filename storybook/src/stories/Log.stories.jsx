import { useState } from "react";
import { HistoryLog } from "../components/HistoryLog";
import { LogToggle } from "../components/LogToggle";
import { Credit } from "../components/Credit";

export default { title: "Components/Log and credit", parameters: { layout: "padded" } };

const at = (h, m) => new Date(2026, 9, 6, h, m);
const sample = [
  { type: "focus", round: 1, start: at(10, 0), end: at(10, 25) },
  { type: "break", round: 1, start: at(10, 25), end: at(10, 30) },
  { type: "focus", round: 2, start: at(10, 30), end: at(10, 55) },
  { type: "longBreak", round: 2, start: at(10, 55), end: at(11, 25) },
];

export const Toggle = {
  render: (args) => <LogToggle {...args} />,
  args: { count: 2, open: false },
  argTypes: {
    count: { control: { type: "number", min: 0 }, description: "Completed focus rounds; at 0 there is no chevron", table: { type: { summary: "number" } } },
    open: { control: "boolean", description: "Chevron up when the log is open", table: { type: { summary: "boolean" } } },
    onClick: { action: "toggle", description: "Open/close the log", table: { type: { summary: "() => void" } } },
  },
};

export const ToggleWithLog = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="flex flex-col items-center gap-1">
        <LogToggle count={2} open={open} onClick={() => setOpen((o) => !o)} />
        {open && <HistoryLog history={sample} />}
      </div>
    );
  },
};

export const History = { render: () => <HistoryLog history={sample} /> };
export const CreditLine = { render: () => <div className="w-80"><Credit inert={false} /></div> };

import { Live } from "./Live";
import { LogToggle } from "../components/LogToggle";
import { TurnLog } from "../components/TurnLog";

const speaker = (seconds) => ({ role: "speaker", seconds, limit: 300 });
const commentator = (seconds) => ({ role: "commentator", seconds, limit: 120 });
const sample = [
  { round: 1, turns: [speaker(299), commentator(223), commentator(118)] },
  { round: 2, turns: [speaker(330), commentator(95)] },
];

export default {
  title: "Components/TurnLog",
  parameters: { docs: { description: { component: "Retro page log, centered under both timers: finished speaker and commentator turns grouped by the meeting round they happened in." } } },
  component: TurnLog,
  tags: ["autodocs"],
  argTypes: {
    log: { control: "object", description: "Meeting round number and the turns in it: role, seconds taken, limit in seconds", table: { type: { summary: '{ round: number, turns: { role: "speaker" | "commentator", seconds: number, limit: number }[] }[]' } } },
    open: { control: "boolean", description: "Log is open (preview only)", table: { category: "Story" } },
  },
  // the "N rounds" toggle plus the log it opens, as on the page
  render: ({ open, ...args }) => (
    <Live value={open}>
      {(isOpen, setOpen) => (
        <div className="flex flex-col items-center gap-1">
          <LogToggle count={args.log.length} noun={args.log.length === 1 ? "round" : "rounds"} open={isOpen}
            onClick={() => args.log.length > 0 && setOpen(!isOpen)} />
          {isOpen && args.log.length > 0 && <TurnLog {...args} />}
        </div>
      )}
    </Live>
  ),
  args: { log: sample, open: true },
};

export const Open = {};
export const Closed = { args: { open: false } };
export const Empty = { args: { log: [], open: false } };

import { HistoryLog } from "../components/HistoryLog";
import { Credit } from "../components/Credit";

export default { title: "Components/Log and credit" };

const at = (h, m) => new Date(2026, 9, 6, h, m);

export const History = {
  render: () => (
    <HistoryLog
      history={[
        { type: "focus", round: 1, start: at(10, 0), end: at(10, 25) },
        { type: "break", round: 1, start: at(10, 25), end: at(10, 30) },
        { type: "focus", round: 2, start: at(10, 30), end: at(10, 55) },
        { type: "longBreak", round: 2, start: at(10, 55), end: at(11, 25) },
      ]}
    />
  ),
};
export const CreditLine = { render: () => <div className="w-80"><Credit inert={false} /></div> };

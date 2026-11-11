import { SyncNotice } from "../components/SyncNotice";

export default {
  title: "Components/SyncNotice",
  component: SyncNotice,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Discord Activity only. The notice at the top of the screen when the shared timer isn't in sync; nothing shows while it is." } } },
  argTypes: {
    status: { control: "inline-radio", options: ["connecting", "reconnecting", "failed"], description: "Connection state", table: { type: { summary: '"connecting" | "reconnecting" | "failed"' } } },
    problem: { control: "inline-radio", options: ["discord", "load", "denied", "offline"], description: "Why it failed (status failed only)", table: { type: { summary: '"discord" | "load" | "denied" | "offline"' } } },
    onRetry: { action: "retry", description: "Try again (status failed only)", table: { type: { summary: "() => void" } } },
    inline: { control: false, description: "Show in place instead of fixed at the top (preview only)", table: { type: { summary: "boolean" } } },
  },
  args: { status: "connecting", problem: "offline", inline: true },
};

export const Connecting = { parameters: { docs: { description: { story: "Still connecting after 10 seconds; the timer works only locally until then." } } } };
export const Reconnecting = { args: { status: "reconnecting" }, parameters: { docs: { description: { story: "Was connected and lost the connection; it comes back by itself." } } } };
export const NotSynced = { name: "Not synced", args: { status: "failed" }, parameters: { docs: { description: { story: "Gave up after 30 seconds or a real failure, with the reason and Try again." } } } };

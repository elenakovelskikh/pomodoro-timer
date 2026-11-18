import { Live } from "../stories/Live";
import { PresetPills } from "../components/PresetPills";
import { SPEAKER_PRESETS } from "../tokens";

export default {
  title: "Retro/PresetPills",
  parameters: { docs: { description: { component: "Speaker time presets under the retro speaker timer. Picking one sets the timer and waits for Start; if a countdown is already under way, the page asks first." } } },
  component: PresetPills,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "inline-radio", options: SPEAKER_PRESETS, description: "Current time limit, in minutes", table: { type: { summary: "number" } } },
    presets: { control: false, description: "Minutes for each pill", table: { type: { summary: "number[]" } } },
    onPick: { action: "pick", control: false, description: "Called with the picked minutes", table: { type: { summary: "(minutes) => void" } } },
  },
  args: { presets: SPEAKER_PRESETS, value: 5 },
  render: (args) => (
    <Live value={args.value}>
      {(value, setValue) => <PresetPills {...args} value={value} onPick={(m) => { args.onPick?.(m); setValue(m); }} />}
    </Live>
  ),
};

export const Default = {};

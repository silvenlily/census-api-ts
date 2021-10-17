import basePlayerEvent from "./basePlayerEvent";

export default interface GainExperience extends basePlayerEvent {
  amount: string;
  event_name: "GainExperience";
  experience_id: string;
  loadout_id: string;
  other_id: string;
  zone_id: string;
}

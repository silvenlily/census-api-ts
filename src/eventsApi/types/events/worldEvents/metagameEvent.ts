import type { factionID, worldID } from "../../utils";

export default interface MetagameEvent {
  event_name: "MetagameEvent";
  timestamp: string;
  world_id: worldID;
  experience_bonus: string;
  faction_nc: string;
  faction_tr: string;
  faction_vs: string;
  metagame_event_id: string;
  metagame_event_state: string;
  zone_id: string;
}

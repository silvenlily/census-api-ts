import type { factionID, worldID } from "../../utils";

export default interface ContinentLock {
  event_name: "ContinentLock";
  timestamp: string;
  world_id: worldID;
  zone_id: string;
  triggering_faction: factionID;
  previous_faction: factionID;
  vs_population: string;
  nc_population: string;
  tr_population: string;
  metagame_event_id: string;
  event_type: string;
}

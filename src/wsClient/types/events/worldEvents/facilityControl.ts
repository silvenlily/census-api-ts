import type { factionID, worldID } from "../../utils";

export default interface FacilityControl {
  event_name: "FacilityControl";
  timestamp: string;
  world_id: worldID;
  old_faction_id: factionID;
  outfit_id: string;
  new_faction_id: factionID;
  facility_id: string;
  duration_held: string;
  zone_id: string;
}

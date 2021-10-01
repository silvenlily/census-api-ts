import type { worldID, playerZonelessEventName, playerEventName } from "../../utils";

/**
 * base player event
 * @param {string} character_id string - character id
 * @param {string} timestamp string - time event occured at
 * @param {worldID} world_id worldID - server event occured on
 */
interface basePlayerZonelessEvent {
  event_name: playerZonelessEventName;
  character_id: string;
  timestamp: string;
  world_id: worldID;
}

/**
 * @extends {basePlayerZonelessEvent}
 * @param {string} zone_id string - zone id event occured in
 */
export default interface basePlayerZoneEvent {
  event_name: playerZonelessEventName | playerEventName;
  zone_id: string;
  character_id: string;
  timestamp: string;
  world_id: worldID;
}

export { basePlayerZonelessEvent, basePlayerZoneEvent };

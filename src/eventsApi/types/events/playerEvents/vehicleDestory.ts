import basePlayerEvent from "./basePlayerEvent";

export default interface VehicleDestroy extends basePlayerEvent {
  attacker_character_id: string;
  attacker_loadout_id: string;
  attacker_vehicle_id: string;
  attacker_weapon_id: string;
  event_name: "VehicleDestroy";
  facility_id: string;
  faction_id: string;
  vehicle_id: string;
  zone_id: string;
}

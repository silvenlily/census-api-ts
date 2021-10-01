import basePlayerEvent from "./basePlayerEvent";

export default interface Death extends basePlayerEvent {
  attacker_character_id: string;
  attacker_fire_mode_id: string;
  attacker_loadout_id: string;
  attacker_vehicle_id: string;
  attacker_weapon_id: string;
  character_loadout_id: string;
  event_name: "Death";
  is_headshot: "0" | "1";
  vehicle_id: string;
  zone_id: string;
}

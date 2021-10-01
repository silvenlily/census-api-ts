import basePlayerEvent from "./basePlayerEvent";

export default interface PlayerFacilityDefend extends basePlayerEvent {
  event_name: "PlayerFacilityDefend";
  facility_id: string;
  outfit_id: string;
  zone_id: string;
}

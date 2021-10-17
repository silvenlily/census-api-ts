import basePlayerEvent from "./basePlayerEvent";

export default interface PlayerFacilityCapture extends basePlayerEvent {
  event_name: "PlayerFacilityCapture";
  facility_id: string;
  outfit_id: string;
  zone_id: string;
}

import basePlayerEvent from "./basePlayerEvent";

export default interface ItemAdded extends basePlayerEvent {
  context: string;
  event_name: "ItemAdded";
  item_count: string;
  item_id: string;
  zone_id: string;
}

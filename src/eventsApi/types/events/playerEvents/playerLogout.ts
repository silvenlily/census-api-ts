import { basePlayerZonelessEvent } from "./basePlayerEvent";

export default interface PlayerLogout extends basePlayerZonelessEvent {
  event_name: "PlayerLogout";
}

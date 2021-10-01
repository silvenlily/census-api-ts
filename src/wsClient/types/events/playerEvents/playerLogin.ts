import { basePlayerZonelessEvent } from "./basePlayerEvent";

export default interface PlayerLogin extends basePlayerZonelessEvent {
  event_name: "PlayerLogin";
}

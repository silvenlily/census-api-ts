import { eventName, worldID } from "../utils";
import baseClientPayload from "./basePayload";

export default interface clearSubscribePayload extends baseClientPayload {
  action: "clearSubscribe";
  characters?: (string | "all")[];
  worlds?: (worldID | "all")[];
  eventNames: (eventName | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

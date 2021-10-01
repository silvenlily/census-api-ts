import { eventName, worldID } from "../utils";
import baseClientPayload from "./basePayload";

export default interface subscribePayload extends baseClientPayload {
  action: "subscribe";
  characters: (string | "all")[];
  worlds: (worldID | "all")[];
  eventNames: (eventName | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

import { playerZonelessEventName, worldEventName, playerEventName, worldID } from "./utils";

interface eventOptions {
  eventNames: (playerZonelessEventName | playerEventName | worldEventName | "all")[];
  characters?: (string | "all")[];
  worlds?: (worldID | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

export default eventOptions;

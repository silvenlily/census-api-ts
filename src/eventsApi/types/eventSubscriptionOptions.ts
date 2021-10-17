import { playerZonelessEventName, worldEventName, playerEventName, worldID } from "./utils";

interface eventOptionsWorlds {
  eventNames: (playerZonelessEventName | playerEventName | worldEventName | "all")[];
  worlds: (worldID | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

interface eventOptionsBoth {
  eventNames: (playerZonelessEventName | playerEventName | worldEventName | "all")[];
  characters: (string | "all")[];
  worlds: (worldID | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

interface eventOptionsCharacters {
  eventNames: (playerZonelessEventName | playerEventName | worldEventName | "all")[];
  characters: (string | "all")[];
  logicalAndCharactersWithWorlds?: boolean;
}

type eventOptions = eventOptionsBoth | eventOptionsWorlds | eventOptionsCharacters;

export { eventOptions, eventOptionsBoth, eventOptionsWorlds, eventOptionsCharacters };
export default eventOptions;

type worldID = "1" | "9" | "10" | "11" | "13" | "17" | "18" | "19" | "25" | "1000" | "1001";
type factionID = "1" | "2" | "3";

type playerEventName =
  | "AchievementEarned"
  | "BattleRankUp"
  | "Death"
  | "FacilityControl"
  | "GainExperience"
  | "ItemAdded"
  | "MetagameEvent"
  | "PlayerFacilityDefend"
  | "PlayerFacilityCapture"
  | "SkillAdded"
  | "VehicleDestroy";

type playerZonelessEventName = "PlayerLogin" | "PlayerLogout";

type worldEventName = "ContinentLock" | "ContinentUnlock" | "FacilityControl" | "MetagameEvent";

type eventName = playerEventName | playerZonelessEventName | worldEventName;

export { worldID, factionID, eventName, playerEventName, playerZonelessEventName, worldEventName };

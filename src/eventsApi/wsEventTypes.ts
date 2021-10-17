import type AchievementEarned from "./types/events/playerEvents/achievementEarned";
import type BattleRankUp from "./types/events/playerEvents/battleRankUp";
import type Death from "./types/events/playerEvents/death";
import type GainExperience from "./types/events/playerEvents/gainExperience";
import type ItemAdded from "./types/events/playerEvents/itemAdded";
import type PlayerFacilityCapture from "./types/events/playerEvents/playerFacilityCapture";
import type PlayerFacilityDefend from "./types/events/playerEvents/playerFacilityDefend";
import type PlayerLogin from "./types/events/playerEvents/playerLogin";
import type PlayerLogout from "./types/events/playerEvents/playerLogout";
import type SkillAdded from "./types/events/playerEvents/skillAdded";
import type VehicleDestroy from "./types/events/playerEvents/vehicleDestory";
import type ContinentLock from "./types/events/worldEvents/continentLock";
import type ContinentUnlock from "./types/events/worldEvents/continentUnlock";
import type FacilityControl from "./types/events/worldEvents/facilityControl";
import type MetagameEvent from "./types/events/worldEvents/metagameEvent";
import type { subscription } from "./types/payloads/serverPayloads";

interface wsEventTypes {
  subscriptionChange: (subscription: subscription) => {};
  connected: () => void;
  disconnected: (code: number, reason: Buffer) => void;
  AchievementEarned: (event: AchievementEarned) => void;
  BattleRankUp: (event: BattleRankUp) => void;
  Death: (event: Death) => void;
  GainExperience: (event: GainExperience) => void;
  ItemAdded: (event: ItemAdded) => void;
  PlayerFacilityCapture: (event: PlayerFacilityCapture) => void;
  PlayerFacilityDefend: (event: PlayerFacilityDefend) => void;
  SkillAdded: (event: SkillAdded) => void;
  VehicleDestroy: (event: VehicleDestroy) => void;
  PlayerLogin: (event: PlayerLogin) => void;
  PlayerLogout: (event: PlayerLogout) => void;
  ContinentLock: (event: ContinentLock) => void;
  ContinentUnlock: (event: ContinentUnlock) => void;
  FacilityControl: (event: FacilityControl) => void;
  MetagameEvent: (event: MetagameEvent) => void;
}

export default wsEventTypes;

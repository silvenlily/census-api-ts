import AchievementEarned from "./types/events/playerEvents/achievementEarned";
import BattleRankUp from "./types/events/playerEvents/battleRankUp";
import Death from "./types/events/playerEvents/death";
import GainExperience from "./types/events/playerEvents/gainExperience";
import ItemAdded from "./types/events/playerEvents/itemAdded";
import PlayerFacilityCapture from "./types/events/playerEvents/playerFacilityCapture";
import PlayerFacilityDefend from "./types/events/playerEvents/playerFacilityDefend";
import PlayerLogin from "./types/events/playerEvents/playerLogin";
import PlayerLogout from "./types/events/playerEvents/playerLogout";
import SkillAdded from "./types/events/playerEvents/skillAdded";
import VehicleDestroy from "./types/events/playerEvents/vehicleDestory";
import ContinentLock from "./types/events/worldEvents/continentLock";
import ContinentUnlock from "./types/events/worldEvents/continentUnlock";
import FacilityControl from "./types/events/worldEvents/facilityControl";
import MetagameEvent from "./types/events/worldEvents/metagameEvent";
import { subscription } from "./types/serverPayloads/payload";

interface wsClientEvents {
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

export default wsClientEvents;

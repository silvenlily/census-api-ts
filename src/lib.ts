import wsClient from "./wsClient/client";
import restClient from "./restClient/client";

import { serverIdMap, serverIdFromName } from "./utils/continentIdFromName";

import type eventOptions from "./wsClient/types/eventSubscriptionOptions";
import type eventTypes from "./wsClient/eventTypes";

import type AchievementEarned from "./wsClient/types/events/playerEvents/achievementEarned";
import type BattleRankUp from "./wsClient/types/events/playerEvents/battleRankUp";
import type Death from "./wsClient/types/events/playerEvents/death";
import type GainExperience from "./wsClient/types/events/playerEvents/gainExperience";
import type ItemAdded from "./wsClient/types/events/playerEvents/itemAdded";
import type PlayerFacilityCapture from "./wsClient/types/events/playerEvents/playerFacilityCapture";
import type PlayerFacilityDefend from "./wsClient/types/events/playerEvents/playerFacilityDefend";
import type PlayerLogin from "./wsClient/types/events/playerEvents/playerLogin";
import type PlayerLogout from "./wsClient/types/events/playerEvents/playerLogout";
import type SkillAdded from "./wsClient/types/events/playerEvents/skillAdded";
import type VehicleDestroy from "./wsClient/types/events/playerEvents/vehicleDestory";
import type ContinentLock from "./wsClient/types/events/worldEvents/continentLock";
import type ContinentUnlock from "./wsClient/types/events/worldEvents/continentUnlock";
import type FacilityControl from "./wsClient/types/events/worldEvents/facilityControl";
import type MetagameEvent from "./wsClient/types/events/worldEvents/metagameEvent";
import type { subscription as Subscription } from "./wsClient/types/serverPayloads/payload";

export {
  serverIdMap,
  serverIdFromName,
  wsClient,
  restClient,
  eventOptions,
  eventTypes,
  AchievementEarned,
  BattleRankUp,
  Death,
  GainExperience,
  ItemAdded,
  PlayerFacilityCapture,
  PlayerFacilityDefend,
  PlayerLogin,
  PlayerLogout,
  SkillAdded,
  VehicleDestroy,
  ContinentLock,
  ContinentUnlock,
  FacilityControl,
  MetagameEvent,
  Subscription,
};

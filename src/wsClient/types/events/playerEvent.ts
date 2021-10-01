import achievementEarned from "./playerEvents/achievementEarned";
import battleRankUp from "./playerEvents/battleRankUp";
import death from "./playerEvents/death";
import gainExperience from "./playerEvents/gainExperience";
import itemAdded from "./playerEvents/itemAdded";
import playerFacilityCapture from "./playerEvents/playerFacilityCapture";
import playerFacilityDefend from "./playerEvents/playerFacilityDefend";
import playerLogin from "./playerEvents/playerLogin";
import playerLogout from "./playerEvents/playerLogout";
import skillAdded from "./playerEvents/skillAdded";
import vehicleDestory from "./playerEvents/vehicleDestory";

type playerEvent =
  | achievementEarned
  | battleRankUp
  | death
  | gainExperience
  | itemAdded
  | playerFacilityCapture
  | playerFacilityDefend
  | playerLogin
  | playerLogout
  | skillAdded
  | vehicleDestory;

export default playerEvent;

import basePlayerEvent from "./basePlayerEvent";

export default interface SkillAdded extends basePlayerEvent {
  event_name: "SkillAdded";
  skill_id: string;
  zone_id: string;
}

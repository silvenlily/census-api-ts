import basePlayerEvent from "./basePlayerEvent";

/**
 * The given character has earned a new achievement (medal or ribbon)
 * @param event_name "AchievementEarned" - name of the event
 * @param achievement_id string - achievment id
 */
export default interface AchievementEarned extends basePlayerEvent {
  event_name: "AchievementEarned";
  achievement_id: string;
}

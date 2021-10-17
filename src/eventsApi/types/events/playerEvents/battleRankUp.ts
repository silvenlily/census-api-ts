import basePlayerEvent from "./basePlayerEvent";

export default interface BattleRankUp extends basePlayerEvent {
  battle_rank: string;
  event_name: "BattleRankUp";
  zone_id: string;
}

import { wsClient, eventOptions } from "../lib";

export default async function runWebsocketTest() {
  let ws = new wsClient();

  ws.on("connected", () => {
    let eventOptions: eventOptions = { eventNames: ["AchievementEarned"] };
    ws.subscribe(eventOptions);
  });

  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      reject("timeout");
    }, 30000);
    ws.on("AchievementEarned", (event: any) => {
      if (
        event.achievement_id &&
        event.character_id &&
        event.timestamp &&
        event.event_name == "AchievementEarned"
      ) {
        ws.disconnect();
        resolve(null);
        clearTimeout(t);
      } else {
        reject("Event failed to match expectations");
      }
    });
  });
}
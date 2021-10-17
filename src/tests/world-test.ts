import { wsClient, eventOptions } from "../lib";

export default async function runWebsocketTest() {
  let ws = new wsClient();

  ws.on("connected", () => {
    console.log("connected");
    let eventOptions: eventOptions = { eventNames: ["AchievementEarned"], worlds: ["1"] };
    ws.subscribe(eventOptions);
  });

  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      reject("timeout");
    }, 30000);
    ws.ws.on("message", (m) => {
      console.log(m.toString());
    });
    ws.ws.on("error", (m) => {
      console.log(m.toString());
    });
  });
}

runWebsocketTest();

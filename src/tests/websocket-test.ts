import { eventsApi } from "../lib";

async function recieveEventsTest(ws: eventsApi.Client) {
  return new Promise((resolve, reject) => {
    let eventOptions: eventsApi.eventOptions = {
      eventNames: ["GainExperience"],
      characters: ["all"],
    };
    ws.subscribe(eventOptions);

    let t = setTimeout(() => {
      reject("timeout");
    }, 5000);
    ws.on("GainExperience", (event) => {
      if (event.world_id && event.timestamp && event.event_name == "GainExperience") {
        clearTimeout(t);
        resolve(null);
      } else {
        reject("Event failed to match expectations");
      }
    });
  });
}

async function clearSubTest(ws: eventsApi.Client) {
  return new Promise(async (resolve, reject) => {
    ws.unSubscribe({
      events: ["GainExperience"],
    });
    await sleep(3000);
    let t = setTimeout(() => {
      resolve(undefined);
    }, 5000);

    ws.on("GainExperience", (event) => {
      clearTimeout(t);
      reject("Recieved event after unsubscribing");
    });
  });
}

async function worldEventTest(ws: eventsApi.Client) {
  return new Promise(async (resolve, reject) => {
    let eventOptions: eventsApi.eventOptions = {
      eventNames: ["GainExperience"],
      worlds: ["1"],
      logicalAndCharactersWithWorlds: true,
    };
    ws.subscribe(eventOptions);
    await sleep(1000);

    let t = setTimeout(() => {
      if (recieved > 0) {
        resolve(undefined);
      } else {
        reject("timeout");
      }
    }, 5000);

    let recieved = 0;

    ws.on("GainExperience", (event) => {
      if (event.world_id == "1") {
        recieved++;
      } else {
        reject("Did not recieve world event");
      }
    });
  });
}

async function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res(undefined);
    }, ms);
  });
}

export default async function runWebsocketTest() {
  let ws = new eventsApi.Client();

  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      reject("tests timeout");
    }, 60000);

    ws.on("connected", async () => {
      await sleep(500);

      let catcher = (err: any) => {
        console.log(`test failed: ${err}`);
        process.exit(1);
      };

      console.log("running recieve events test");
      await recieveEventsTest(ws).catch(catcher);
      ws.removeAllListeners("GainExperience");
      console.log("passed recieve events test");
      await sleep(500);

      console.log("running unsub events test");
      await clearSubTest(ws).catch(catcher);
      ws.removeAllListeners("GainExperience");
      console.log("passed unsub events test");
      await sleep(500);

      console.log("running world events test");
      await worldEventTest(ws).catch(catcher);
      ws.removeAllListeners("GainExperience");
      console.log("passed world events test");
      await sleep(200);

      clearTimeout(timeout);
      ws.disconnect();
      resolve(undefined);
    });
  });
}

import runWebsocketTest from "./websocket-test";

(async () => {
  console.log("running websocket test");
  await runWebsocketTest()
    .then(() => {
      console.log("passed websocket test");
    })
    .catch((err) => {
      console.log("failed websocket test");
      console.log(err);
      process.exit(1);
    });
})();

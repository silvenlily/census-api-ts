import runWebsocketTest from "./websocket-test";

async function runTests() {
  console.log("running websocket tests");
  await runWebsocketTest()
    .then(() => {
      console.log("passed websocket tests");
    })
    .catch((err) => {
      console.log("failed websocket tests");
      console.log(err);
      process.exit(1);
    });
}

runTests();

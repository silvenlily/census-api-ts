import { fstat, readFileSync, writeFileSync } from "fs";

function constructIdMapping(options: { path: string; idFieldName: string; name: string }) {
  let rawData = JSON.parse(readFileSync(options.path, "utf8"));

  let mapData: any[][] = [];

  for (let a = 0; a < rawData.length; a++) {
    mapData.push([rawData[a][options.idFieldName], rawData[a]]);
  }

  let map = `export default new Map(${JSON.stringify(mapData)})`;

  return map;
}

let a = constructIdMapping({
  path: "./devtools/id-maps/metagame_events.json",
  idFieldName: "metagame_event_id",
  name: "metagame_event",
});

writeFileSync("./devtools/id-maps/metagame_events.ts", a, "utf8");

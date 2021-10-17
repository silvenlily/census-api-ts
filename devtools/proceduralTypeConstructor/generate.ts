import getCollections from "./getCollections";

let exceptionList = {
  map: () => {},
  characters_world: () => {},
  characters_online_status: () => {},
  characters_friend: () => {},
  leaderboard: () => {},
  characters_leaderboard: () => {},
  event: () => {},
  characters_event: () => {},
  world_event: () => {},
  characters_event_grouped: () => {},
  single_character_by_id: () => {},
  characters_item: () => {},
  world: () => {},
};

async function generateTyping() {
  let collections = await getCollections();

  let resolves: { [key: string]: string[] } = {};

  for (let a = 0; a < collections.length; a++) {
    for (let b = 0; b < collections[a].resolve_list.length; b++) {
      if (resolves[collections[a].resolve_list[b]]) {
        resolves[collections[a].resolve_list[b]].push(collections[a].name);
      } else {
        resolves[collections[a].resolve_list[b]] = [collections[a].name];
      }
    }
  }

  for (let a = 0; a < collections.length; a++) {}
}

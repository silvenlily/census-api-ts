import axios from "axios";
import { writeFile } from "fs/promises";
import { collectionList } from "./types";

async function getCollections() {
  let res = await axios.get("https://census.daybreakgames.com/s:example/get/ps2:v2/?c:limit=100");

  let data: collectionList = res.data;
  let collections = data.datatype_list;

  return collections;
}

export default getCollections;

function continentIdFromName(name: string) {
  return idMap.get(name);
}

const idMap = new Map([
  ["connery", 1],
  ["emerald", 17],
  ["cobalt", 13],
  ["miller", 10],
  ["soltech", 40],
  ["jaeger", 19],
]);

export { continentIdFromName, idMap };
export default continentIdFromName;

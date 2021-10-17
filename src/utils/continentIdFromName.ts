const serverIdMap = new Map([
  ["connery", 1],
  ["emerald", 17],
  ["cobalt", 13],
  ["miller", 10],
  ["soltech", 40],
  ["jaeger", 19],
]);

function serverIdFromName(name: string) {
  return serverIdMap.get(name);
}

export { serverIdFromName, serverIdMap };
export default serverIdFromName;

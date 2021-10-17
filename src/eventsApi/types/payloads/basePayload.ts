export default interface baseClientPayload {
  service: "event";
  action:
    | "subscribe"
    | "clearSubscribe"
    | "echo"
    | "recentCharacterIds"
    | "recentCharacterIdsCount"
    | "help";
}

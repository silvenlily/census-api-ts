import type clearSubscribePayload from "./clearSubscribe";
import type subscribePayload from "./subscribe";

type clientPayloads = clearSubscribePayload | subscribePayload;

export type { clientPayloads, clearSubscribePayload, subscribePayload };
export default clientPayloads;

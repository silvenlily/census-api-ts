import clearSubscribePayload from "./clearSubscribe";
import subscribePayload from "./subscribe";

type clientPayload = clearSubscribePayload | subscribePayload;

export default clientPayload;

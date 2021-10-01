import event from "../events/event";
import { eventName, worldID } from "../utils";

interface subscription {
  subscription: {
    characterCount: number;
    eventNames: eventName[];
    logicalAndCharactersWithWorlds: boolean;
    worlds: worldID[];
  };
}

interface serviceMessage {
  payload: event;
  type: "serviceMessage";
  service: "event";
}

interface heartbeat {
  online: {
    [key: string]: "true" | "false";
  };
  type: "heartbeat";
  service: "event";
}

interface connectionStateChanged {
  connected: "true" | "false";
  service: "push";
  type: "connectionStateChanged";
}

interface serviceStateChange {
  detail: string;
  online: "true" | "false";
  service: "event";
  type: "serviceStateChanged";
}

type serverPayload =
  | serviceMessage
  | heartbeat
  | subscription
  | connectionStateChanged
  | serviceStateChange;

export {
  serverPayload,
  serviceMessage,
  heartbeat,
  subscription,
  connectionStateChanged,
  serviceStateChange,
};
export default serverPayload;

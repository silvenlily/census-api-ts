import { TypedEmitter } from "tiny-typed-emitter";
import WebSocket from "ws";
import type eventSubOptions from "./types/eventSubscriptionOptions";
import type subscribePayload from "./types/payloads/subscribe";
import type clearSubscribePayload from "./types/payloads/clearSubscribe";
import type wsEventTypes from "./wsEventTypes";
import { eventName, worldID } from "./types/utils";
import clientPayload from "./types/payloads/clientPayload";
import { eventOptionsBoth } from "./types/eventSubscriptionOptions";

class wsClient extends TypedEmitter<wsEventTypes> {
  serviceID: string;
  ws: WebSocket;
  constructor(params?: { serviceID?: string; environment?: "ps2" | "ps2ps4us" | "ps2ps4eu" }) {
    super();
    let env = params?.environment ?? "ps2";
    this.serviceID = params?.serviceID ?? "example";

    if (this.serviceID == "example") {
      console.warn(
        "Using service id: 'example' is not recommended. Get a census service id at: http://census.daybreakgames.com/#service-id (the process appears to be an automatic yes)"
      );
    }

    this.ws = new WebSocket(
      `wss://push.planetside2.com/streaming?environment=${env}&service-id=s:${this.serviceID}`
    );

    let wsClient = this;

    this.ws.on("message", (data) => {
      let msg: any = JSON.parse(data.toString());

      if (msg.subscription) {
        wsClient.emit("subscriptionChange", msg);
      }

      if (msg.type == "serviceMessage") {
        wsClient.emit(msg.payload.event_name, msg.payload);
      }
    });

    this.ws.on("open", () => {
      wsClient.emit("connected");
    });

    this.ws.on("close", (code, reason) => {
      wsClient.emit("disconnected", code, reason);
    });
  }

  async subscribe(event: eventSubOptions) {
    let e = event as eventOptionsBoth;
    let payload: subscribePayload;
    if (e.characters && e.worlds) {
      payload = {
        service: "event",
        action: "subscribe",
        eventNames: event.eventNames,
        worlds: e.worlds,
        characters: e.characters,
        logicalAndCharactersWithWorlds: event.logicalAndCharactersWithWorlds,
      };
    } else if (e.characters) {
      payload = {
        service: "event",
        action: "subscribe",
        eventNames: event.eventNames,
        characters: e.characters,
        logicalAndCharactersWithWorlds: event.logicalAndCharactersWithWorlds,
      };
    } else if (e.worlds) {
      payload = {
        service: "event",
        action: "subscribe",
        eventNames: event.eventNames,
        worlds: e.worlds,
        logicalAndCharactersWithWorlds: event.logicalAndCharactersWithWorlds,
      };
    } else {
      throw "You must provide either a character or world filter or both";
    }

    this._send(payload);
  }

  async unSubscribe(options: {
    events: ("all" | eventName)[];
    worlds?: worldID[];
    characterids?: string[];
  }) {
    let payload: clearSubscribePayload = {
      service: "event",
      action: "clearSubscribe",
      eventNames: options.events,
    };

    if (options.worlds) {
      payload.worlds = options.worlds;
    }

    if (options.characterids) {
      payload.characters = options.characterids;
    }

    this._send(payload);
  }

  async disconnect() {
    this.ws.close();
  }

  _send(data: clientPayload) {
    this.ws.send(JSON.stringify(data));
  }
}

export default wsClient;

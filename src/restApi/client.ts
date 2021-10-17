import axios from "axios";
import collectionName from "./collections/collectionNames";

class restClient {
  serviceID: string;
  environment: "ps2" | "ps2ps4us" | "ps2ps4eu";
  constructor(params: { serviceID?: string; environment?: "ps2" | "ps2ps4us" | "ps2ps4eu" }) {
    this.environment = params?.environment ?? "ps2";
    this.serviceID = params?.serviceID ?? "example";
    if (this.serviceID == "example") {
      console.warn(
        "Using service id: 'example' is not recommended. Get a census service id at: http://census.daybreakgames.com/#service-id (the process appears to be an automatic yes)"
      );
    }
  }

  async request(query: {
    collection: collectionName;
    enviornment?: "ps2" | "ps2ps4us" | "ps2ps4eu";
  }) {}
}

export default restClient;

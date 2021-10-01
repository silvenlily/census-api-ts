import continentLock from "./worldEvents/continentLock";
import continentUnlock from "./worldEvents/continentUnlock";
import facilityControl from "./worldEvents/facilityControl";
import metagameEvent from "./worldEvents/metagameEvent";

type worldEvent = continentLock | continentUnlock | facilityControl | metagameEvent;

export default worldEvent;

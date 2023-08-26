import type { Serialized } from "./types/Serialized";
import { storable } from "./util/storable";

export const scoutedMatches = storable<Array<Serialized>>("matches", [] as Array<Serialized>);
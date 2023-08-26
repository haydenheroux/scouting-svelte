import type { Participant } from "./types/Participant";
import type { Serialized } from "./types/Serialized";
import { storable } from "./util/storable";

export const scoutedMatches = storable<Array<Serialized>>("matches", [] as Array<Serialized>);

export const globalParticipant = storable<Participant>("participant", {} as Participant);

export const schedule = storable<Record<string, number>>("schedule", {})
import type { Participant } from "./types/Participant";
import type { Serialized, SerializedAlliance } from "./types/Serialized";
import { storable } from "./util/storable";

export const scoutedMatches = storable<Array<Serialized>>("matches", [] as Array<Serialized>);

export const globalParticipant = storable<Participant>("participant", {} as Participant);

type TeamNumberAndAlliance = {
    teamNumber: number;
    alliance: SerializedAlliance;
};

export const schedule = storable<Record<string, TeamNumberAndAlliance>>("schedule", {})
import type { Participant } from "./types/Participant";
import type { Serialized, SerializedAlliance } from "./types/Serialized";
import { storable } from "./util/storable";

export const scoutedMatches = storable<Array<Serialized>>("matches", [] as Array<Serialized>);

export const globalParticipant = storable<Participant>("participant", {} as Participant);

export type MatchSchedule = Record<string, TeamNumberAndAlliance>;

type TeamNumberAndAlliance = {
    teamNumber: number;
    alliance: SerializedAlliance;
};

export const schedule = storable<MatchSchedule>("schedule", {})
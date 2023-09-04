import type { Participant } from "./types/Participant";
import type { Serialized, SerializedAlliance, SerializedMatchCode } from "./api/Serialized";
import { storable } from "./util/storable";

export const storedMatches = storable<Array<Serialized>>("matches", [] as Array<Serialized>);

export const storedParticipant = storable<Participant>("participant", { type: "Qualification", match: 1 } as Participant);

export type EventSchedules = Record<string, MatchSchedule>;

export type MatchSchedule = Record<SerializedMatchCode, TeamAndAlliance>;

type TeamAndAlliance = {
    team: number;
    alliance: SerializedAlliance;
};

export const storedSchedules = storable<EventSchedules>("schedules", {})

export function schedulesPresent(): boolean {
    let schedules = storedSchedules.get();

    return Object.keys(schedules).length > 0; 
}

export function getTeamAndAllianceOrNull(event: string, match: SerializedMatchCode): TeamAndAlliance | null {
    let schedules = storedSchedules.get();

    if (event in schedules == false) return null;

    let eventSchedule = schedules[event];

    if (match in eventSchedule == false) return null;

    return eventSchedule[match];
}
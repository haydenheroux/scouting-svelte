import type { SerializedAlliance, SerializedMatchCode } from '$lib/api';
import { storable } from '../util/storable';
import type { Report } from './Report';

export const storedReports = storable<Array<Report>>('reports', [] as Array<Report>);

export type EventSchedules = Record<string, MatchSchedule>;

export type MatchSchedule = Record<SerializedMatchCode, TeamAndAlliance>;

type TeamAndAlliance = {
    team: number;
    alliance: SerializedAlliance;
};

export const storedSchedules = storable<EventSchedules>('schedules', {});

export function getTeamAndAllianceOrNull(
    event: string,
    match: SerializedMatchCode
): TeamAndAlliance | null {
    let schedules = storedSchedules.get();

    if (event in schedules == false) return null;

    let eventSchedule = schedules[event];

    if (match in eventSchedule == false) return null;

    return eventSchedule[match];
}

import { participantToSerializedParticipant } from '$lib/adapter';
import {
	serializedParticipantsAreEqual,
	type SerializedAlliance,
	type SerializedMatchCode
} from '$lib/api';
import type { Participant } from '../types/Participant';
import { storable } from '../util/storable';
import type { Metrics, Report } from './Report';

export const storedReports = storable<Array<Report>>('reports', [] as Array<Report>);

export function getReportOrNull(participant: Participant): Report | null {
	const serializedParticipant = participantToSerializedParticipant(participant);

	const reports = storedReports.get();

	const allReportsByParticipant = reports.filter((report) => {
		return serializedParticipantsAreEqual(report.participant, serializedParticipant);
	});

	if (allReportsByParticipant.length > 1) return null;

	return allReportsByParticipant[allReportsByParticipant.length - 1];
}

export function getMetricsOrNull(participant: Participant): Metrics | null {
	const report = getReportOrNull(participant);

	if (!report) return null;

	return report.metrics;
}

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

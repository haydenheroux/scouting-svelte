import { createDefaultParticipant, type Participant } from '$lib/participant';
import {
	getMatchKey,
	serialize,
	type SerializedAlliance,
	type SerializedMatchKey,
	type SerializedParticipantMetrics
} from './api';
import type { MatchMetrics } from './metrics';
import { storable } from './storable';

export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

export const storedMatches = storable<MatchToAlliance>('matches', {} as MatchToAlliance);

export type MatchToAlliance = Record<SerializedMatchKey, AllianceToStations>;
export type AllianceToStations = Record<SerializedAlliance, StationToMetrics>;
export type StationToMetrics = Record<number, Array<SerializedParticipantMetrics>>;

export function serializeAndStore(
	participant: Participant,
	metrics: MatchMetrics
): SerializedParticipantMetrics {
	const serialized = serialize(participant, metrics);

	const allMatches = storedMatches.get();

	const matchKey = getMatchKey(serialized.participant);

	const matchAlliances = allMatches[matchKey] || {};
	const allianceStations = matchAlliances[serialized.participant.alliance] || {};
	const stationMetrics = allianceStations[participant.station] || [];

	stationMetrics.push(serialized);

	allianceStations[participant.station] = stationMetrics;
	matchAlliances[serialized.participant.alliance] = allianceStations;
	allMatches[matchKey] = matchAlliances;

	storedMatches.set(allMatches);

	return serialized;
}

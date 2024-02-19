// TODO Ensure compatibility between API types and API.

import { participantToSerializedParticipant } from './adapter';
import type { MatchMetrics } from './metrics';
import type { Participant } from './participant';

export type SerializedMatchType = 'qm' | 'qf' | 'sf' | 'f';

export type SerializedAlliance = 'red' | 'blue';

export interface SerializedParticipant {
	set: number;
	match: number;
	type: SerializedMatchType;
	alliance: SerializedAlliance;
	station: number;
}

export type SerializedMatchCode = string;

export function getMatchCode(participant: SerializedParticipant): SerializedMatchCode {
	let s = '';
	s += participant.type;

	if (participant.type != 'qm') {
		s += participant.set;
		s += 'm';
	}

	s += participant.match;

	return s;
}

export type SerializedMatchMetrics = Record<string, string>;

export interface SerializedParticipantMetrics {
	participant: SerializedParticipant;
	metrics: SerializedMatchMetrics;
}

export function serialize(
	participant: Participant,
	metrics: MatchMetrics
): SerializedParticipantMetrics {
	return {
		participant: participantToSerializedParticipant(participant),
		metrics: metrics.serialize()
	};
}

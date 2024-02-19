// TODO Ensure compatibility between API types and API.

import { participantToSerializedParticipant } from './adapter';
import type { MatchMetrics } from './metrics';
import { MatchType, type Participant } from './participant';

export type SerializedMatchType = 'qm' | 'qf' | 'sf' | 'f';

export type SerializedAlliance = 'red' | 'blue';

export interface SerializedParticipant {
	set: number;
	match: number;
	type: SerializedMatchType;
	alliance: SerializedAlliance;
	station: number;
}

export type SerializedMatchKey = string;

export function getMatchKey(participant: SerializedParticipant): SerializedMatchKey {
	let s = '';
	s += participant.type;

	if (participant.type != 'qm') {
		s += participant.set;
		s += 'm';
	}

	s += participant.match;

	return s;
}

const matchTypeOf: Record<SerializedMatchType, MatchType> = {
	qm: MatchType.QUALIFICATION,
	qf: MatchType.QUARTERFINAL,
	sf: MatchType.SEMIFINAL,
	f: MatchType.FINAL
};

interface ParseMatchKeyResult {
	set: number;
	match: number;
	type: MatchType;
}

export function parseMatchKey(matchKey: SerializedMatchKey): ParseMatchKeyResult {
	const regex = new RegExp('(?:.*_)?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?');
	const match = regex.exec(matchKey);

	if (match !== null) {
		const [, type, matchNum, setNum] = match;
		const isQualificationMatch = type === 'qm';

		const safe_type: SerializedMatchType = type as SerializedMatchType;

		if (isQualificationMatch) {
			const set = 1; // default value for set in TBA is 1
			const match = parseInt(matchNum);
			const type = matchTypeOf[safe_type];
			return { set, match, type };
		} else {
			const set = parseInt(matchNum);
			const match = parseInt(setNum);
			const type = matchTypeOf[safe_type];
			return { set, match, type };
		}
	}

	return { set: 1, match: 1, type: MatchType.QUALIFICATION };
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

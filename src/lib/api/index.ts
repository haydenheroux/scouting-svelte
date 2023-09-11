// TODO Ensure compatibility between API types and API.

export type SerializedMatchType = 'qm' | 'qf' | 'sf' | 'f';

export type SerializedAlliance = 'red' | 'blue';

export interface SerializedParticipant {
	teamNumber: number;
	set: number;
	number: number;
	type: SerializedMatchType;
	event: string;
	alliance: SerializedAlliance;
}

export function serializedParticipantsAreEqual(
	sp1: SerializedParticipant,
	sp2: SerializedParticipant
) {
	return (
		sp1.teamNumber == sp2.teamNumber &&
		sp1.set == sp2.set &&
		sp1.number == sp2.number &&
		sp1.type == sp2.type &&
		sp1.event == sp2.event &&
		sp1.alliance == sp2.alliance
	);
}

export type SerializedMatchCode = string;

export function getMatchCode(participant: SerializedParticipant): SerializedMatchCode {
	let s = '';
	s += participant.type;

	if (participant.type != 'qm') {
		s += participant.set;
		s += 'm';
	}

	s += participant.number;

	return s;
}

export function getQueryString(participant: SerializedParticipant): URLSearchParams {
	return new URLSearchParams({
		team: participant.teamNumber.toString(),
		match: getMatchCode(participant),
		event: participant.event,
		alliance: participant.alliance
	});
}

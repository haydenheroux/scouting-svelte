export enum MatchType {
	QUALIFICATION = 'Qualification',
	QUARTERFINAL = 'Quarterfinal',
	SEMIFINAL = 'Semifinal',
	FINAL = 'Final'
}

export enum Alliance {
	RED = 'Red',
	BLUE = 'Blue'
}

export enum Station {
	ONE = 1,
	TWO = 2,
	THREE = 3
}

export interface Participant {
	type: MatchType;
	set: number;
	match: number;
	alliance: Alliance;
	station: Station;
}

export function createDefaultParticipant(): Participant {
	return {
		alliance: Alliance.BLUE,
		station: Station.ONE,
		type: MatchType.QUALIFICATION,
		set: 0,
		match: 1
	};
}

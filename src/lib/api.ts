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
	alliance: Alliance;
	matchKey: MatchKey;
	station: Station;
	team: number;
}

type TBAEventCode = string;

export enum MatchType {
	QUALIFICATION = 'Qualification',
	QUARTERFINAL = 'Quarterfinal',
	SEMIFINAL = 'Semifinal',
	FINAL = 'Final'
}

export enum TBAMatchType {
	QUALIFICATION = 'qm',
	QUARTERFINAL = 'qf',
	SEMIFINAL = 'sf',
	FINAL = 'f'
}

const matchTypeOf: Record<TBAMatchType, MatchType> = {
	[TBAMatchType.QUALIFICATION]: MatchType.QUALIFICATION,
	[TBAMatchType.QUARTERFINAL]: MatchType.QUARTERFINAL,
	[TBAMatchType.SEMIFINAL]: MatchType.SEMIFINAL,
	[TBAMatchType.FINAL]: MatchType.FINAL
};

const tbaMatchTypeOf: Record<MatchType, TBAMatchType> = {
	[MatchType.QUALIFICATION]: TBAMatchType.QUALIFICATION,
	[MatchType.QUARTERFINAL]: TBAMatchType.QUARTERFINAL,
	[MatchType.SEMIFINAL]: TBAMatchType.SEMIFINAL,
	[MatchType.FINAL]: TBAMatchType.FINAL,
}

type MatchNumber = number;

type SetNumber = number;

class MatchKey {
	eventCode: TBAEventCode;
	match: MatchNumber;
	matchType: MatchType;
	set: SetNumber;

	constructor(eventCode: TBAEventCode, matchType: MatchType, set: SetNumber, match: MatchNumber) {
		this.eventCode = eventCode;
		this.match = match;
		this.matchType = matchType;
		this.set = set;
	}

	static parse(string: string): MatchKey | null {
		const regex = new RegExp("(?:.*_)?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?");
		const parsedMatch = regex.exec(string);

		if (parsedMatch === null) return null;

		const [tbaEvent, tbaMatchType, firstNumber, secondNumber] = parsedMatch;

		const matchType = matchTypeOf[tbaMatchType as TBAMatchType];
		const set = matchType === MatchType.QUALIFICATION ? 1 : parseInt(secondNumber);
		const match = matchType === MatchType.QUALIFICATION ? parseInt(firstNumber) : parseInt(secondNumber);

		return new MatchKey(tbaEvent, matchType, set, match);
	}

	string(): string {
		const tbaMatchType = tbaMatchTypeOf[this.matchType];

		if (this.matchType== MatchType.QUALIFICATION) {
			return `${this.eventCode}_${tbaMatchType}${this.match}`;
		}

		return `${this.eventCode}_${tbaMatchType}${this.set}m${this.match}`
	}

}
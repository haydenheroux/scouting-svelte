export enum Alliance {
	RED = "Red",
	BLUE = "Blue"
}

export type StationNumber = 1 | 2 | 3;

export enum StationEnum {
	RED_1,
	RED_2,
	RED_3,
	BLUE_1,
	BLUE_2,
	BLUE_3
}

export const driverStations = [
	StationEnum.RED_1,
	StationEnum.RED_2,
	StationEnum.RED_3,
	StationEnum.BLUE_1,
	StationEnum.BLUE_2,
	StationEnum.BLUE_3
];

export class DriverStation {
	alliance: Alliance;
	station: StationNumber;

	constructor(alliance: Alliance, station: StationNumber) {
		this.alliance = alliance;
		this.station = station;
	}

	static of(stationEnum: StationEnum): DriverStation {
		switch (stationEnum) {
			case StationEnum.RED_1:
				return new DriverStation(Alliance.RED, 1);
			case StationEnum.RED_2:
				return new DriverStation(Alliance.RED, 2);
			case StationEnum.RED_3:
				return new DriverStation(Alliance.RED, 3);
			case StationEnum.BLUE_1:
				return new DriverStation(Alliance.BLUE, 1);
			case StationEnum.BLUE_2:
				return new DriverStation(Alliance.BLUE, 2);
			case StationEnum.BLUE_3:
				return new DriverStation(Alliance.BLUE, 3);
		}
	}

	isRed(): boolean {
		return this.alliance === Alliance.RED;
	}

	isBlue(): boolean {
		return this.alliance === Alliance.BLUE;
	}

	toString(): string {
		return `${this.alliance} ${this.station}`;
	}
}

export type TBAEventCode = string;

export class Event {
	code: TBAEventCode;
	name: string | null;

	constructor(code: TBAEventCode, name: string | null) {
		this.code = code;
		this.name = name;
	}
}

function getEventOrNull(eventCode: TBAEventCode): Event | null {
	const eventCodeToName: Record<TBAEventCode, string> = {
		"2024necmp": "New England FIRST District Championship 2024"
	};

	const nameOrNull = eventCodeToName[eventCode];

	// eventCode not stored
	if (nameOrNull == null) return new Event(eventCode, null);

	return null;
}

export enum MatchType {
	QUALIFICATION = "Qualification",
	QUARTERFINAL = "Quarterfinal",
	SEMIFINAL = "Semifinal",
	FINAL = "Final"
}

export enum TBAMatchType {
	QUALIFICATION = "qm",
	QUARTERFINAL = "qf",
	SEMIFINAL = "sf",
	FINAL = "f"
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
	[MatchType.FINAL]: TBAMatchType.FINAL
};

export type MatchNumber = number;

export type SetNumber = number;

export class MatchKey {
	event: Event | null;
	match: MatchNumber;
	matchType: MatchType;
	set: SetNumber;

	constructor(event: Event | null, matchType: MatchType, set: SetNumber, match: MatchNumber) {
		this.event = event;
		this.match = match;
		this.matchType = matchType;
		this.set = set;
	}

	static parse(string: string): MatchKey | null {
		const regex = new RegExp("(?:.*_)?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?");
		const parsedMatch = regex.exec(string);

		if (parsedMatch === null) return null;

		const [tbaEvent, tbaMatchType, firstNumber, secondNumber] = parsedMatch;

		const eventOrNull = getEventOrNull(tbaEvent);

		const matchType = matchTypeOf[tbaMatchType as TBAMatchType];
		const set = matchType === MatchType.QUALIFICATION ? 1 : parseInt(secondNumber);
		const match =
			matchType === MatchType.QUALIFICATION ? parseInt(firstNumber) : parseInt(secondNumber);

		return new MatchKey(eventOrNull, matchType, set, match);
	}

	toString(): string {
		const tbaMatchType = tbaMatchTypeOf[this.matchType];

		if (this.matchType == MatchType.QUALIFICATION) {
			if (this.event == null) {
				return `${tbaMatchType}${this.match}`;
			}

			return `${this.event.code}_${tbaMatchType}${this.match}`;
		}

		if (this.event == null) {
			return `${tbaMatchType}${this.set}m${this.match}`;
		}

		return `${this.event.code}_${tbaMatchType}${this.set}m${this.match}`;
	}
}

export type Participant = {
	match: MatchKey;
	driverStation: DriverStation;
	team: number | null;
};

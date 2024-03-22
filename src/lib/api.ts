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

export type DriverStation = {
	alliance: Alliance;
	station: StationNumber;
};

export function createDriverStation(alliance: Alliance, station: StationNumber): DriverStation {
	return {
		alliance,
		station
	};
}

export function stringifyDriverStation(driverStation: DriverStation): string {
	return `${driverStation.alliance} ${driverStation.station}`;
}

export function driverStationOf(stationEnum: StationEnum): DriverStation {
	switch (stationEnum) {
		case StationEnum.RED_1:
			return createDriverStation(Alliance.RED, 1);
		case StationEnum.RED_2:
			return createDriverStation(Alliance.RED, 2);
		case StationEnum.RED_3:
			return createDriverStation(Alliance.RED, 3);
		case StationEnum.BLUE_1:
			return createDriverStation(Alliance.BLUE, 1);
		case StationEnum.BLUE_2:
			return createDriverStation(Alliance.BLUE, 2);
		case StationEnum.BLUE_3:
			return createDriverStation(Alliance.BLUE, 3);
	}
}

export type TBAEventCode = string;

export type Event = {
	code: TBAEventCode;
	name: string | null;
};

export function createEvent(code: TBAEventCode, name: string | null): Event {
	return {
		code,
		name
	};
}

export function validateEvent(obj: object | null): Event | null {
	if (obj === null || obj === undefined) return null;

	if (
		Object.prototype.hasOwnProperty.call(obj, "code") &&
		Object.prototype.hasOwnProperty.call(obj, "name")
	)
		return obj as Event;

	return null;
}

function getEventOrNull(eventCode: TBAEventCode): Event | null {
	// TODO
	const eventCodeToName: Record<TBAEventCode, string> = {
		"2024necmp": "New England FIRST District Championship 2024"
	};

	const nameOrNull = eventCodeToName[eventCode];

	// eventCode not stored
	if (nameOrNull == null) return createEvent(eventCode, null);

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

export type MatchKey = {
	event: Event | null;
	match: MatchNumber;
	matchType: MatchType;
	set: SetNumber;
};

export function createMatchKey(
	event: Event | null,
	matchType: MatchType,
	set: SetNumber,
	match: MatchNumber
): MatchKey {
	return {
		event,
		match,
		matchType,
		set
	};
}

export function parseMatchKey(string: string): MatchKey | null {
	const regex = new RegExp("(?:.*_)?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?");
	const parsedMatch = regex.exec(string);

	if (parsedMatch === null) return null;

	const [tbaEvent, tbaMatchType, firstNumber, secondNumber] = parsedMatch;

	const eventOrNull = getEventOrNull(tbaEvent);

	const matchType = matchTypeOf[tbaMatchType as TBAMatchType];
	const set = matchType === MatchType.QUALIFICATION ? 1 : parseInt(secondNumber);
	const match =
		matchType === MatchType.QUALIFICATION ? parseInt(firstNumber) : parseInt(secondNumber);

	return createMatchKey(eventOrNull, matchType, set, match);
}

export function stringifyMatchKey(matchKey: MatchKey): string {
	const tbaMatchType = tbaMatchTypeOf[matchKey.matchType];

	if (matchKey.matchType == MatchType.QUALIFICATION) {
		if (matchKey.event == null) {
			return `${tbaMatchType}${matchKey.match}`;
		}

		return `${matchKey.event.code}_${tbaMatchType}${matchKey.match}`;
	}

	if (matchKey.event == null) {
		return `${tbaMatchType}${matchKey.set}m${matchKey.match}`;
	}

	return `${matchKey.event.code}_${tbaMatchType}${matchKey.set}m${matchKey.match}`;
}

export type Participant = {
	match: MatchKey;
	driverStation: DriverStation;
	team: number | null;
};

import { storedEvents } from "./stores";

export enum Alliance {
	RED = "Red",
	BLUE = "Blue"
}

export type StationNumber = 1 | 2 | 3;

export const stationNumbers: StationNumber[] = [1, 2, 3];

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

export function stationEnumOf(alliance: Alliance, station: StationNumber): StationEnum | null {
	switch (alliance) {
		case Alliance.RED:
			switch (station) {
				case 1:
					return StationEnum.RED_1;
				case 2:
					return StationEnum.RED_2;
				case 3:
					return StationEnum.RED_3;
			}
			break;
		case Alliance.BLUE:
			switch (station) {
				case 1:
					return StationEnum.BLUE_1;
				case 2:
					return StationEnum.BLUE_2;
				case 3:
					return StationEnum.BLUE_3;
			}
			break;
	}
	return null; // Return null if the provided DriverStation is invalid
}

export type TBAEventCode = string;

export type Event = {
	code: TBAEventCode;
	name: string;
};

export function createEvent(code: TBAEventCode, name: string): Event {
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

export function getEventByEventCode(eventCode: TBAEventCode): Event | null {
	const events = storedEvents.get();

	for (const event of events) {
		if (event.code === eventCode) {
			return event;
		}
	}

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

const typeOf: Record<TBAMatchType, MatchType> = {
	[TBAMatchType.QUALIFICATION]: MatchType.QUALIFICATION,
	[TBAMatchType.QUARTERFINAL]: MatchType.QUARTERFINAL,
	[TBAMatchType.SEMIFINAL]: MatchType.SEMIFINAL,
	[TBAMatchType.FINAL]: MatchType.FINAL
};

const tbaTypeOf: Record<MatchType, TBAMatchType> = {
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
	type: MatchType;
	set: SetNumber;
};

function createMatchKey(
	event: Event | null,
	type: MatchType,
	set: SetNumber,
	match: MatchNumber
): MatchKey {
	return {
		event,
		match,
		type,
		set
	};
}

export function createQualificationMatchKey(event: Event | null, match: MatchNumber) {
	return createMatchKey(event, MatchType.QUALIFICATION, 1, match);
}

export type TBAMatchKey = string;

export function parseMatchKey(matchKey: TBAMatchKey): MatchKey | null {
	const regex = new RegExp("([^_]*)?_?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?");
	const parsedMatch = regex.exec(matchKey);

	if (parsedMatch === null) return null;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, tbaEvent, tbaMatchType, firstNumber, secondNumber] = parsedMatch;

	const event = getEventByEventCode(tbaEvent);

	const type = typeOf[tbaMatchType as TBAMatchType];
	const set = type === MatchType.QUALIFICATION ? 1 : parseInt(secondNumber);
	const match = type === MatchType.QUALIFICATION ? parseInt(firstNumber) : parseInt(secondNumber);

	return createMatchKey(event, type, set, match);
}

export function tbaMatchKey(matchKey: MatchKey): TBAMatchKey {
	const tbaMatchType = tbaTypeOf[matchKey.type];

	if (matchKey.type == MatchType.QUALIFICATION) {
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

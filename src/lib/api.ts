import type { Metrics } from "./metrics"
import { storedEvents, storedMetrics } from "./stores"

export enum Alliance {
	RED = "Red",
	BLUE = "Blue"
}

export type StationNumber = 1 | 2 | 3

export const stationNumbers: StationNumber[] = [1, 2, 3]

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
]

export type DriverStation = {
	alliance: Alliance
	station: StationNumber
}

export function createDriverStation(alliance: Alliance, station: StationNumber): DriverStation {
	return {
		alliance,
		station
	}
}

export function stringifyDriverStation(driverStation: DriverStation): string {
	return `${driverStation.alliance} ${driverStation.station}`
}

export function driverStationOf(stationEnum: StationEnum): DriverStation {
	switch (stationEnum) {
		case StationEnum.RED_1:
			return createDriverStation(Alliance.RED, 1)
		case StationEnum.RED_2:
			return createDriverStation(Alliance.RED, 2)
		case StationEnum.RED_3:
			return createDriverStation(Alliance.RED, 3)
		case StationEnum.BLUE_1:
			return createDriverStation(Alliance.BLUE, 1)
		case StationEnum.BLUE_2:
			return createDriverStation(Alliance.BLUE, 2)
		case StationEnum.BLUE_3:
			return createDriverStation(Alliance.BLUE, 3)
	}
}

export function stationEnumOf(alliance: Alliance, station: StationNumber): StationEnum | null {
	switch (alliance) {
		case Alliance.RED:
			switch (station) {
				case 1:
					return StationEnum.RED_1
				case 2:
					return StationEnum.RED_2
				case 3:
					return StationEnum.RED_3
			}
			break
		case Alliance.BLUE:
			switch (station) {
				case 1:
					return StationEnum.BLUE_1
				case 2:
					return StationEnum.BLUE_2
				case 3:
					return StationEnum.BLUE_3
			}
			break
	}
	return null // Return null if the provided DriverStation is invalid
}

export type TBAEventCode = string

export type Event = {
	code: TBAEventCode
	name: string
}

export function createEvent(code: TBAEventCode, name: string): Event {
	return {
		code,
		name
	}
}

export function validateEvent(obj: object | null): Event | null {
	if (obj === null || obj === undefined) return null

	if (
		Object.prototype.hasOwnProperty.call(obj, "code") &&
		Object.prototype.hasOwnProperty.call(obj, "name")
	)
		return obj as Event

	return null
}

export function getEventByEventCode(eventCode: TBAEventCode): Event | null {
	const events = storedEvents.get()

	for (const event of events) {
		if (event.code === eventCode) {
			return event
		}
	}

	return null
}

export function getMetricsByEventCode(eventCode: TBAEventCode | null): Metrics[] {
	return storedMetrics.get().filter((matchMetrics) => matchMetrics.match?.eventCode === eventCode)
}

export function getEventCodesWithMetrics(): TBAEventCode[] {
	return storedEvents.get().map((event) => event.code).filter((eventCode) => getMetricsByEventCode(eventCode).length > 0)
}

export function sortMetricsByMatch(metrics: Metrics[]): Map<TBAMatchKey, Array<Metrics>> {
	const matchKeyMap: Map<TBAMatchKey, Array<Metrics>> = new Map()

	for (const metric of metrics) {
		const matchKey = tbaMatchKey(metric.match);

		let matchMetrics = matchKeyMap.get(matchKey);

		if (!matchMetrics) {
			matchMetrics = [];
		}

		matchMetrics.push(metric);

		matchKeyMap.set(matchKey, matchMetrics);
	}

	return matchKeyMap;
}

export type MetricsByAllianceByStation = Map<
	TBAMatchKey,
	Map<Alliance, Map<StationNumber, Metrics | null>>
>

export function sortMetricsByMatchAllianceStation(metrics: Metrics[]): MetricsByAllianceByStation {
	const matchKeyMap: MetricsByAllianceByStation = new Map()

	for (const metric of metrics) {
		if (!metric || !metric.match) {
			console.warn(`Metric ${JSON.stringify(metric)} is invalid or has null match`)
			continue
		}

		const matchKey = tbaMatchKey(metric.match)

		let allianceMap = matchKeyMap.get(matchKey)
		if (!allianceMap) {
			allianceMap = new Map()
			matchKeyMap.set(matchKey, allianceMap)
		}

		if (!metric.alliance) {
			console.warn(`Metric ${JSON.stringify(metric)} has null alliance`)
			continue
		}

		let stationMetricsMap = allianceMap.get(metric.alliance)
		if (!stationMetricsMap) {
			stationMetricsMap = new Map()
			allianceMap.set(metric.alliance, stationMetricsMap)
		}

		if (metric.station === null) {
			console.warn(`Metric ${JSON.stringify(metric)} has null stationNumber`)
			continue
		}

		stationMetricsMap.set(metric.station, metric)
	}

	return matchKeyMap
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
}

const tbaTypeOf: Record<MatchType, TBAMatchType> = {
	[MatchType.QUALIFICATION]: TBAMatchType.QUALIFICATION,
	[MatchType.QUARTERFINAL]: TBAMatchType.QUARTERFINAL,
	[MatchType.SEMIFINAL]: TBAMatchType.SEMIFINAL,
	[MatchType.FINAL]: TBAMatchType.FINAL
}

export type MatchNumber = number

export type SetNumber = number

export type MatchKey = {
	eventCode: TBAEventCode | null
	match: MatchNumber
	type: MatchType
	set: SetNumber
}

function createMatchKey(
	eventCode: TBAEventCode | null,
	type: MatchType,
	set: SetNumber,
	match: MatchNumber
): MatchKey {
	return {
		eventCode,
		match,
		type,
		set
	}
}

export function createQualificationMatchKey(eventCode: TBAEventCode | null, match: MatchNumber) {
	return createMatchKey(eventCode, MatchType.QUALIFICATION, 1, match)
}

export type TBAMatchKey = string

export function parseMatchKey(matchKey: TBAMatchKey): MatchKey | null {
	const regex = new RegExp("([^_]*)?_?(qm|qf|sf|f)(\\d{1,2})(?:m(\\d{1,2}))?")
	const parsedMatch = regex.exec(matchKey)

	if (parsedMatch === null) return null

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, tbaEvent, tbaMatchType, firstNumber, secondNumber] = parsedMatch

	const type = typeOf[tbaMatchType as TBAMatchType]
	const set = type === MatchType.QUALIFICATION ? 1 : parseInt(secondNumber)
	const match = type === MatchType.QUALIFICATION ? parseInt(firstNumber) : parseInt(secondNumber)

	return createMatchKey(tbaEvent, type, set, match)
}

export function tbaMatchKey(matchKey: MatchKey): TBAMatchKey {
	const tbaMatchType = tbaTypeOf[matchKey.type]

	if (matchKey.type == MatchType.QUALIFICATION) {
		if (matchKey.eventCode == null) {
			return `${tbaMatchType}${matchKey.match}`
		}

		return `${matchKey.eventCode}_${tbaMatchType}${matchKey.match}`
	}

	if (matchKey.eventCode == null) {
		return `${tbaMatchType}${matchKey.set}m${matchKey.match}`
	}

	return `${matchKey.eventCode}_${tbaMatchType}${matchKey.set}m${matchKey.match}`
}

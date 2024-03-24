import { NormalizedPoint } from "$lib/point";
import { arrayToObject, stringToArray } from "$lib/array";
import {
	type MatchKey,
	type Alliance,
	parseMatchKey,
	tbaMatchKey,
	type StationNumber
} from "./api";

export enum Trap {
	NONE = "None",
	FAIL = "Fail",
	SUCCESS = "Success"
}
export enum Climb {
	NONE = "None",
	FAIL = "Fail",
	SUCCESS = "Success"
}
export enum Harmony {
	ZERO = "None",
	ONE = "+1",
	TWO = "+2"
}
export enum HighNotes {
	NONE = "None",
	ZERO = "0",
	ONE = "1",
	TWO = "2",
	THREE = "3"
}

const MATCH_KEY = "m";

const ALLIANCE_KEY = "a";
const STATION_KEY = "s";

const TEAM_KEY = "t";

const START_KEY = "sp";

const LEAVE_KEY = "lv";

const AUTO_AMP_MAKE_KEY = "aa_make";
const AUTO_AMP_MISS_KEY = "aa_miss";
const AUTO_SPEAKER_MAKE_KEY = "as_make";
const AUTO_SPEAKER_MISS_KEY = "as_miss";

const TELEOP_AMP_MAKE_KEY = "ta_make";
const TELEOP_AMP_MISS_KEY = "ta_miss";
const TELEOP_SPEAKER_MAKE_KEY = "ts_make";
const TELEOP_SPEAKER_MISS_KEY = "ts_miss";

const TRAP_KEY = "trap";
const CLIMB_KEY = "clmb";
const HARMONY_KEY = "harm";

const DEFENSE_KEY = "def";
const DRIVING_KEY = "drv";
const DOWNTIME_KEY = "dwn";
const OTHER_KEY = "oth";

export type Metrics = {
	match: MatchKey;

	alliance: Alliance;
	station: StationNumber;

	team: number;

	start: NormalizedPoint;
	autoAmpMakes: number;
	autoAmpMisses: number;

	autoSpeakerMakes: number;
	autoSpeakerMisses: number;

	leave: boolean;

	teleopAmpMakes: number;
	teleopAmpMisses: number;

	teleopSpeakerMakes: number;
	teleopSpeakerMisses: number;

	trap: Trap;
	climb: Climb;
	harmony: Harmony;

	defenseNotes: Array<string>;
	drivingNotes: Array<string>;
	downtimeNotes: Array<string>;
	otherNotes: Array<string>;
};

export function deserializeMetrics(serialized: Record<string, string>): Metrics | null {
	const metrics = {} as Metrics;

	const match = parseMatchKey(serialized[MATCH_KEY]);

	if (!match) {
		return null;
	}

	metrics.match = match;

	metrics.alliance = serialized[ALLIANCE_KEY] as Alliance;
	metrics.station = Number.parseInt(serialized[STATION_KEY]) as StationNumber;

	metrics.team = Number.parseInt(serialized[TEAM_KEY]);

	metrics.start = NormalizedPoint.fromString(serialized[START_KEY]);

	metrics.autoAmpMakes = Number.parseInt(serialized[AUTO_AMP_MAKE_KEY]);
	metrics.autoAmpMisses = Number.parseInt(serialized[AUTO_AMP_MISS_KEY]);

	metrics.autoSpeakerMakes = Number.parseInt(serialized[AUTO_SPEAKER_MAKE_KEY]);
	metrics.autoSpeakerMisses = Number.parseInt(serialized[AUTO_SPEAKER_MISS_KEY]);

	metrics.leave = serialized[LEAVE_KEY] == "true";

	metrics.teleopAmpMakes = Number.parseInt(serialized[TELEOP_AMP_MAKE_KEY]);
	metrics.teleopAmpMisses = Number.parseInt(serialized[TELEOP_AMP_MISS_KEY]);

	metrics.teleopSpeakerMakes = Number.parseInt(serialized[TELEOP_SPEAKER_MAKE_KEY]);
	metrics.teleopSpeakerMisses = Number.parseInt(serialized[TELEOP_SPEAKER_MISS_KEY]);

	metrics.trap = serialized[TRAP_KEY] as Trap;
	metrics.climb = serialized[CLIMB_KEY] as Climb;
	metrics.harmony = serialized[HARMONY_KEY] as Harmony;

	metrics.defenseNotes = stringToArray(DEFENSE_KEY, serialized);
	metrics.drivingNotes = stringToArray(DRIVING_KEY, serialized);
	metrics.downtimeNotes = stringToArray(DOWNTIME_KEY, serialized);
	metrics.otherNotes = stringToArray(OTHER_KEY, serialized);

	return metrics;
}

export function serializeMetrics(metrics: Metrics): Record<string, string> {
	return {
		[MATCH_KEY]: metrics.match ? tbaMatchKey(metrics.match) : "",

		[ALLIANCE_KEY]: metrics.alliance ? metrics.alliance.toString() : "",

		[STATION_KEY]: metrics.station ? metrics.station.toString() : "",

		[TEAM_KEY]: metrics.team ? metrics.team.toString() : "",

		[START_KEY]: metrics.start ? metrics.start.stringify() : "",

		[AUTO_AMP_MAKE_KEY]: metrics.autoAmpMakes.toString(),
		[AUTO_AMP_MISS_KEY]: metrics.autoAmpMisses.toString(),

		[AUTO_SPEAKER_MAKE_KEY]: metrics.autoSpeakerMakes.toString(),
		[AUTO_SPEAKER_MISS_KEY]: metrics.autoSpeakerMisses.toString(),

		[LEAVE_KEY]: metrics.leave.toString(),

		[TELEOP_AMP_MAKE_KEY]: metrics.teleopAmpMakes.toString(),
		[TELEOP_AMP_MISS_KEY]: metrics.teleopAmpMisses.toString(),

		[TELEOP_SPEAKER_MAKE_KEY]: metrics.teleopSpeakerMakes.toString(),
		[TELEOP_SPEAKER_MISS_KEY]: metrics.teleopSpeakerMisses.toString(),

		[TRAP_KEY]: metrics.trap,
		[CLIMB_KEY]: metrics.climb,
		[HARMONY_KEY]: metrics.harmony,

		...arrayToObject(DEFENSE_KEY, metrics.defenseNotes),
		...arrayToObject(DRIVING_KEY, metrics.drivingNotes),
		...arrayToObject(DOWNTIME_KEY, metrics.downtimeNotes),
		...arrayToObject(OTHER_KEY, metrics.otherNotes),
	};
}

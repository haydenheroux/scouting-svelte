import { NormalizedPoint } from "$lib/point";
import { arrayToObject, stringToArray } from "$lib/array";
import { MatchKey, type Alliance } from "./api";

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

const COOPERTITION_KEY = "coop";

const TRAP_KEY = "trap";
const CLIMB_KEY = "clmb";
const HARMONY_KEY = "harm";

const DEFENSE_KEY = "def";
const DRIVING_KEY = "drv";
const DOWNTIME_KEY = "dwn";
const OTHER_KEY = "oth";

const NAME_KEY = "name";

export class MatchMetrics {
	match: MatchKey | null = null;

	alliance: Alliance | null = null;
	station: number | null = null;

	team: number | null = null;

	start: NormalizedPoint | null = null;

	leave = false;

	autoAmpMakes = 0;
	autoAmpMisses = 0;

	autoSpeakerMakes = 0;
	autoSpeakerMisses = 0;

	teleopAmpMakes = 0;
	teleopAmpMisses = 0;

	teleopSpeakerMakes = 0;
	teleopSpeakerMisses = 0;

	coopertition = false;

	trap: Trap = Trap.NONE;
	climb: Climb = Climb.NONE;
	harmony: Harmony = Harmony.ZERO;

	defenseNotes: Array<string> = [];
	drivingNotes: Array<string> = [];
	downtimeNotes: Array<string> = [];
	otherNotes: Array<string> = [];

	name = "";

	static deserialize(serialized: Record<string, string>): MatchMetrics {
		const metrics = new MatchMetrics();

		metrics.match = MatchKey.parse(serialized[MATCH_KEY]);

		metrics.alliance = serialized[ALLIANCE_KEY] as Alliance;
		metrics.station = Number.parseInt(serialized[STATION_KEY]);

		metrics.team = Number.parseInt(serialized[TEAM_KEY]);

		metrics.start = NormalizedPoint.fromString(serialized[START_KEY]);

		metrics.leave = serialized[LEAVE_KEY] == "true";

		metrics.autoAmpMakes = Number.parseInt(serialized[AUTO_AMP_MAKE_KEY]);
		metrics.autoAmpMisses = Number.parseInt(serialized[AUTO_AMP_MISS_KEY]);

		metrics.autoSpeakerMakes = Number.parseInt(serialized[AUTO_SPEAKER_MAKE_KEY]);
		metrics.autoSpeakerMisses = Number.parseInt(serialized[AUTO_SPEAKER_MISS_KEY]);

		metrics.teleopAmpMakes = Number.parseInt(serialized[TELEOP_AMP_MAKE_KEY]);
		metrics.teleopAmpMisses = Number.parseInt(serialized[TELEOP_AMP_MISS_KEY]);

		metrics.teleopSpeakerMakes = Number.parseInt(serialized[TELEOP_SPEAKER_MAKE_KEY]);
		metrics.teleopSpeakerMisses = Number.parseInt(serialized[TELEOP_SPEAKER_MISS_KEY]);

		metrics.coopertition = serialized[COOPERTITION_KEY] == "true";

		metrics.trap = serialized[TRAP_KEY] as Trap;
		metrics.climb = serialized[CLIMB_KEY] as Climb;
		metrics.harmony = serialized[HARMONY_KEY] as Harmony;

		metrics.defenseNotes = stringToArray(DEFENSE_KEY, serialized);
		metrics.drivingNotes = stringToArray(DRIVING_KEY, serialized);
		metrics.downtimeNotes = stringToArray(DOWNTIME_KEY, serialized);
		metrics.otherNotes = stringToArray(OTHER_KEY, serialized);

		metrics.name = serialized[NAME_KEY];

		return metrics;
	}

	serialize(): Record<string, string> {
		return {
			[MATCH_KEY]: this.match ? this.match.toString() : "",

			[ALLIANCE_KEY]: this.alliance ? this.alliance.toString() : "",

			[STATION_KEY]: this.station ? this.station.toString() : "",

			[TEAM_KEY]: this.team ? this.team.toString() : "",

			[START_KEY]: this.start ? this.start.stringify() : "",

			[LEAVE_KEY]: this.leave.toString(),

			[AUTO_AMP_MAKE_KEY]: this.autoAmpMakes.toString(),
			[AUTO_AMP_MISS_KEY]: this.autoAmpMisses.toString(),

			[AUTO_SPEAKER_MAKE_KEY]: this.autoSpeakerMakes.toString(),
			[AUTO_SPEAKER_MISS_KEY]: this.autoSpeakerMisses.toString(),

			[TELEOP_AMP_MAKE_KEY]: this.teleopAmpMakes.toString(),
			[TELEOP_AMP_MISS_KEY]: this.teleopAmpMisses.toString(),

			[TELEOP_SPEAKER_MAKE_KEY]: this.teleopSpeakerMakes.toString(),
			[TELEOP_SPEAKER_MISS_KEY]: this.teleopSpeakerMisses.toString(),

			[COOPERTITION_KEY]: this.coopertition.toString(),

			[TRAP_KEY]: this.trap,
			[CLIMB_KEY]: this.climb,
			[HARMONY_KEY]: this.harmony,

			...arrayToObject(DEFENSE_KEY, this.defenseNotes),
			...arrayToObject(DRIVING_KEY, this.drivingNotes),
			...arrayToObject(DOWNTIME_KEY, this.downtimeNotes),
			...arrayToObject(OTHER_KEY, this.otherNotes),

			[NAME_KEY]: this.name
		};
	}
}

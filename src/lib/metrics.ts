import type { SerializedMatchMetrics } from '$lib/api';
import { NormalizedPoint } from '$lib/point';
import { arrayToObject, stringToArray } from '$lib/array';

export enum Trap {
	NONE = 'None',
	FAIL = 'Fail',
	SUCCESS = 'Success'
}
export enum Climb {
	NONE = 'None',
	FAIL = 'Fail',
	SUCCESS = 'Success'
}
export enum Harmony {
	ZERO = '0',
	ONE = '+1',
	TWO = '+2'
}
export enum HighNotes {
	NONE = 'None',
	ZERO = '0',
	ONE = '1',
	TWO = '2',
	THREE = '3'
}

export class MatchMetrics {
	startingPoint: Array<NormalizedPoint> = [];
	leave = false;
	pickups: Array<NormalizedPoint> = [];
	makes: Array<NormalizedPoint> = [];
	misses: Array<NormalizedPoint> = [];
	coopertition = false;
	trap: Trap = Trap.NONE;
	climb: Climb = Climb.NONE;
	harmony: Harmony = Harmony.ZERO;
	highNotes: HighNotes = HighNotes.NONE;
	defenseNotes: Array<string> = [];
	drivingNotes: Array<string> = [];
	downtimeNotes: Array<string> = [];
	otherNotes: Array<string> = [];
	scouterName = '';

	static deserialize(serialized: SerializedMatchMetrics): MatchMetrics {
		const metrics = new MatchMetrics();

		metrics.startingPoint = [NormalizedPoint.fromString(serialized['startingPoint'][0])];
		metrics.leave = serialized['leave'] == 'true';
		metrics.pickups = stringToArray('pickup', serialized).map((s) => NormalizedPoint.fromString(s));
		metrics.makes = stringToArray('make', serialized).map((s) => NormalizedPoint.fromString(s));
		metrics.misses = stringToArray('miss', serialized).map((s) => NormalizedPoint.fromString(s));
		metrics.coopertition = serialized['coopertition'] == 'true';
		metrics.trap = serialized['trap'] as Trap;
		metrics.climb = serialized['climb'] as Climb;
		metrics.harmony = serialized['harmony'] as Harmony;
		metrics.highNotes = serialized['highNotes'] as HighNotes;
		metrics.defenseNotes = stringToArray('defenseNote', serialized);
		metrics.drivingNotes = stringToArray('drivingNote', serialized);
		metrics.downtimeNotes = stringToArray('downtimeNote', serialized);
		metrics.otherNotes = stringToArray('otherNote', serialized);
		metrics.scouterName = serialized['scouterName'];

		return metrics;
	}

	serialize(): SerializedMatchMetrics {
		return {
			startingPoint: this.startingPoint
				? this.startingPoint.map((p) => p.stringify()).join(':')
				: '',
			leave: this.leave.toString(),
			...arrayToObject(
				'pickup',
				this.pickups.map((p) => p.stringify())
			),
			...arrayToObject(
				'make',
				this.makes.map((p) => p.stringify())
			),
			...arrayToObject(
				'miss',
				this.misses.map((p) => p.stringify())
			),
			coopertition: this.coopertition.toString(),
			trap: this.trap,
			climb: this.climb,
			harmony: this.harmony,
			highNotes: this.highNotes,
			...arrayToObject('defenseNote', this.defenseNotes),
			...arrayToObject('drivingNote', this.drivingNotes),
			...arrayToObject('downtimeNote', this.downtimeNotes),
			...arrayToObject('otherNote', this.otherNotes),
			scouterName: this.scouterName
		};
	}
}

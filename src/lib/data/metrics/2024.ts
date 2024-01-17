import { pointOfString, type Point } from '$lib/types/Point';
import { arrayToObject, stringToArray } from '$lib/util/array';
import type { Metrics } from '../Report';

export type Trap = 'None' | 'Fail' | 'Success';
export type Climb = 'None' | 'Fail' | 'Success';
export type Harmony = '0' | '+1' | '+2';
export type HighNotes = 'None' | '0' | '1' | '2' | '3';

export class Metrics2024 {
	startingPoint: Point | null = null;
	leave: boolean = false;
	coopertition: boolean = false;
	trap: Trap = 'None';
	climb: Climb = 'None';
	harmony: Harmony = '0';
	highNotes: HighNotes = 'None';
	defenseNotes: Array<string> = [];
	drivingNotes: Array<string> = [];
	downtimeNotes: Array<string> = [];
	otherNotes: Array<string> = [];
	scouterName: string = '';

	static fromMetrics(metrics: Metrics): Metrics2024 {
		const metrics2024 = new Metrics2024();

		metrics2024.startingPoint = pointOfString(metrics['startingPoint']);
		metrics2024.leave = metrics['taxi'] == 'true';
		metrics2024.coopertition = metrics['coopertition'] == 'true';
		metrics2024.trap = metrics['trap'] as Trap;
		metrics2024.climb = metrics['climb'] as Climb;
		metrics2024.harmony = metrics['harmony'] as Harmony;
		metrics2024.highNotes = metrics['highNotes'] as HighNotes;
		metrics2024.defenseNotes = stringToArray('defenseNote', metrics);
		metrics2024.drivingNotes = stringToArray('drivingNote', metrics);
		metrics2024.downtimeNotes = stringToArray('downtimeNote', metrics);
		metrics2024.otherNotes = stringToArray('otherNote', metrics);
		metrics2024.scouterName = metrics['scouterName'];

		return metrics2024;
	}

	flatten(): Metrics {
		return {
			startingPoint: this.startingPoint ? this.startingPoint.toString() : '',
			taxi: this.leave.toString(),
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

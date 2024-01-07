import { pointOfString, type Point } from '$lib/types/Point';
import { arrayToObject, stringToArray } from '$lib/util/array';
import type { Metrics } from '../Report';
import type { Defense } from './universal';

export class Metrics2024 {
	startingPoint: Point | null = null;
	leave: boolean = false;
	autoCargoScored: number = 0;
	speakerMakes: Array<Point> = [];
	speakerMisses: Array<Point> = [];
	defense: Defense = 'None';
	notes: Array<string> = [];
	scouterName: string = '';

	static fromMetrics(metrics: Metrics): Metrics2024 {
		const metrics2022 = new Metrics2024();

		metrics2022.startingPoint = pointOfString(metrics['startingPoint']);
		metrics2022.leave = metrics['taxi'] == 'true';
		metrics2022.autoCargoScored = Number(metrics['autoCargoScored']);
		metrics2022.speakerMakes = stringToArray('teleopMake', metrics).map((s) => pointOfString(s));
		metrics2022.speakerMisses = stringToArray('teleopMiss', metrics).map((s) => pointOfString(s));
		metrics2022.defense = metrics['defense'] as Defense;
		metrics2022.notes = stringToArray('note', metrics);
		metrics2022.scouterName = metrics['scouterName'];

		return metrics2022;
	}

	flatten(): Metrics {
		return {
			startingPoint: this.startingPoint ? this.startingPoint.toString() : '',
			taxi: this.leave.toString(),
			autoCargoScored: this.autoCargoScored.toString(),
			...arrayToObject(
				'teleopMake',
				this.speakerMakes.map((point) => point.toString())
			),
			...arrayToObject(
				'teleopMiss',
				this.speakerMisses.map((point) => point.toString())
			),
			defense: this.defense,
			...arrayToObject('note', this.notes),
			scouterName: this.scouterName
		};
	}
}

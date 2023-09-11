import { pointOfString, type Point } from '$lib/types/Point';
import { arrayToObject, stringToArray } from '$lib/util/array';
import type { Metrics } from '../Report';
import type { Defense } from './universal';

export type ClimbLevel = 'None' | 'Attempted' | 'Low' | 'Middle' | 'High' | 'Traversal';

export class Metrics2022 {
	startingPoint: Point | null = null;
	taxi: boolean = false;
	autoCargoScored: number = 0;
	teleopMakes: Array<Point> = [];
	teleopMisses: Array<Point> = [];
	teleopLowerCargoScored: number = 0;
	teleopUpperCargoScored: number = 0;
	climbLevel: ClimbLevel = 'None';
	defense: Defense = 'None';
	notes: Array<string> = [];
	scouterName: string = '';

	static fromMetrics(metrics: Metrics): Metrics2022 {
		const metrics2022 = new Metrics2022();

		metrics2022.startingPoint = pointOfString(metrics['startingPoint']);
		metrics2022.taxi = metrics['taxi'] == 'true';
		metrics2022.autoCargoScored = Number(metrics['autoCargoScored']);
		metrics2022.teleopMakes = stringToArray('teleopMake', metrics).map((s) => pointOfString(s));
		metrics2022.teleopMisses = stringToArray('teleopMiss', metrics).map((s) => pointOfString(s));
		metrics2022.teleopLowerCargoScored = Number(metrics['teleopLowerCargoScored']);
		metrics2022.teleopUpperCargoScored = Number(metrics['teleopUpperCargoScored']);
		metrics2022.climbLevel = metrics['climbLevel'] as ClimbLevel;
		metrics2022.defense = metrics['defense'] as Defense;
		metrics2022.notes = stringToArray('note', metrics);
		metrics2022.scouterName = metrics['scouterName'];

		return metrics2022;
	}

	flatten(): Metrics {
		return {
			startingPoint: this.startingPoint ? this.startingPoint.toString() : '',
			taxi: this.taxi.toString(),
			autoCargoScored: this.autoCargoScored.toString(),
			...arrayToObject(
				'teleopMake',
				this.teleopMakes.map((point) => point.toString())
			),
			...arrayToObject(
				'teleopMiss',
				this.teleopMisses.map((point) => point.toString())
			),
			teleopLowerCargoScored: this.teleopLowerCargoScored.toString(),
			teleopUpperCargoScored: this.teleopUpperCargoScored.toString(),
			climbLevel: this.climbLevel,
			defense: this.defense,
			...arrayToObject('note', this.notes),
			scouterName: this.scouterName
		};
	}
}

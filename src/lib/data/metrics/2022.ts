import type { Point } from '$lib/types/Point';
import { arrayToObject } from '$lib/util/array';
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
		// TODO
		return new Metrics2022();
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

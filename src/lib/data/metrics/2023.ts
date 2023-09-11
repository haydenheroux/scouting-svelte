import { pointOfString, type Point } from '$lib/types/Point';
import { arrayToObject, stringToArray } from '$lib/util/array';
import type { Metrics } from '../Report';
import type { Defense } from './universal';

export type GamePiece = 'Cube' | 'Cone';

export type Grid = Array<Array<boolean>>;

export function emptyGrid() {
	let grid = new Array(3);

	for (let i = 0; i < 3; i++) {
		grid[i] = new Array(9);

		for (let j = 0; j < 9; j++) {
			grid[i][j] = false;
		}
	}

	return grid;
}

export function gridToObject(key: string, grid: Grid): Record<string, string> {
	let object: Record<string, string> = {};

	let count = 0;

	const topRow = grid[0];

	for (const [index, isFilled] of topRow.entries()) {
		if (isFilled) {
			const newKey = `${key}${count}`;
			object[newKey] = `top${index}`;
			count++;
		}
	}

	const middleRow = grid[1];

	for (const [index, isFilled] of middleRow.entries()) {
		if (isFilled) {
			const newKey = `${key}${count}`;
			object[newKey] = `middle${index}`;
			count++;
		}
	}

	const bottomRow = grid[2];

	for (const [index, isFilled] of bottomRow.entries()) {
		if (isFilled) {
			const newKey = `${key}${count}`;
			object[newKey] = `bottom${index}`;
			count++;
		}
	}

	return object;
}

export function gridFromString(s: string): Grid {
	let grid = new Array(3);

	for (let i = 0; i < 3; i++) {
		grid[i] = new Array(9);
	}

	return grid;
}

export type ChargeStation = 'None' | 'Attempted' | 'Docked' | 'Engaged';

export type Substation = 'Single Substation' | 'Double Substation';

export class Metrics2023 {
	startingPoint: Point | null = null;
	preload: GamePiece = 'Cube';
	mobility: boolean = false;
	autoScores: Grid = emptyGrid();
	autoChargeStation: ChargeStation = 'None';
	substationPreference: Substation = 'Double Substation';
	teleopScores: Grid = emptyGrid();
	endgameChargeStation: ChargeStation = 'None';
	defense: Defense = 'None';
	notes: Array<string> = [];
	scouterName: string = '';

	static fromMetrics(metrics: Metrics): Metrics2023 {
		const metrics2023 = new Metrics2023();

		metrics2023.startingPoint = pointOfString(metrics['startingPoint']);
		metrics2023.preload = metrics['preload'] as GamePiece;
		metrics2023.mobility = metrics['mobility'] == 'true';
		metrics2023.autoScores = emptyGrid();
		metrics2023.autoChargeStation = metrics['autoChargeStation'] as ChargeStation;
		metrics2023.substationPreference = metrics['substationPreference'] as Substation;
		metrics2023.teleopScores = emptyGrid();
		metrics2023.endgameChargeStation = metrics['endgameChargeStation'] as ChargeStation;
		metrics2023.defense = metrics['defense'] as Defense;
		metrics2023.notes = stringToArray('note', metrics);
		metrics2023.scouterName = metrics['scouterName'];

		return metrics2023;
	}

	flatten(): Metrics {
		return {
			startingPoint: this.startingPoint ? this.startingPoint.toString() : '',
			preload: this.preload,
			mobility: this.mobility.toString(),
			...gridToObject('autoScore', this.autoScores),
			autoChargeStation: this.autoChargeStation,
			substationPreference: this.substationPreference,
			...gridToObject('teleopScore', this.teleopScores),
			endgameChargeStation: this.endgameChargeStation,
			defense: this.defense,
			...arrayToObject('note', this.notes),
			scouterName: this.scouterName
		};
	}
}

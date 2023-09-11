export type GamePiece = 'Cube' | 'Cone';

export type Grid = Array<Array<boolean>>;

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

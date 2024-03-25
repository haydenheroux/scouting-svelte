export interface Dimensions {
	width: number;
	height: number;
}

const SEPARATOR = ",";

export function createPoint(x: number, y: number): Point {
	return {
		x,
		y
	};
}

export function createPointFromMouseEvent(mouseEvent: MouseEvent): Point {
	return createPoint(mouseEvent.offsetX, mouseEvent.offsetY);
}

export function normalizePoint(point: Point, dimensions: Dimensions): NormalizedPoint {
	const u = point.x / dimensions.width;
	const v = point.y / dimensions.height;

	return {
		u,
		v
	};
}

export function scalePoint(point: NormalizedPoint, dimensions: Dimensions): Point {
	const x = point.u * dimensions.width;
	const y = point.v * dimensions.height;

	return createPoint(x, y);
}

export interface Point {
	x: number;
	y: number;
}

export interface NormalizedPoint {
	u: number;
	v: number;
}

export function createNormalizedPoint(u: number, v: number): NormalizedPoint {
	return {
		u,
		v
	};
}

export function createNormalizedPointFromString(s: string): NormalizedPoint {
	const parts = s.split(SEPARATOR);

	const u = Number(parts[0]);
	const v = Number(parts[1]);

	return createNormalizedPoint(u, v);
}

export function flipPoint(point: NormalizedPoint): NormalizedPoint {
	return createNormalizedPoint(1 - point.u, 1 - point.v);
}

export function stringifyPoint(point: NormalizedPoint): string {
	return `${point.u.toFixed(4)}${SEPARATOR}${point.v.toFixed(2)}`;
}

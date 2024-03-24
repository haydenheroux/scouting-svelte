interface Dimensions {
	width: number;
	height: number;
}

export function dimensionsOfCanvas(canvas: HTMLCanvasElement): Dimensions {
	return {
		width: canvas.width,
		height: canvas.height
	};
}

const SEPARATOR = ",";

export class Point {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	static fromMouseEvent(e: MouseEvent): Point {
		return new Point(e.offsetX, e.offsetY);
	}

	static fromString(s: string): Point {
		const parts = s.split(SEPARATOR);

		const x = Number(parts[0]);
		const y = Number(parts[1]);

		return new Point(x, y);
	}

	normalizeTo(bounds: Dimensions): NormalizedPoint {
		const nx = this.x / bounds.width;
		const ny = this.y / bounds.height;

		return new NormalizedPoint(nx, ny);
	}
}

export class NormalizedPoint {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	static fromString(s: string): NormalizedPoint {
		if (!s) return new NormalizedPoint(0, 0);

		const parts = s.split(SEPARATOR);

		const x = Number(parts[0]);
		const y = Number(parts[1]);

		return new NormalizedPoint(x, y);
	}

	scaleBy(dimensions: Dimensions): Point {
		const sx = this.x * dimensions.width;
		const sy = this.y * dimensions.height;

		return new Point(sx, sy);
	}
}

export function flipPoint(point: NormalizedPoint): NormalizedPoint {
	return new NormalizedPoint(1 - point.x, 1 - point.y);
}

export function stringifyPoint(point: NormalizedPoint): string {
	return `${point.x.toFixed(4)}${SEPARATOR}${point.y.toFixed(2)}`;
}

export class TaggedPoint {
	readonly tag: string;
	readonly point: NormalizedPoint;

	constructor(tag: string, point: NormalizedPoint) {
		this.tag = tag;
		this.point = point;
	}
}

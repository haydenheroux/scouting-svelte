interface Dimensions {
	width: number;
	height: number;
}

export function dimensionsOfCanvas(canvas: HTMLCanvasElement) {
	return {
		width: canvas.width,
		height: canvas.height
	};
}

const separator = ',';

export class Point {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	inverse(): Point {
		return new Point(-this.x, -this.y);
	}

	offset(offset: Point): Point {
		const offsetX = this.x - offset.x;
		const offsetY = this.y - offset.y;

		return new Point(offsetX, offsetY);
	}

	scale(dimensions: Dimensions): Point {
		const scaledX = this.x * dimensions.width;
		const scaledY = this.y * dimensions.height;

		return new Point(scaledX, scaledY);
	}

	normalize(dimensions: Dimensions): Point {
		const normalizedX = this.x / dimensions.width;
		const normalizedY = this.y / dimensions.height;

		return new Point(normalizedX, normalizedY);
	}

	toString() {
		return `${this.x.toFixed(4)}${separator}${this.y.toFixed(4)}`;
	}
}

export function pointOfMouseEvent(mouseEvent: MouseEvent): Point {
	return new Point(mouseEvent.offsetX, mouseEvent.offsetY);
}

export function pointOfString(s: string): Point {
	let parts = s.split(separator);

	let x = Number(parts[0]);
	let y = Number(parts[1]);

	return new Point(x, y);
}

export function pointsToString(points: Array<Point>): string {
	return points.map((x) => x.toString()).join(':');
}

import { renderDimensionsOfCanvas, type NormalizedPoint, flipPoint } from "./point";

export enum DrawStyle {
	DOT,
	RING,
	CROSS,
	TRIANGLE
}

export function clearCanvas(canvas: HTMLCanvasElement) {
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawImage(
	image: HTMLImageElement | null,
	canvas: HTMLCanvasElement,
	flipped: boolean
) {
	if (!canvas) return;
	if (!image) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.resetTransform();

	if (flipped) {
		ctx.scale(-1, -1);
		ctx.drawImage(image, -canvas.width, -canvas.height, canvas.width, canvas.height);
	} else {
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	}
}

export function drawPoint(
	normalizedPoint: NormalizedPoint,
	canvas: HTMLCanvasElement,
	flipped: boolean
) {
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.resetTransform();

	ctx.fillStyle = "#fafafa";

	const radius = 20;

	ctx.beginPath();

	if (flipped) {
		const flippedPoint = flipPoint(normalizedPoint).scaleBy(renderDimensionsOfCanvas(canvas));

		ctx.scale(-1, -1);
		ctx.arc(-flippedPoint.x, -flippedPoint.y, radius, 0, 2 * Math.PI);
	} else {
		const point = normalizedPoint.scaleBy(renderDimensionsOfCanvas(canvas));

		ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
	}

	ctx.fill();
}

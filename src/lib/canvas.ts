import { dimensionsOfCanvas, type NormalizedPoint } from "./point";

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

export function drawImage(image: HTMLImageElement | null, canvas: HTMLCanvasElement) {
	if (!canvas) return;
	if (!image) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

export function drawPoint(
	normalizedPoint: NormalizedPoint,
	drawStyle: DrawStyle,
	canvas: HTMLCanvasElement
) {
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	const color = "#fafafa";

	const size = 12;
	// Since round objects appear larger, slightly downsize them
	const radius = size * 0.75;

	const point = normalizedPoint.scaleBy(dimensionsOfCanvas(canvas));

	switch (drawStyle) {
		case DrawStyle.DOT:
			ctx.fillStyle = color;

			ctx.beginPath();
			ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
			ctx.fill();
			break;
		case DrawStyle.RING:
			ctx.strokeStyle = color;
			ctx.lineWidth = 4;

			ctx.beginPath();
			ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
			ctx.stroke();
			break;
		case DrawStyle.CROSS: {
			ctx.strokeStyle = color;
			ctx.lineWidth = 4;

			const d = 0.5 * size * Math.sqrt(2);

			ctx.beginPath();

			ctx.moveTo(point.x - d, point.y - d);
			ctx.lineTo(point.x + d, point.y + d);

			ctx.moveTo(point.x + d, point.y - d);
			ctx.lineTo(point.x - d, point.y + d);
			ctx.stroke();
			break;
		}
		case DrawStyle.TRIANGLE: {
			ctx.fillStyle = color;

			const dx = 0.5 * Math.sqrt(3) * size;
			const dy = 0.5 * size;

			ctx.beginPath();
			ctx.moveTo(point.x, point.y - 2 * dy);
			ctx.lineTo(point.x - dx, point.y + dy);
			ctx.lineTo(point.x + dx, point.y + dy);
			ctx.fill();
			break;
		}
		default:
			break;
	}
}

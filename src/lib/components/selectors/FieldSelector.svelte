<script lang="ts">
	import { Point, dimensionsOfCanvas, flipPoint, NormalizedPoint } from "$lib/point";
	import { clearCanvas, drawImage, drawPoint } from "$lib/canvas";
	import { onMount } from "svelte";

	export let field: string;

	let flipped = false;

	export let point: NormalizedPoint | null;

	$: {
		point, draw();
	}

	let image: HTMLImageElement | null = null;

	onMount(() => {
		image = new Image();
		image.src = field;
		image.onload = () => {
			if (!image) return;

			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetWidth * (image.height / image.width);
			draw();
		};
	});

	let canvas: HTMLCanvasElement;

	function updatePoint(p: Point) {
		const normalizedPoint = p.normalizeTo(dimensionsOfCanvas(canvas));

		point = normalizedPoint;

		draw();
	}

	function handleMouse(e: MouseEvent) {
		updatePoint(Point.fromMouseEvent(e));
	}

	function handleTouch(event: TouchEvent) {
		const left = canvas.offsetLeft;
		const top = canvas.offsetTop;

		const x = event.touches[0].clientX - left;
		const y = event.touches[0].clientY - top;

		const point = new Point(x, y);

		updatePoint(point);
	}

	function draw() {
		clearCanvas(canvas);
		drawImage(image, canvas, flipped);
		if (point) {
			drawPoint(point, canvas, flipped);
		}
	}

	function flip() {
		if (point) {
			point = flipPoint(point);
		}

		flipped = !flipped;
		draw();
	}
</script>

<canvas
	on:click={handleMouse}
	on:touchstart={handleTouch}
	on:touchmove={handleTouch}
	bind:this={canvas}
/>
<button class="primary" on:click={() => (point = null)}>Clear</button>
<button class="primary" on:click={flip}>Flip</button>

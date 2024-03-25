<script lang="ts">
	import { Point, clientDimensionsOfCanvas, flipPoint, NormalizedPoint } from "$lib/point";
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

			canvas.width = image.width;
			canvas.height = image.height;
			draw();
		};
	});

	let canvas: HTMLCanvasElement;

	function updatePoint(p: Point) {
		let normalizedPoint = p.normalizeTo(clientDimensionsOfCanvas(canvas));

		if (flipped) {
			normalizedPoint = flipPoint(normalizedPoint);
		}

		point = normalizedPoint;

		draw();
	}

	function handleMouse(e: MouseEvent) {
		const point = Point.fromMouseEvent(e);

		updatePoint(point);
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

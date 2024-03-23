<script lang="ts">
	import { Point, dimensionsOfCanvas, flipPoint, NormalizedPoint } from "$lib/point";
	import { DrawStyle, clearCanvas, drawImage, drawPoint } from "$lib/canvas";
	import { onMount } from "svelte";

	export let field: string;

	export let single = false;

	let flipped = false;

	export let tags: Record<string, DrawStyle>;

	let multipleTags = true;

	let selectedTag: string;

	export let points: Array<NormalizedPoint> = [];

	// Redraws points whenever they are changed, including undoing.
	$: {
		points && draw();
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

		if (Object.keys(tags).length == 1) {
			selectedTag = Object.keys(tags)[0];
			multipleTags = false;
		}
	});

	let canvas: HTMLCanvasElement;

	function push(p: Point) {
		const norm = p.normalizeTo(dimensionsOfCanvas(canvas));

		if (single) points = [norm];
		else points = [...points, norm];

		draw();
	}

	function handleMouse(e: MouseEvent) {
		push(Point.fromMouseEvent(e));
	}

	function handleTouch(event: TouchEvent) {
		const left = canvas.offsetLeft;
		const top = canvas.offsetTop;

		const x = event.touches[0].clientX - left;
		const y = event.touches[0].clientY - top;

		const point = new Point(x, y);

		push(point);
	}

	function draw() {
		clearCanvas(canvas);
		drawImage(image, canvas, flipped);

		points.forEach((p) => drawPoint(p, canvas, flipped));
	}

	function flip() {
		points = points.map(flipPoint);

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
<button class="primary" on:click={flip}>Flip</button>
<button class="primary" on:click={() => (points = points.slice(0, points.length - 1))}>Undo</button>

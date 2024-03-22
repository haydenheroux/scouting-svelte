<script lang="ts">
	import { Point, dimensionsOfCanvas, TaggedPoint } from "$lib/point";
	import { DrawStyle, clearCanvas, drawImage, drawPoint } from "$lib/canvas";
	import { onMount } from "svelte";
	import OptionSelector from "./OptionSelector.svelte";

	export let field: string;

	export let single = false;

	export let tags: Record<string, DrawStyle>;

	let multipleTags = true;

	let selectedTag: string;

	export let points: Array<TaggedPoint> = [];

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

		const tagged = new TaggedPoint(selectedTag, norm);

		if (single) points = [tagged];
		else points = [...points, tagged];

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
		drawImage(image, canvas);

		points.forEach((taggedPoint) => drawPoint(taggedPoint.point, tags[taggedPoint.tag], canvas));
	}
</script>

{#if multipleTags}
	<OptionSelector options={Object.keys(tags)} bind:selected={selectedTag} />
{/if}
<canvas
	on:click={handleMouse}
	on:touchstart={handleTouch}
	on:touchmove={handleTouch}
	bind:this={canvas}
/>
<button class="primary" on:click={() => (points = points.slice(0, points.length - 1))}>Undo</button>

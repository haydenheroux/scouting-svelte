<script lang="ts">
	import { Point, dimensionsOfCanvas, TaggedPoint } from '$lib/point';
	import { DrawStyle } from '$lib/canvas';
	import { onMount } from 'svelte';
	import OptionSelector from './OptionSelector.svelte';

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

	let img: HTMLImageElement | null = null;

	onMount(() => {
		img = new Image();
		img.src = field;
		img.onload = () => {
			if (!img) return;

			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetWidth * (img.height / img.width);
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
		if (!canvas) return;
		if (!img) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		for (let p of points) {
			drawPoint(p, ctx);
		}
	}

	function drawPoint(taggedPoint: TaggedPoint, ctx: CanvasRenderingContext2D) {
		const color = '#fafafa';
		const radius = 12;

		const np = taggedPoint.point;
		const point = np.scaleBy(dimensionsOfCanvas(canvas));

		let drawStyle = tags[taggedPoint.tag];

		switch (drawStyle) {
			case DrawStyle.DOT:
				ctx.fillStyle = color;

				ctx.beginPath();
				ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
				ctx.fill();
				break;
			case DrawStyle.CROSS:
				ctx.strokeStyle = color;
				ctx.lineWidth = 4;

				const d = 0.5 * radius * Math.sqrt(2);

				ctx.beginPath();

				ctx.moveTo(point.x - d, point.y - d);
				ctx.lineTo(point.x + d, point.y + d);

				ctx.moveTo(point.x + d, point.y - d);
				ctx.lineTo(point.x - d, point.y + d);
				ctx.stroke();
				break;
			case DrawStyle.TRIANGLE:
				ctx.fillStyle = color;

				const dx = 0.5 * Math.sqrt(3) * radius;
				const dy = 0.5 * radius;

				ctx.beginPath();
				ctx.moveTo(point.x, point.y - 2 * dy);
				ctx.lineTo(point.x - dx, point.y + dy);
				ctx.lineTo(point.x + dx, point.y + dy);
				ctx.fill();
			default:
				break;
		}
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

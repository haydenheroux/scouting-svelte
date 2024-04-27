<script lang="ts">
	import { clearCanvas, clientDimensionsOfCanvas, drawImage, drawPoint } from "$lib/canvas"
	import {
		createPoint,
		createPointFromMouseEvent,
		normalizePoint,
		type NormalizedPoint,
		type Point,
		flipPoint
	} from "$lib/point"
	import { onMount } from "svelte"

	export let field: string

	export let readonly: boolean = false

	let image: HTMLImageElement | null = null

	let canvas: HTMLCanvasElement

	let flipped = false

	onMount(() => {
		image = new Image()
		image.src = field
		image.onload = () => {
			if (!image) return

			canvas.width = image.width
			canvas.height = image.height
			draw()
		}
	})

	export let point: NormalizedPoint | null

	$: {
		point, draw()
	}

	$: {
		flipped, draw()
	}

	function draw() {
		clearCanvas(canvas)
		drawImage(image, canvas, flipped)
		if (point) {
			drawPoint(point, canvas, flipped)
		}
	}

	function updatePoint(newPoint: Point | null) {
		if (readonly) {
			return
		}

		if (newPoint === null) {
			point = null
			return
		}

		const dimensions = clientDimensionsOfCanvas(canvas)

		const normalizedPoint = normalizePoint(newPoint, dimensions)

		if (flipped) {
			const flippedPoint = flipPoint(normalizedPoint)

			point = flippedPoint
		} else {
			point = normalizedPoint
		}
	}

	function handleMouseEvent(mouseEvent: MouseEvent) {
		updatePoint(createPointFromMouseEvent(mouseEvent))
	}

	function handleTouchEvent(touchEvent: TouchEvent) {
		const left = canvas.offsetLeft
		const top = canvas.offsetTop

		const x = touchEvent.touches[0].clientX - left
		const y = touchEvent.touches[0].clientY - top

		updatePoint(createPoint(x, y))
	}
</script>

<canvas on:click={handleMouseEvent} on:touchstart|passive={handleTouchEvent} bind:this={canvas} />
{#if !readonly}
	<button class="primary" on:click={() => updatePoint(null)}>Clear</button>
{/if}
<button class="primary" on:click={() => (flipped = !flipped)}>Flip</button>

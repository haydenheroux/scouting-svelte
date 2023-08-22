<script lang="ts">
	import { normalize, scale, type Point } from '$lib/interfaces/Point';
    import { onMount } from 'svelte';
	import Metric from './Metric.svelte';

    export let name: string;
    export let help: string;

    export let field: string;

    export let points: Array<Point> = [];
    export let single = false;

    type DrawStyle = 'dot' | 'cross' | 'triangle';

    export let drawStyle: DrawStyle = 'dot';

    let img: HTMLImageElement | null = null;

    onMount(() => {
        img = new Image();
        img.src = field;
        img.onload = () => {
            if (!img) return;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetWidth * (img.height / img.width); 
            draw();
        }
    });

    let canvas: HTMLCanvasElement;

    $: points && draw()

    function addPoint(point: Point) {
        const norm = normalize(point, canvas.width, canvas.height);

        if (single) points = [ norm ]
        else points = [...points, norm ]
    }

    function handleMouse(event: MouseEvent) {
        const point = { x: event.offsetX, y: event.offsetY };

        addPoint(point);
    }

    function handleTouch(event: TouchEvent) {
        const left = canvas.offsetLeft;
        const top = canvas.offsetTop;

        const point = { x: event.touches[0].clientX - left, y: event.touches[0].clientY - top };

        addPoint(point);
    }

    function draw() {
        if (!canvas) return;
        if (!img) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        for (let norm of points) {

            const point = scale(norm, canvas.width, canvas.height);

            const color = "#fafafa";
            const radius = 12;
            switch (drawStyle) {
                case 'dot':
                    ctx.fillStyle = color;

                    ctx.beginPath();
                    ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
                    ctx.fill();
                    break;
                case 'cross':
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
                case 'triangle':
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
    }
</script>

<Metric {name} {help}>
    <canvas on:click={handleMouse} on:touchstart={handleTouch} on:touchmove={handleTouch} bind:this={canvas}></canvas>
    <button class="primary" on:click={(e) => points = points.slice(0, points.length - 1)}>Undo</button>
</Metric>
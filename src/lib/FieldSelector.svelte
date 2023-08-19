<script lang="ts">
    export let title: string;

    export let field;

    interface Point {
        readonly x: number;
        readonly y: number;
    }

    export let points: Array<Point> = [];
    export let single = false;

    const img = new Image();
    img.src = field;
    img.onload = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetWidth * (img.height / img.width); 
        draw();
    }

    let canvas: HTMLCanvasElement;

    $: points && draw()

    function handleMouse(event: MouseEvent) {
        if (single) points = [];
        const point = { x: event.offsetX, y: event.offsetY };

        points = [...points, point]
    }

    function handleTouch(event: TouchEvent) {
        const left = canvas.offsetLeft;
        const top = canvas.offsetTop;

        if (single) points = [];
        const point = { x: event.touches[0].clientX - left, y: event.touches[0].clientY - top };

        points = [...points, point]
    }

    function draw() {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        for (let point of points) {
            ctx.fillStyle = "#ddd";
            ctx.beginPath();
            ctx.arc(point.x, point.y, 8, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }

    function normalize(p: Point): Point {
        const x = p.x / canvas.width;
        const y = p.y / canvas.height;
        return { x, y }
    }
</script>

<section>
    <h2>{title}</h2>
    <canvas on:click={handleMouse} on:touchstart={handleTouch} on:touchmove={handleTouch} bind:this={canvas}></canvas>
    <button on:click={(e) => points = points.slice(0, points.length - 1)}>Undo</button>
</section>
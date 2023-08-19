<script lang="ts">
    export let title: string;
    export let field;

    const img = new Image();
    img.src = field;
    img.onload = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetWidth * (img.height / img.width); 
        draw();
    }

    let canvas: HTMLCanvasElement;

    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let point: Point | null = null;

    $: point && draw()

    function handleMouse(event: MouseEvent) {
        point = { x: event.offsetX, y: event.offsetY }
    }

    function handleTouch(event: TouchEvent) {
        const left = canvas.offsetLeft;
        const top = canvas.offsetTop;
        point = { x: event.touches[0].clientX - left, y: event.touches[0].clientY - top }
    }

    function draw() {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (point != null) {
            ctx.fillStyle = "#ddd";
            ctx.beginPath();
            ctx.arc(point.x, point.y, 8, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }

    function normalize(p: Point): Point {
        if (point == null) return { x: 0, y: 0 };
        const x = point.x / canvas.width;
        const y = point.y / canvas.height;
        return { x, y }
    }
</script>

<section>
    <h2>{title}</h2>
    <canvas on:click={handleMouse} on:touchstart={handleTouch} on:touchmove={handleTouch} bind:this={canvas}></canvas>
</section>
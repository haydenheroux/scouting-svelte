<script lang="ts">
    export let title: string;

    export let grid = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
    ];

    function toggle(y: number, x: number) {
        grid[y][x] = !grid[y][x];
    }
</script>

<section>
    <h2>{title}</h2>
    <div class="grid">
        <div class="cone" class:active={grid[0][0]} on:click={(e) => toggle(0, 0)}></div>
        <div class="cube" class:active={grid[0][1]} on:click={(e) => toggle(0, 1)}></div>
        <div class="cone" class:active={grid[0][2]} on:click={(e) => toggle(0, 2)}></div>
        <div class="cone" class:active={grid[0][3]} on:click={(e) => toggle(0, 3)}></div>
        <div class="cube" class:active={grid[0][4]} on:click={(e) => toggle(0, 4)}></div>
        <div class="cone" class:active={grid[0][5]} on:click={(e) => toggle(0, 5)}></div>
        <div class="cone" class:active={grid[0][6]} on:click={(e) => toggle(0, 6)}></div>
        <div class="cube" class:active={grid[0][7]} on:click={(e) => toggle(0, 7)}></div>
        <div class="cone" class:active={grid[0][8]} on:click={(e) => toggle(0, 8)}></div>
        <div class="cone" class:active={grid[1][0]} on:click={(e) => toggle(1, 0)}></div>
        <div class="cube" class:active={grid[1][1]} on:click={(e) => toggle(1, 1)}></div>
        <div class="cone" class:active={grid[1][2]} on:click={(e) => toggle(1, 2)}></div>
        <div class="cone" class:active={grid[1][3]} on:click={(e) => toggle(1, 3)}></div>
        <div class="cube" class:active={grid[1][4]} on:click={(e) => toggle(1, 4)}></div>
        <div class="cone" class:active={grid[1][5]} on:click={(e) => toggle(1, 5)}></div>
        <div class="cone" class:active={grid[1][6]} on:click={(e) => toggle(1, 6)}></div>
        <div class="cube" class:active={grid[1][7]} on:click={(e) => toggle(1, 7)}></div>
        <div class="cone" class:active={grid[1][8]} on:click={(e) => toggle(1, 8)}></div>
        <div class="floor" class:active={grid[2][0]} on:click={(e) => toggle(2, 0)}></div>
        <div class="floor" class:active={grid[2][1]} on:click={(e) => toggle(2, 1)}></div>
        <div class="floor" class:active={grid[2][2]} on:click={(e) => toggle(2, 2)}></div>
        <div class="floor" class:active={grid[2][3]} on:click={(e) => toggle(2, 3)}></div>
        <div class="floor" class:active={grid[2][4]} on:click={(e) => toggle(2, 4)}></div>
        <div class="floor" class:active={grid[2][5]} on:click={(e) => toggle(2, 5)}></div>
        <div class="floor" class:active={grid[2][6]} on:click={(e) => toggle(2, 6)}></div>
        <div class="floor" class:active={grid[2][7]} on:click={(e) => toggle(2, 7)}></div>
        <div class="floor" class:active={grid[2][8]} on:click={(e) => toggle(2, 8)}></div>
    </div>
</section>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0.875rem;
}

.grid div {
    border: 1px solid var(--clr-neutral-700);

    aspect-ratio: 1;
}

.grid div.cube {
    border-radius: var(--radius-element);
}

.grid div.cube.active {
    background-color: #AB17B5;

    border: 1px solid #AB17B5;
}

.grid div.cone {
    border-radius: 50%;
}

.grid div.cone.active {
    background-color: #EFDF0D;

    border: 1px solid #EFDF0D;
}

.grid div.floor {
    border-radius: var(--radius-element);
}

.grid div.floor.active {
    background-color:var(--clr-neutral-100);
}
</style>
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
        <button class="cone" class:active={grid[0][0]} on:click={(e) => toggle(0, 0)} />
        <button class="cube" class:active={grid[0][1]} on:click={(e) => toggle(0, 1)} />
        <button class="cone" class:active={grid[0][2]} on:click={(e) => toggle(0, 2)} />
        <button class="cone" class:active={grid[0][3]} on:click={(e) => toggle(0, 3)} />
        <button class="cube" class:active={grid[0][4]} on:click={(e) => toggle(0, 4)} />
        <button class="cone" class:active={grid[0][5]} on:click={(e) => toggle(0, 5)} />
        <button class="cone" class:active={grid[0][6]} on:click={(e) => toggle(0, 6)} />
        <button class="cube" class:active={grid[0][7]} on:click={(e) => toggle(0, 7)} />
        <button class="cone" class:active={grid[0][8]} on:click={(e) => toggle(0, 8)} />
        <button class="cone" class:active={grid[1][0]} on:click={(e) => toggle(1, 0)} />
        <button class="cube" class:active={grid[1][1]} on:click={(e) => toggle(1, 1)} />
        <button class="cone" class:active={grid[1][2]} on:click={(e) => toggle(1, 2)} />
        <button class="cone" class:active={grid[1][3]} on:click={(e) => toggle(1, 3)} />
        <button class="cube" class:active={grid[1][4]} on:click={(e) => toggle(1, 4)} />
        <button class="cone" class:active={grid[1][5]} on:click={(e) => toggle(1, 5)} />
        <button class="cone" class:active={grid[1][6]} on:click={(e) => toggle(1, 6)} />
        <button class="cube" class:active={grid[1][7]} on:click={(e) => toggle(1, 7)} />
        <button class="cone" class:active={grid[1][8]} on:click={(e) => toggle(1, 8)} />
        <button class="floor" class:active={grid[2][0]} on:click={(e) => toggle(2, 0)} />
        <button class="floor" class:active={grid[2][1]} on:click={(e) => toggle(2, 1)} />
        <button class="floor" class:active={grid[2][2]} on:click={(e) => toggle(2, 2)} />
        <button class="floor" class:active={grid[2][3]} on:click={(e) => toggle(2, 3)} />
        <button class="floor" class:active={grid[2][4]} on:click={(e) => toggle(2, 4)} />
        <button class="floor" class:active={grid[2][5]} on:click={(e) => toggle(2, 5)} />
        <button class="floor" class:active={grid[2][6]} on:click={(e) => toggle(2, 6)} />
        <button class="floor" class:active={grid[2][7]} on:click={(e) => toggle(2, 7)} />
        <button class="floor" class:active={grid[2][8]} on:click={(e) => toggle(2, 8)} />
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

.grid > * {
    background-color: var(--clr-neutral-900);

    border: 1px solid var(--clr-neutral-700);

    aspect-ratio: 1;
}

.grid .cube {
    border-radius: var(--radius-element);
}

.grid .cube.active {
    background-color: #AB17B5;

    border: 1px solid #AB17B5;
}

.grid .cone {
    border-radius: 50%;
}

.grid .cone.active {
    background-color: #EFDF0D;

    border: 1px solid #EFDF0D;
}

.grid .floor {
    border-radius: var(--radius-element);
}

.grid .floor.active {
    background-color:var(--clr-neutral-100);
}
</style>
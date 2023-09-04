<script lang="ts">
	import MultipleOptionSelector from "$lib/components/selectors/OptionSelector.svelte";
	import type { GamePiece } from "$lib/data/metrics/2023";

    export let name: string;
    export let help: string;

    export let selected: GamePiece;
</script>

<div class="cube_cone">
    <MultipleOptionSelector bind:selected {name} {help} options={["Cube", "Cone"]}/>
</div>

<style>
:global(.cube_cone button:nth-of-type(1).active) { /* cube */
    background-color: var(--clr-purple);
    color: var(--clr-background);

    border-color: var(--clr-purple);
}

:global(.cube_cone button:nth-of-type(2).active) { /* cone */
    background-color: var(--clr-yellow);
    color: var(--clr-background);

    border-color: var(--clr-yellow);
}
</style>
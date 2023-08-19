<script lang="ts">
	import MultipleOptionSelector from "$lib/MultipleOptionSelector.svelte";

    export let title: string;
    export let selected: string;
</script>

<div class="cube_cone">
    <MultipleOptionSelector bind:selected title={title} options={["Cube", "Cone"]}/>
</div>

<style>
:global(.cube_cone button:nth-of-type(1).active) { /* cube */
    background-color: var(--clr-purple);
}

:global(.cube_cone button:nth-of-type(2).active) { /* cone */
    background-color: var(--clr-yellow);
}
</style>
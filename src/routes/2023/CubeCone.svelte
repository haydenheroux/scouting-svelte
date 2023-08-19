<script lang="ts">
	import MultipleOptionSelector from "$lib/MultipleOptionSelector.svelte";

    export let title: string;
</script>

<div class="cube_cone">
    <MultipleOptionSelector title={title} options={["Cube", "Cone"]}/>
</div>

<style>
:global(.cube_cone button:nth-of-type(1).active) { /* cube */
    background-color: #AB17B5;
    color: var(--clr-neutral-800);
}

:global(.cube_cone button:nth-of-type(2).active) { /* cone */
    background-color: #EFDF0D;
    color: var(--clr-neutral-800);
}
</style>
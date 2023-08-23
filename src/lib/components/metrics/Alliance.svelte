<script lang="ts">
	import Section from "../Section.svelte";

    export let isRedAlliance = true;
</script>

<Section name="Select Alliance">
    <div class="split">
        <button on:click={(e) => isRedAlliance = true} class:red={isRedAlliance}>Red Alliance</button>
        <button on:click={(e) => isRedAlliance = false} class:blue={!isRedAlliance}>Blue Alliance</button>
    </div>
</Section>

<style>
.red {
    background-color: var(--clr-red);
    color: var(--clr-neutral-800);
}

.blue {
    background-color: var(--clr-blue);
    color: var(--clr-neutral-800);
}
</style>
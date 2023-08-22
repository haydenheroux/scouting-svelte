<script lang="ts">
	import Metric from "./Metric.svelte";

    export let isRedAlliance = true;
</script>

<Metric name="Select Alliance">
    <div class="split">
        <button on:click={(e) => isRedAlliance = true} class:red={isRedAlliance}>Red Alliance</button>
        <button on:click={(e) => isRedAlliance = false} class:blue={!isRedAlliance}>Blue Alliance</button>
    </div>
</Metric>

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
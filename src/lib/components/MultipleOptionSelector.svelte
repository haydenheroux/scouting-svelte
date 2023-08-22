<script lang="ts">
	import Metric from "./Metric.svelte";

    export let name: string;
    export let help: string;

    export let options: Array<string | number>;
    export let selected: string | number = "";
</script>

<Metric {name} {help}>
    <div class="split">
        {#each options as option}
            <button on:click={(e) => selected = (selected != option) ? option : ""} class:active={selected == option}>{option}</button>
        {/each}
    </div>
</Metric>
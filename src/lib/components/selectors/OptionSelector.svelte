<script lang="ts">
	import Section from "../Section.svelte";

    export let name: string;
    export let help: string;

    export let options: Array<string>;
    export let selected: string = "";
</script>

<Section {name} {help}>
    <div class="split">
        {#each options as option}
            <button on:click={() => selected = (selected != option) ? option : ""} class:active={selected == option}>{option}</button>
        {/each}
    </div>
</Section>
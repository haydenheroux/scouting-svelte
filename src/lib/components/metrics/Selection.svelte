<script lang="ts">
	import Section from "../Section.svelte";

    export let name: string;
    export let help: string;

    export let options: Array<string | number>;
    export let selected: string | number = "";
</script>

<Section {name} {help}>
    <div class="split">
        {#each options as option}
            <button on:click={(e) => selected = (selected != option) ? option : ""} class:active={selected == option}>{option}</button>
        {/each}
    </div>
</Section>
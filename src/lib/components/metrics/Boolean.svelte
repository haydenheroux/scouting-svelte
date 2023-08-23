<script lang="ts">
	import Section from '../Section.svelte';
    export let name: string;
    export let help: string;

    export let value: boolean | null = null;

    export let negative = "No";
    export let positive = "Yes";
</script>

    
<Section {name} {help}>
    <div class="split">
        <button on:click={(e) => value = false} class:active={value === false}>{negative}</button>
        <button on:click={(e) => value = true} class:active={value}>{positive}</button>
    </div>
</Section>
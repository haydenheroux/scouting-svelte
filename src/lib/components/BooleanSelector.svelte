<script lang="ts">
	import Metric from './Metric.svelte';
    export let name: string;
    export let help: string;

    export let value: boolean | null = null;

    export let negative = "No";
    export let positive = "Yes";
</script>

    
<Metric {name} {help}>
    <div class="split">
        <button on:click={(e) => value = false} class:active={value === false}>{negative}</button>
        <button on:click={(e) => value = true} class:active={value}>{positive}</button>
    </div>
</Metric>
<script lang="ts">
	import type { Metrics } from "$lib/metrics";

	export let metrics: Metrics[];

	export let selectedMetrics: Metrics | null = null;
</script>

<select bind:value={selectedMetrics}>
	{#each metrics as _metrics}
		<option value={_metrics}
			>{_metrics.match.type} {_metrics.match.match} - Team {_metrics.team}</option
		>
	{/each}
</select>

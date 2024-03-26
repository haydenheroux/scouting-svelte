<script lang="ts">
	import { stringifyMetricsIdentifier, type Metrics } from "$lib/metrics"

	export let metrics: Metrics[]

	export let selectedMetrics: Metrics | null = null
</script>

<select bind:value={selectedMetrics}>
	{#each metrics as _metrics}
		<option value={_metrics}>
			{stringifyMetricsIdentifier(_metrics)}
		</option>
	{/each}
</select>

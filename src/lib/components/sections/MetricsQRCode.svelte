<script lang="ts">
	import QRCodeDisplay from "./QRCodeDisplay.svelte"
	import Section from "$lib/components/Section.svelte";
	import { serializeMetrics, type Metrics, stringifyMetricsIdentifier } from "$lib/metrics"

	export let metrics: Metrics
</script>

<Section name={stringifyMetricsIdentifier(metrics)}>
	<QRCodeDisplay value={JSON.stringify(serializeMetrics(metrics))} />
</Section>

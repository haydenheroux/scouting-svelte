<script lang="ts">
	import QRCodeDisplay from './QRCodeDisplay.svelte';
	import { serializeMetrics, type Metrics } from "$lib/metrics";

    export let metrics: Metrics;
</script>

<QRCodeDisplay value={JSON.stringify(serializeMetrics(metrics))} />
<script lang="ts">
	import Submit from "$lib/components/sections/Submit.svelte";
	import QRCode from "$lib/components/sections/QRCodeDisplay.svelte";
	import { storeMetrics } from "$lib/stores";
	import MetricsSelector from "$lib/components/sections/MetricsSelector.svelte";
	import { serializeMetrics, type Metrics } from "$lib/metrics";

	let metrics: Metrics = {} as Metrics;

	let qrCodeData = "";

	function handleSubmit() {
		storeMetrics(metrics);

		qrCodeData = JSON.stringify(serializeMetrics(metrics));
	}
</script>

<MetricsSelector bind:metrics />

<Submit on:click={handleSubmit} />

{#if qrCodeData.length > 0}
	<section>
		<QRCode value={qrCodeData} />
	</section>
{/if}

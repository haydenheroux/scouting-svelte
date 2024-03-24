<script lang="ts">
	import MetricsQRCode from "$lib/components/sections/MetricsQRCode.svelte";
	import { storeMetrics } from "$lib/stores";
	import MetricsSelector from "$lib/components/sections/MetricsSelector.svelte";
	import Section from "$lib/components/Section.svelte";
	import type { Metrics } from "$lib/metrics";

	let metrics: Metrics = {} as Metrics;

	let showQRCode = false;

	function handleSubmit() {
		storeMetrics(metrics);

		showQRCode = true;
	}
</script>

<MetricsSelector bind:metrics />

<Section name="Submit">
	<button class="primary" on:click={handleSubmit}>Submit</button>
	{#if showQRCode}
		<MetricsQRCode bind:metrics />
	{/if}
</Section>

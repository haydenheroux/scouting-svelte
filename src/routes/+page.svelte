<script lang="ts">
	import { storeMetrics } from "$lib/stores";
	import MetricsSelector from "$lib/components/sections/MetricsSelector.svelte";
	import Section from "$lib/components/Section.svelte";
	import type { Metrics } from "$lib/metrics";
	import { Modal, Content, Trigger } from "sv-popup";
	import MetricsQrCode from "$lib/components/sections/MetricsQRCode.svelte";

	let metrics: Metrics = {} as Metrics;

	let showQRCode = false;

	function handleSubmit() {
		storeMetrics(metrics);

		showQRCode = true;
	}
</script>

<MetricsSelector bind:metrics />

<Section name="Submit">
	<Modal small button={false}>
		<Content>
			<MetricsQrCode {metrics} />
		</Content>
		<Trigger>
			<button class="primary" on:click={handleSubmit}>Submit</button>
		</Trigger>
	</Modal>
</Section>

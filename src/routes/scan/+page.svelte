<script lang="ts">
	import { browser } from '$app/environment';
	import { Html5Qrcode, type Html5QrcodeResult } from 'html5-qrcode';

	import Section from '$lib/components/Section.svelte';

	let scanner: Html5Qrcode | null = null;

	let scanned = false;

	let closed = true;

	function open() {
		if (!browser || scanner) return;

		scanner = new Html5Qrcode('scanner');

		const camera = { facingMode: 'environment' };
		const config = { fps: 30 };

		scanned = false;

		closed = false;

		scanner.start(
			camera,
			config,
			(text: string, result: Html5QrcodeResult) => {
				// Ignore scans if the scanner is not initialized
				if (!scanner) return;
				if (scanned) return;

				const decoded = JSON.parse(text);

				const serializedParticipantOrNull = decoded['participant'];
				const serializedMetricsOrNull = decoded['metrics'];

				if (serializedParticipantOrNull && serializedMetricsOrNull) {
					// TODO broken
					// serializeAndStore(serializedParticipantOrNull, serializedMetricsOrNull);
					scanned = true;
				}

				closed = true;

				scanner.clear();
			},
			(e) => {}
		);
	}
</script>

<Section name="Scan">
	<div id="scanner" style={closed ? 'display: none;' : ''} />
	<button class="active" on:click={open}>Open Scanner</button>
</Section>

<style>
	#scanner {
		width: 100%;

		display: flex;
		justify-content: center;
	}
</style>

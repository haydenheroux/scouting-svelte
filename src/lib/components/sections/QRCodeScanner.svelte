<script lang="ts">
	import { browser } from '$app/environment';
	import { Html5Qrcode, type Html5QrcodeResult } from 'html5-qrcode';
	import Section from '../Section.svelte';

	export let name: string;
	export let help = '';

	export let value: string = '';

	let scanner: Html5Qrcode | null = null;

	let closed = true;

	function open() {
		if (!browser || scanner) return;

		scanner = new Html5Qrcode('scanner');

		const camera = { facingMode: 'environment' };
		const config = { fps: 10 };

		closed = false;

		scanner.start(
			camera,
			config,
			(text: string, result: Html5QrcodeResult) => {
				// Ignore scans if the scanner is not initialized
				if (!scanner) return;

				value = text;

				closed = true;

				scanner.clear();
			},
			(e) => {}
		);
	}
</script>

<Section {name} {help}>
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

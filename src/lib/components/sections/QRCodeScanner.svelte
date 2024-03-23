<script lang="ts">
	import { browser } from "$app/environment";
	import { Html5Qrcode, type Html5QrcodeResult } from "html5-qrcode";
	import type { Html5QrcodeError } from "html5-qrcode/esm/core";

	export let onScan: (result: object) => void;

	let scanner: Html5Qrcode | null = null;

	let scanned = false;

	let closed = true;

	function open() {
		if (!browser || scanner) return;

		scanner = new Html5Qrcode("scanner");

		const camera = { facingMode: "environment" };
		const config = { fps: 30 };

		scanned = false;

		closed = false;

		scanner.start(
			camera,
			config,
			(text: string, _: Html5QrcodeResult) => {
				// Ignore scans if the scanner is not initialized
				if (!scanner) return;
				if (scanned) return;

				closed = true;

				// TODO Repeatedly fires
				onScan(JSON.parse(text));

				scanner.clear();

				scanner = null;
			},
			(message: string, _: Html5QrcodeError) => {
				console.error(`$QR scanner error ${message}`);
			}
		);
	}
</script>

<div id="scanner" style={closed ? "display: none;" : ""} />
<button class="active" on:click={open}>Open Scanner</button>

<style>
	#scanner {
		width: 100%;

		display: flex;
		justify-content: center;
	}
</style>

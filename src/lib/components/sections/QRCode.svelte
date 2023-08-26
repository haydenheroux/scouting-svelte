<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import { default as QrCode } from 'qrious';

	const QRcode = new QrCode();

	export let errorCorrection = "H";
	export let background = "#fff";
	export let color = "#000";
	export let value = "";

	export let showable = false;
	let showing = showable ? false : true;

	let dataURL = '';

	function generateQRCode() {
		if (!showing) console.log("Generated QR code while not showing.");

		QRcode.set({
			background,
			foreground: color,
			level: errorCorrection,
			size: 1024, // TODO
			value,
		});
		
		dataURL = QRcode.toDataURL();
	}

	function toggle() {
		showing = !showing;

		if (showing) generateQRCode();
	}

	$: {
		if (value && showing) generateQRCode();
	}

	onMount(() => {
		if (showing) generateQRCode();
	});
</script>

{#if showing}
	<img src={dataURL} alt={value}/>
{/if}
{#if showable}
	<button class="active" on:click={toggle}>{showing ? "Hide" : "Show"}</button>
{/if}
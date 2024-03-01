<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import { default as QrCode } from 'qrious';
	import FullscreenableImage from '../FullscreenableImage.svelte';

	const QRcode = new QrCode();

	export let errorCorrection = 'L';
	export let background = '#fff';
	export let color = '#000';
	export let value: string;

	let url: string;

	function generateQRCode(s: string) {
		const encoded = s; // TODO encode?

		QRcode.set({
			background,
			foreground: color,
			level: errorCorrection,
			size: 1024, // TODO
			padding: 128, // TODO
			value: encoded
		});

		url = QRcode.toDataURL();
	}

	$: {
		if (value) generateQRCode(value);
	}

	onMount(() => {
		generateQRCode(value);
	});
</script>

<FullscreenableImage src={url} alt={value} />

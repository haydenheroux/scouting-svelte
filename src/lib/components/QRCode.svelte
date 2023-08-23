<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import { default as QrCode } from 'qrious';
	import Metric from './Metric.svelte';

	const QRcode = new QrCode();

	export let errorCorrection = "L";
	export let background = "#fff";
	export let color = "#000";
	export let value = "";

	let image = '';

	function generateQrCode() {
		QRcode.set({
			background,
			foreground: color,
			level: errorCorrection,
			size: 2048, // TODO
			value,
		});
		
		image = QRcode.toDataURL();
	}

	$: {
		if (value) {
			generateQrCode();
		}
	}

	onMount(() => {
		generateQrCode();
	});

</script>

<img src={image} alt={value}/>
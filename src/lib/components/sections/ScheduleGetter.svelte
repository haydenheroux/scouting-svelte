<script lang="ts">
	import QRCodeScanner from '$lib/components/sections/QRCodeScanner.svelte';
	import { storedSchedules } from '$lib/stores';

    let value: string;

    $: value && storedSchedules.set(JSON.parse(value));
</script>

<QRCodeScanner name="Get Schedule" bind:value={value} />
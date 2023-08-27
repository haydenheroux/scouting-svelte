<script lang="ts">
	import QRCodeScanner from '$lib/components/sections/QRCodeScanner.svelte';
	import { schedule } from '$lib/stores';

    let value: string;

    $: value && schedule.set(JSON.parse(value));
</script>

<QRCodeScanner name="Get Schedule" bind:value={value} />
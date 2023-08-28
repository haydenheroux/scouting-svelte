<script lang="ts">
	import QRCodeScanner from '$lib/components/sections/QRCodeScanner.svelte';
	import { schedulesStore } from '$lib/stores';

    let value: string;

    $: value && schedulesStore.set(JSON.parse(value));
</script>

<QRCodeScanner name="Get Schedule" bind:value={value} />
<script lang="ts">
	import QRCodeDisplay from "./../../lib/components/sections/QRCodeDisplay.svelte";
	import { storedEvents } from "$lib/stores";
	import { validateEvent } from "$lib/api";
	import Section from "$lib/components/Section.svelte";
	import QrCodeScanner from "$lib/components/sections/QRCodeScanner.svelte";
	import { storeEvent } from "$lib/stores";
	import Showable from "$lib/components/Showable.svelte";

	let events = storedEvents.get();

	let scanned = false;

	function onScan(result: object) {
		console.log("Got new scanned event");

		if (scanned) {
			console.log("Already processed, ignoring...");
			return;
		}

		const scannedEvent = validateEvent(result);

		if (scannedEvent != null) {
			storeEvent(scannedEvent);

			events = storedEvents.get();

			scanned = true;
		} else {
			console.error(`Could not validate event ${scannedEvent}`);
		}
	}
</script>

{#each events as event}
	{@const name = event.name ? event.name : event.code}
	<Section {name}>
		<!-- TODO Fill in additional event details, matches, etc. -->
		<Showable subject="QR Code">
			<QRCodeDisplay value={JSON.stringify(event)} />
		</Showable>
	</Section>
{/each}

{#if !scanned}
	<Section name="Add Event">
		<QrCodeScanner {onScan} />
	</Section>
{/if}

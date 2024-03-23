<script lang="ts">
	import { storedEvents } from "$lib/stores";
	import { validateEvent } from "$lib/api";
	import Section from "$lib/components/Section.svelte";
	import QrCodeScanner from "$lib/components/sections/QRCodeScanner.svelte";
	import { storeEvent } from "$lib/stores";
	import EventInformation from "$lib/components/sections/EventInformation.svelte";
	import EventSelector from "$lib/components/selectors/EventSelector.svelte";
	import type { Event } from "$lib/api";

	let selectedEvent: Event | null = null;

	let events = storedEvents.get();

	function onScan(result: object) {
		const scannedEvent = validateEvent(result);

		if (scannedEvent != null) {
			storeEvent(scannedEvent);

			events = storedEvents.get();

			selectedEvent = selectedEvent;
		} else {
			console.error(`Could not validate event ${scannedEvent}`);
		}
	}
</script>

<Section name="Add Event">
	<QrCodeScanner {onScan} />
</Section>

<Section name="View Event">
	<EventSelector bind:events bind:event={selectedEvent} />
	<EventInformation bind:event={selectedEvent} />
</Section>

<script lang="ts">
	import Section from "$lib/components/Section.svelte"
	import QrCodeScanner from "$lib/components/sections/QRCodeScanner.svelte"
	import { storeEvent } from "$lib/stores"
	import EventCreator from "$lib/components/sections/EventCreator.svelte"
	import { validateEvent } from "$lib/api"

	function onScan(result: object) {
		const scannedEvent = validateEvent(result)

		if (scannedEvent != null) {
			storeEvent(scannedEvent)
		} else {
			console.error(`Could not validate event ${scannedEvent}`)
		}
	}
</script>

<Section name="Create Event">
	<EventCreator />
</Section>

<Section name="Scan Event">
	<QrCodeScanner {onScan} />
</Section>

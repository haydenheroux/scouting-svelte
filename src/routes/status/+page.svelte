<script lang="ts">
	import { storedEvents } from "$lib/stores"
	import { getEventByEventCode } from "$lib/api"
	import Section from "$lib/components/Section.svelte"
	import EventInformation from "$lib/components/sections/EventInformation.svelte"
	import EventSelector from "$lib/components/selectors/EventSelector.svelte"
	import type { Event } from "$lib/api"

	let selectedEvent: Event | null = null

	let selectedEventCode: string | null

	$: {
		if (selectedEventCode == null) {
			selectedEvent = null
		} else {
			selectedEvent = getEventByEventCode(selectedEventCode)
		}
	}

	let events = storedEvents.get()
</script>

<Section name="Select Event">
	<EventSelector eventCodes={events.map((event) => event.code)} bind:selectedEventCode />
	<EventInformation bind:event={selectedEvent} />
</Section>


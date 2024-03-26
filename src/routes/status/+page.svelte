<script lang="ts">
	import Section from "$lib/components/Section.svelte"
	import EventInformation from "$lib/components/sections/EventInformation.svelte"
	import EventSelector from "$lib/components/selectors/EventSelector.svelte"
	import { getEventCodesWithMetrics } from "$lib/api"

	let selectedEventCode: string | null
</script>

<Section name="Select Event">
	<EventSelector eventCodes={getEventCodesWithMetrics()} bind:selectedEventCode />
	<EventInformation bind:eventCode={selectedEventCode} />
</Section>


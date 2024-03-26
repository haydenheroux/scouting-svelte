<script lang="ts">
	import { storedEvents, storedMetrics } from "$lib/stores"
	import Section from "$lib/components/Section.svelte"
	import EventSelector from "$lib/components/selectors/EventSelector.svelte"
	import type { Metrics } from "$lib/metrics"
	import MetricsSelector from "$lib/components/selectors/MetricsSelector.svelte"
	import MetricsEditor from "$lib/components/sections/MetricsEditor.svelte"

	let selectedEventCode: string | null

	let metricsForSelectedEventCode: Metrics[]

	let selectedMetrics: Metrics | null

	$: {
		metricsForSelectedEventCode = getMetricsForEventCode(selectedEventCode)
	}

	function getMetricsForEventCode(eventCode: string | null): Metrics[] {
		const metrics = storedMetrics.get()

		const filtered = metrics.filter((metrics) => {
			return metrics.match.eventCode === eventCode
		})

		return filtered
	}
</script>

<Section name="Select Event">
	<EventSelector
		bind:selectedEventCode
		eventCodes={storedEvents.get().map((event) => event.code)}
	/>
</Section>

{#if metricsForSelectedEventCode.length > 0}
	<Section name="Select Match">
		<MetricsSelector bind:metrics={metricsForSelectedEventCode} bind:selectedMetrics />
	</Section>
{/if}

{#if selectedMetrics != null}
	<MetricsEditor readonly hideParticipant metrics={selectedMetrics} />
{/if}

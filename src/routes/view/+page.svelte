<script lang="ts">
	import { storedMetrics } from "$lib/stores"
	import Section from "$lib/components/Section.svelte"
	import EventSelector from "$lib/components/selectors/EventSelector.svelte"
	import type { Metrics } from "$lib/metrics"
	import MetricsEditor from "$lib/components/sections/MetricsEditor.svelte"
	import {
		getEventCodesWithMetrics,
		stringifyDriverStation,
		type MatchNumber,
		driverStationOf,
		createDriverStation
	} from "$lib/api"

	let selectedEventCode: string | null

	let metricsForSelectedEventCode: Metrics[]

	let match: MatchNumber = 1

	function previousMatch() {
		if (match > 1) match -= 1
	}

	function nextMatch() {
		match += 1
	}

	let selectedMetrics: Metrics | null

	$: {
		metricsForSelectedEventCode = getMetricsForEventCode(selectedEventCode, match)
	}

	function getMetricsForEventCode(eventCode: string | null, match: MatchNumber): Metrics[] {
		const metrics = storedMetrics.get()

		const filtered = metrics.filter((metrics) => {
			return metrics.match.eventCode === eventCode && metrics.match.match === match
		})

		return filtered
	}
</script>

<Section name="Select Event">
	<EventSelector bind:selectedEventCode eventCodes={getEventCodesWithMetrics()} />
</Section>

<Section name="Select Match">
	<input type="number" min="1" bind:value={match} />
	<div class="split">
		<button class="active" on:click={previousMatch}>Previous Match</button>
		<button class="active" on:click={nextMatch}>Next Match</button>
	</div>
</Section>

{#if metricsForSelectedEventCode.length > 0}
	<Section name="Select Team">
		<select bind:value={selectedMetrics}>
			{#each metricsForSelectedEventCode as metrics}
				<option value={metrics}>
					{metrics.team}
				</option>
			{/each}
		</select>
	</Section>
{/if}

{#if metricsForSelectedEventCode.length > 0 && selectedMetrics != null}
	<hr />

	<MetricsEditor readonly hideParticipant metrics={selectedMetrics} />
{/if}

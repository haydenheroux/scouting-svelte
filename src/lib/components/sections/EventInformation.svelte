<script lang="ts">
	import { storedMetrics } from "$lib/stores";
	import QRCodeDisplay from "$lib/components/sections/QRCodeDisplay.svelte";
	import Showable from "$lib/components/Showable.svelte";
	import {
		tbaMatchKey,
		type Event,
		type TBAMatchKey,
		Alliance,
		type StationNumber,
		stationNumbers,
		parseMatchKey
	} from "$lib/api";
	import Section from "$lib/components/Section.svelte";
	import type { Metrics } from "$lib/metrics";

	export let event: Event | null;

	let name = event ? event.name : "No Event";

	function getMetricsByEvent(event: Event | null): Metrics[] {
		const metrics = storedMetrics.get();

		if (event === null) return metrics.filter((matchMetrics) => matchMetrics.match?.event === null);

		return metrics.filter((matchMetrics) => matchMetrics.match?.event?.code === event.code);
	}

	type MetricsByAllianceByStation = Map<
		TBAMatchKey,
		Map<Alliance, Map<StationNumber, Metrics | null>>
	>;

	function sortMetricsByMatch(metrics: Metrics[]): MetricsByAllianceByStation {
		const matchKeyMap: MetricsByAllianceByStation = new Map();

		for (const metric of metrics) {
			if (!metric || !metric.match) {
				console.warn(`Metric ${JSON.stringify(metric)} is invalid or has null match`);
				continue;
			}

			const matchKey = tbaMatchKey(metric.match);

			let allianceMap = matchKeyMap.get(matchKey);
			if (!allianceMap) {
				allianceMap = new Map();
				matchKeyMap.set(matchKey, allianceMap);
			}

			if (!metric.alliance) {
				console.warn(`Metric ${JSON.stringify(metric)} has null alliance`);
				continue;
			}

			let stationMetricsMap = allianceMap.get(metric.alliance);
			if (!stationMetricsMap) {
				stationMetricsMap = new Map();
				allianceMap.set(metric.alliance, stationMetricsMap);
			}

			if (metric.station === null) {
				console.warn(`Metric ${JSON.stringify(metric)} has null stationNumber`);
				continue;
			}

			stationMetricsMap.set(metric.station, metric);
		}

		return matchKeyMap;
	}
</script>

<Section {name}>
	{@const alliancesByMatch = sortMetricsByMatch(getMetricsByEvent(event))}
	{#each [...alliancesByMatch] as [matchKey, stationsByAlliance]}
		{@const match = parseMatchKey(matchKey)}
		<b>{match?.matchType} {match?.match}</b>
		{#each [...stationsByAlliance] as [alliance, metricsByStation]}
			<div class="split">
				{#each stationNumbers as station}
					{@const metrics = metricsByStation.get(station)}
					{#if metrics}
						<button class={alliance === Alliance.RED ? "red" : "blue"}>{metrics.team}</button>
					{:else}
						<button>?</button>
					{/if}
				{/each}
			</div>
		{/each}
	{/each}
</Section>

<style>
	/* TODO extend active button */
	.red,
	.blue {
		color: var(--clr-foreground);
	}

	.red {
		background-color: var(--clr-red);
		border-color: var(--clr-red);
	}

	.blue {
		background-color: var(--clr-blue);
		border-color: var(--clr-blue);
	}
</style>

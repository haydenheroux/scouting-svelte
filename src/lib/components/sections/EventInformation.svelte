<script lang="ts">
	import { storedMetrics } from "$lib/stores";
	import QRCodeDisplay from "$lib/components/sections/QRCodeDisplay.svelte";
	import Showable from "$lib/components/Showable.svelte";
	import { stringifyMatchKey, type Event } from "$lib/api";
	import Section from "$lib/components/Section.svelte";

	export let event: Event | null;

	let name = event ? event.name : "No Event";

	let eventMetrics = getMetricsByEvent(event);

	function getMetricsByEvent(event: Event | null) {
		const metrics = storedMetrics.get();

		if (event === null) return metrics.filter((matchMetrics) => matchMetrics.match?.event === null);

		return metrics.filter((matchMetrics) => matchMetrics.match?.event?.code === event.code);
	}
</script>

<Section {name}>
	{#each eventMetrics as eventMatchMetrics}
		<div class="split">
			{#if eventMatchMetrics.match != null}
				<p>
					{stringifyMatchKey(eventMatchMetrics.match)}
				</p>
			{/if}
			<Showable>
				<QRCodeDisplay value={JSON.stringify(eventMatchMetrics)} />
			</Showable>
		</div>
	{/each}
	<!-- TODO Fill in additional event details, matches, etc. -->
	{#if event != null}
		<Showable subject="QR Code">
			<QRCodeDisplay value={JSON.stringify(event)} />
		</Showable>
	{/if}
</Section>

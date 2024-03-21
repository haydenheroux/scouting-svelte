<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from '$lib/components/Section.svelte';
	import Showable from '$lib/components/Showable.svelte';
	import { MatchMetrics } from '$lib/metrics';
</script>

{#each Object.entries(matches) as [matchKey, alliances]}
	{@const parsed = parseMatchKey(matchKey)}
	<Section name={`${parsed.type} ${parsed.match}`}>
		{#each Object.entries(alliances) as [alliance, stations]}
			<button class:blue={alliance === 'blue'} class:red={alliance === 'red'}
				>{alliance === 'blue' ? 'Blue Alliance' : 'Red Alliance'}</button
			>
			{#each Object.entries(stations) as station, index}
				{@const data = station[1][0]}
				{@const metrics = MatchMetrics.deserialize(data.metrics)}
				<div style="display: flex; flex-direction: column; gap: var(--layout-gap);">
					<div>
						<b>{JSON.stringify(data.participant.team)} (Station {index + 1})</b>
						<p>Left?: {metrics.leave}</p>
						<p>Pickups: {metrics.pickups.length}</p>
						<p>Makes: {metrics.makes.length} ({metrics.pickups.length != 0 ? (100 * metrics.makes.length / metrics.pickups.length).toFixed(0) : 0}%)</p>
						<p>Misses: {metrics.misses.length} ({metrics.pickups.length != 0 ? (100 * metrics.misses.length / metrics.pickups.length).toFixed(0) : 0}%)</p>
						<p>Coopertition?: {metrics.coopertition}</p>
						<p>Trap: {metrics.trap}</p>
						<p>Climb: {metrics.climb}</p>
						<p>Harmony: {metrics.harmony}</p>
					</div>
					<div class="split">
						<Showable subject="JSON">
							<p>{JSON.stringify(data)}</p>
						</Showable>
						<Showable subject="QR Code">
							<QRCodeDisplay value={JSON.stringify(data)} />
						</Showable>
					</div>
				</div>
			{/each}
		{/each}
	</Section>
{/each}

<style>
	.red,
	.blue {
		color: var(--clr-foreground);
	}

	.blue {
		background-color: var(--clr-blue);
	}

	.red {
		background-color: var(--clr-red);
	}
</style>

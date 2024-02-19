<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import type { MatchToAlliance, StationToMetrics } from '$lib/stores.ts';
	import Section from '$lib/components/Section.svelte';
	import { storedMatches } from '$lib/stores';
	import { parseMatchKey, type SerializedMatchKey } from '$lib/api';

	const matches = storedMatches.get();

	function presentStation(stations: StationToMetrics): boolean[] {
		return [1, 2, 3].map((i) => stations[i] !== undefined);
	}

	function getMatch(matchKey: SerializedMatchKey) {
		let o: MatchToAlliance = {};	

		o[matchKey] = storedMatches.get()[matchKey];

		return o;
	}
</script>

{#each Object.entries(matches) as [matchKey, alliances]}
	{@const parsed = parseMatchKey(matchKey)}
	<Section name={`${parsed.type} ${parsed.match}`}>
		{#each Object.entries(alliances) as [alliance, stations]}
			<div class="split">
				{#each presentStation(stations) as present, i}
					{#if present}
						<button class:blue={alliance === 'blue'} class:red={alliance === 'red'}>{i + 1}</button>
					{:else}
						<button>{i + 1}</button>
					{/if}
				{/each}
			</div>
		{/each}
		<QRCodeDisplay showable={true} value={JSON.stringify(getMatch(matchKey))}/>
	</Section>
{/each}

<style>
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

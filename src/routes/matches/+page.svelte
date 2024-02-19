<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import type { MatchToAlliance, StationToMetrics } from '$lib/stores.ts';
	import Section from '$lib/components/Section.svelte';
	import { storedMatches } from '$lib/stores';
	import type { SerializedMatchCode } from '$lib/api';

	const matches = storedMatches.get();

	function presentStation(stations: StationToMetrics): boolean[] {
		return [1, 2, 3].map((i) => stations[i] !== undefined);
	}

	function getMatch(matchCode: SerializedMatchCode) {
		let o: MatchToAlliance = {};	

		o[matchCode] = storedMatches.get()[matchCode];

		return o;
	}
</script>

{#each Object.entries(matches) as [matchCode, alliances]}
	<Section name={matchCode}>
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
		<QRCodeDisplay showable={true} value={JSON.stringify(getMatch(matchCode))}/>
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

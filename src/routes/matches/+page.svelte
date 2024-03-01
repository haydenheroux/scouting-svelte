<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from '$lib/components/Section.svelte';
	import { storedMatches } from '$lib/stores';
	import { parseMatchKey } from '$lib/api';
	import Showable from '$lib/components/Showable.svelte';

	const matches = storedMatches.get();
</script>

{#each Object.entries(matches) as [matchKey, alliances]}
	{@const parsed = parseMatchKey(matchKey)}
	<Section name={`${parsed.type} ${parsed.match}`}>
		{#each Object.entries(alliances) as [alliance, stations]}
			<button class:blue={alliance === 'blue'} class:red={alliance === 'red'}
				>{alliance === 'blue' ? 'Blue Alliance' : 'Red Alliance'}</button
			>
			{#each Object.entries(stations) as station, index}
				<div class="split">
					<b>Station {index + 1}</b>
					<Showable subject="JSON">
						<p>{JSON.stringify(station[1][0])}</p>
					</Showable>
					<Showable subject="QR Code">
						<QRCodeDisplay value={JSON.stringify(station[1][0])} />
					</Showable>
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

<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from '$lib/components/Section.svelte';
	import { storedMatches } from '$lib/stores';
	import { getMatchCode } from '$lib/api';
	import { deserializeAlliance } from '$lib/adapter';

	let history = storedMatches.get();
</script>

{#each history as report}
	<Section
		name={`${getMatchCode(report.participant)} - ${deserializeAlliance(
			report.participant.alliance
		)} ${report.participant.station} `}
	>
		<QRCodeDisplay showable={true} value={JSON.stringify(report)} />
	</Section>
{/each}

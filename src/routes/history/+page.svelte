<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from '$lib/components/Section.svelte';
	import { storedHistory } from '$lib/data/stores';
	import { getMatchCode } from '$lib/api';

	let history = storedHistory.get();
</script>

{#each history as report}
	<Section
		name={`${report.participant.event} ${getMatchCode(report.participant)} - Team ${
			report.participant.teamNumber
		}`}
	>
		<QRCodeDisplay showable={true} value={JSON.stringify(report)} />
	</Section>
{/each}

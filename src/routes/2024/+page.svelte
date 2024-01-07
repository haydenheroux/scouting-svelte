<script lang="ts">
	import field2024 from '$lib/images/fields/2024.png';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { getMetricsOrNull, storedReports } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import { participantToSerializedParticipant } from '$lib/adapter';
	import { Metrics2024 } from '$lib/data/metrics/2024';

    let participant: Participant;

    let metrics: Metrics2024 = new Metrics2024();

    let qrCode = '';

	$: participant &&
		(() => {
			const metricsOrNull = getMetricsOrNull(participant);

			if (metricsOrNull) metrics = Metrics2024.fromMetrics(metricsOrNull);
		})();

	function handleSubmit() {
		const report = {
			participant: participantToSerializedParticipant(participant),
			metrics: metrics.flatten()
		};

		qrCode = JSON.stringify(report);

		storedReports.set([...storedReports.get(), report]);
	}
</script>

<ParticipantSelector bind:participant />
<FieldSelector
	bind:point={metrics.startingPoint}
	field={field2024}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<BooleanSelector
	bind:value={metrics.leave}
	name="Mobility"
	help="The robot fully leaves the Wing during auto."
/>
<MultipleOptionSelector
	bind:selected={metrics.defense}
	name="Defense"
	options={['None', 'Attempted', 'Effective', 'Very Effective']}
	help="Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores."
/>
<Notes bind:notes={metrics.notes} />
<Submit on:click={handleSubmit} bind:scouterName={metrics.scouterName} />
{#if qrCode.length > 0}
	<section>
		<QRCode value={qrCode} />
	</section>
{/if}
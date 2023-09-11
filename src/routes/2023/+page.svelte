<script lang="ts">
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import CubeCone from './CubeCone.svelte';
	import GridComponent from './GridComponent.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import { Metrics2023 } from '$lib/data/metrics/2023';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { getMetricsOrNull, getReportOrNull, storedReports } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import { participantToSerializedParticipant } from '$lib/adapter';

	/* participant */
	let participant: Participant;

	let metrics: Metrics2023 = new Metrics2023();

	/* QR code */
	let qrCode = '';

	$: participant && (() => {
		const metricsOrNull = getMetricsOrNull(participant);

		if (metricsOrNull) metrics = Metrics2023.fromMetrics(metricsOrNull);
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
	field={field2023}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<CubeCone
	bind:selected={metrics.preload}
	name="Preloaded Game Piece"
	help="Game piece the robot stats the match with."
/>
<BooleanSelector
	bind:value={metrics.mobility}
	name="Mobility"
	help="The robot fully leaves the community during auto."
/>
<GridComponent
	bind:grid={metrics.autoScores}
	name="Auto Scores"
	help="Nodes where the robot scores during auto."
/>
<MultipleOptionSelector
	bind:selected={metrics.autoChargeStation}
	name="Auto Charge Station"
	help="Interaction between the robot and the charge station during auto."
	options={['None', 'Attempted', 'Dock', 'Engage']}
/>
<MultipleOptionSelector
	bind:selected={metrics.substationPreference}
	name="Substation Preference"
	help="The substation the robot most frequently uses during teleop."
	options={['Single Substation', 'Double Substation']}
/>
<GridComponent
	bind:grid={metrics.teleopScores}
	name="Teleop Scores"
	help="Nodes where the robot scores during teleop."
/>
<MultipleOptionSelector
	bind:selected={metrics.endgameChargeStation}
	name="Endgame Charge Station"
	help="Interaction between the robot and the charge station during endgame."
	options={['None', 'Attempted', 'Dock', 'Engage']}
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

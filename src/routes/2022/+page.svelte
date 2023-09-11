<script lang="ts">
	import field2022 from '$lib/images/fields/2022.jpg';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import NumberSelector from '$lib/components/selectors/NumberSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import type { Defense } from '$lib/data/metrics/universal';
	import { Metrics2022, type ClimbLevel } from '$lib/data/metrics/2022';
	import { arrayToObject } from '$lib/util/array';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { storedReports } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import type { Point } from '$lib/types/Point';
	import { participantToSerializedParticipant } from '$lib/adapter';

	/* participant */
	let participant: Participant;

	let metrics: Metrics2022 = new Metrics2022();

	function handleSubmit() {
		const report = {
			participant: participantToSerializedParticipant(participant),
			metrics: metrics.flatten()
		};

		qrCode = JSON.stringify(report);

		storedReports.set([...storedReports.get(), report]);
	}

	/* QR code */
	let qrCode = '';
</script>

<ParticipantSelector bind:participant />
<FieldSelector
	bind:point={metrics.startingPoint}
	field={field2022}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<BooleanSelector
	bind:value={metrics.taxi}
	name="Auto Taxi"
	help="The robot fully leaves the tarmac during auto."
/>
<NumberSelector
	bind:value={metrics.autoCargoScored}
	name="Auto Cargo Scored"
	help="Number of cargo scored by the robot during auto."
/>
<FieldSelector
	bind:points={metrics.teleopMakes}
	field={field2022}
	name="Teleop Makes"
	help="Places where the robot scores during teleop."
	drawStyle="triangle"
/>
<FieldSelector
	bind:points={metrics.teleopMisses}
	field={field2022}
	name="Teleop Misses"
	help="Places where the robot tries scoring during teleop but misses."
	drawStyle="cross"
/>
<NumberSelector
	bind:value={metrics.teleopLowerCargoScored}
	name="Teleop Lower Hub Cargo Scored"
	help="Cargo scored in the lower hub during teleop."
/>
<NumberSelector
	bind:value={metrics.teleopUpperCargoScored}
	name="Teleop Upper Hub Cargo Scored"
	help="Cargo scored in the upper hub during teleop."
/>
<MultipleOptionSelector
	bind:selected={metrics.climbLevel}
	name="Climb Level"
	options={['None', 'Attempted', 'Low', 'Middle', 'High', 'Traversal']}
	help="Level the robot climbed to."
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

<script lang="ts">
	import { doPost } from '$lib/util/fetch';
	import field2022 from '$lib/images/fields/2022.jpg';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import NumberSelector from '$lib/components/selectors/NumberSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import type { Defense } from '$lib/data/metrics/universal';
	import type { ClimbLevel } from '$lib/data/metrics/2022';
	import { arrayToObject } from '$lib/util/array';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { storedMatches } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import type { Point } from '$lib/types/Point';
	import { participantToSerializedParticipant } from '$lib/adapter';
	import { onMount } from 'svelte';
	import { serializedParticipantsAreEqual } from '$lib/api';

	/* participant */
	let participant: Participant;

	/* starting position */
	let startingPoint: Array<Point>;

	/* taxi */
	let taxi: boolean;

	/* auto cargo scored */
	let autoCargoScored: number;

	/* teleop score locations */
	let teleopMakes: Array<Point>;
	let teleopMisses: Array<Point>;

	/* teleop cargo scored */
	let teleopLowerCargoScored: number;
	let teleopUpperCargoScored: number;

	/* endgame climb level */
	let climbLevel: ClimbLevel = 'None';

	/* defense */
	let defense: Defense = 'None';

	/* notes */
	let notes: Array<string>;

	/* scouter */
	let scouterName: string;

	onMount(() => {
		let matches = storedMatches.get();

		let matchesForParticipant = matches.filter((match) => {
			return serializedParticipantsAreEqual(
				match.participant,
				participantToSerializedParticipant(participant)
			);
		});

		let match = matchesForParticipant[matchesForParticipant.length - 1];
	});

	function handleSubmit() {
		const metrics = {
			startingPoint: startingPoint[0].toString(),
			taxi: taxi.toString(),
			autoCargoScored: autoCargoScored.toString(),
			...arrayToObject(
				'teleopMake',
				teleopMakes.map((point) => point.toString())
			),
			...arrayToObject(
				'teleopMiss',
				teleopMisses.map((point) => point.toString())
			),
			teleopLowerCargoScored: teleopLowerCargoScored.toString(),
			teleopUpperCargoScored: teleopUpperCargoScored.toString(),
			climbLevel,
			defense,
			...arrayToObject('note', notes),
			scouterName
		};

		const scouted = {
			participant: participantToSerializedParticipant(participant),
			metrics
		};

		// TODO notify user
		doPost(new URL('http://localhost/api/add-metrics'), scouted);

		qrCode = JSON.stringify(scouted);

		storedMatches.set([...storedMatches.get(), scouted]);
	}

	/* QR code */
	let qrCode = '';
</script>

<ParticipantSelector bind:participant />
<FieldSelector
	bind:points={startingPoint}
	field={field2022}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<BooleanSelector
	bind:value={taxi}
	name="Auto Taxi"
	help="The robot fully leaves the tarmac during auto."
/>
<NumberSelector
	bind:value={autoCargoScored}
	name="Auto Cargo Scored"
	help="Number of cargo scored by the robot during auto."
/>
<FieldSelector
	bind:points={teleopMakes}
	field={field2022}
	name="Teleop Makes"
	help="Places where the robot scores during teleop."
	drawStyle="triangle"
/>
<FieldSelector
	bind:points={teleopMisses}
	field={field2022}
	name="Teleop Misses"
	help="Places where the robot tries scoring during teleop but misses."
	drawStyle="cross"
/>
<NumberSelector
	bind:value={teleopLowerCargoScored}
	name="Teleop Lower Hub Cargo Scored"
	help="Cargo scored in the lower hub during teleop."
/>
<NumberSelector
	bind:value={teleopUpperCargoScored}
	name="Teleop Upper Hub Cargo Scored"
	help="Cargo scored in the upper hub during teleop."
/>
<MultipleOptionSelector
	bind:selected={climbLevel}
	name="Climb Level"
	options={['None', 'Attempted', 'Low', 'Middle', 'High', 'Traversal']}
	help="Level the robot climbed to."
/>
<MultipleOptionSelector
	bind:selected={defense}
	name="Defense"
	options={['None', 'Attempted', 'Effective', 'Very Effective']}
	help="Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores."
/>
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
{#if qrCode.length > 0}
	<section>
		<QRCode value={qrCode} />
	</section>
{/if}

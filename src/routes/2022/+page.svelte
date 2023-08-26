<script lang="ts">
	import { doPost } from '$lib/util/fetch';
	import field2022 from '$lib/images/fields/2022.jpg';
	import ParticipantSelector from '$lib/components/sections/Participant.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import NumberSelector from '$lib/components/selectors/NumberSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import { serialize, type Participant } from '$lib/types/Participant';
	import type { Defense } from '$lib/metrics/universal';
	import type { ClimbLevel } from '$lib/metrics/2022';
	import { type Point, pointToString } from '$lib/types/Point';
	import { arrayToObject } from '$lib/util/array';
	import QRCode from '$lib/components/sections/QRCode.svelte';
	import { scoutedMatches } from '$lib/stores';

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
	let climbLevel: ClimbLevel;

	/* defense */
	let defense: Defense;

	/* notes */
	let notes: Array<string>;
	
	/* scouter */
	let scouterName: string;

	/* QR code */
	let qrCode = "";

	function handleSubmit() {
		const metrics = {
			startingPoint: pointToString(startingPoint[0]),
			taxi: taxi.toString(),
			autoCargoScored: autoCargoScored.toString(),
			...arrayToObject("teleopMake", teleopMakes.map(pointToString)),
			...arrayToObject("teleopMiss", teleopMisses.map(pointToString)),
			teleopLowerCargoScored: teleopLowerCargoScored.toString(),
			teleopUpperCargoScored: teleopUpperCargoScored.toString(),
			climbLevel,
			defense,
			...arrayToObject("note", notes),
			scouterName
		};

		const scouted = {
			participant: serialize(participant),
			metrics
		}

		// TODO notify user
		doPost(new URL("http://localhost/api/add-metrics"), scouted);

		qrCode = JSON.stringify(scouted);

		scoutedMatches.push(scouted);
	}
</script>

<ParticipantSelector bind:participant />
<FieldSelector bind:points={startingPoint} field={field2022} name="Starting Position" help="Place where the robot starts the match." single={true}/>
<BooleanSelector bind:value={taxi} name="Auto Taxi" help="The robot fully leaves the tarmac during auto." />
<NumberSelector bind:value={autoCargoScored} name="Auto Cargo Scored" help="Number of cargo scored by the robot during auto." />
<FieldSelector bind:points={teleopMakes} field={field2022} name="Teleop Makes" help="Places where the robot scores during teleop." drawStyle="triangle" />
<FieldSelector bind:points={teleopMisses} field={field2022} name="Teleop Misses" help="Places where the robot tries scoring during teleop but misses." drawStyle="cross" />
<NumberSelector bind:value={teleopLowerCargoScored} name="Teleop Lower Hub Cargo Scored" help="Cargo scored in the lower hub during teleop." />
<NumberSelector bind:value={teleopUpperCargoScored} name="Teleop Upper Hub Cargo Scored" help="Cargo scored in the upper hub during teleop." />
<MultipleOptionSelector bind:selected={climbLevel} name="Climb Level" options={["None", "Attempted", "Low", "Middle", "High", "Traversal"]} help="Level the robot climbed to." />
<MultipleOptionSelector bind:selected={defense} name="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} help="Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores." />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
{#if qrCode.length > 0}
	<section>
		<QRCode value="{qrCode}" />
	</section>
{/if}
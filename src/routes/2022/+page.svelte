<script lang="ts">
	import field2022 from '$lib/images/fields/2022.jpg';
	import ParticipantSelector from '$lib/components/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/components/AllianceSelector.svelte';
	import FieldSelector from '$lib/components/FieldSelector.svelte';
	import BooleanSelector from '$lib/components/BooleanSelector.svelte';
	import MultipleOptionSelector from '$lib/components/MultipleOptionSelector.svelte';
	import NumberSelector from '$lib/components/NumberSelector.svelte';
	import Submit from '$lib/components/Submit.svelte';
	import Notes from '$lib/components/Notes.svelte';
	import { toParticipantQuery, type MatchType, type Participant } from '$lib/types/Participant';
	import type { Defense } from '$lib/types/Metrics';
	import type { ClimbLevel } from './Metrics';
	import { type Point, pointToString } from '$lib/interfaces/Point';
	import { doPost } from '$lib/util/Fetch';
	import { serialize } from '$lib/types/Participant';
	import { arrayToObject } from '$lib/util/Array';
	import QrCode from '$lib/components/QRCode.svelte';

	/* participant */
	let event: string;
	let matchType: MatchType;
	let matchNumber: number;
	let team: string;

	/* alliance */
	let isRedAlliance: boolean;

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
		const participant: Participant = {
			event,
			matchType,
			matchNumber,
			teamNumber: Number(team),
			alliance: isRedAlliance ? "Red" : "Blue"
		};

		const metrics = new Map(Object.entries({
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
		}));

		const serialMetrics = serialize(metrics);

		// TODO notify user
		doPost(new URL("http://localhost/api/add-metrics"), toParticipantQuery(participant), serialMetrics);

		qrCode = JSON.stringify([toParticipantQuery(participant), serialMetrics]);
	}
</script>

<ParticipantSelector bind:event bind:matchType bind:matchNumber bind:team />
<AllianceSelector bind:isRedAlliance />
<FieldSelector bind:points={startingPoint} field={field2022} name="Starting Position" help="Place where the robot starts the match." single={true}/>
<BooleanSelector bind:value={taxi} name="Auto Taxi" help="The robot fully leaves the tarmac during auto." />
<NumberSelector bind:value={autoCargoScored} name="Auto Cargo Scored" help="Number of cargo scored by the robot during auto." />
<FieldSelector bind:points={teleopMakes} field={field2022} name="Teleop Makes" help="Places where the robot scores during teleop." drawStyle="triangle" />
<FieldSelector bind:points={teleopMisses} field={field2022} name="Teleop Misses" help="Places where the robot tries scoring during teleop but misses." drawStyle="cross" />
<NumberSelector bind:value={teleopLowerCargoScored} name="Teleop Lower Hub Cargo Scored" help="Cargo scored in the lower hub during teleop." />
<NumberSelector bind:value={teleopUpperCargoScored} name="Teleop Upper Hub Cargo Scored" help="Cargo scored in the upper hub during teleop." />
<MultipleOptionSelector bind:selected={climbLevel} name="Climb Level" options={["Low", "Middle", "High", "Traversal"]} help="Level the robot climbed to.<br/>Deselect if the robot does not climb." />
<MultipleOptionSelector bind:selected={defense} name="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} help="Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores." />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
{#if qrCode.length > 0}
	<QrCode value="{qrCode}" />
{/if}
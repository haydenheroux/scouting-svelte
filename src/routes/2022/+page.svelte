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
	import { toMatchQuery, type MatchType, type Participant } from '$lib/types/Thing';
	import type { Defense } from '$lib/types/Metrics';
	import type { ClimbLevel } from './Metrics';
	import { type Point, pointToString, pointsToString } from '$lib/interfaces/Point';
	import { doPost } from '$lib/util/Fetch';
	import { serialize } from '$lib/types/Thing';

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

	function handleSubmit() {
		console.log(`raw: ${matchType}`)

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
			teleopMakes: pointsToString(teleopMakes),
			teleopMisses: pointsToString(teleopMisses),
			teleopLowerCargoScored: teleopLowerCargoScored.toString(),
			teleopUpperCargoScored: teleopUpperCargoScored.toString(),
			climbLevel,
			defense,
			notes: notes.join(":"),
			scouterName
		}));

		const serialParticipant = serialize(participant, metrics);

		console.log(doPost(new URL("http://localhost/api/new-participant"), toMatchQuery(participant), serialParticipant));
	}
</script>

<ParticipantSelector bind:event bind:matchType bind:matchNumber bind:team />
<AllianceSelector bind:isRedAlliance />
<FieldSelector bind:points={startingPoint} field={field2022} title="Starting Position" single={true}/>
<BooleanSelector bind:value={taxi} title="Auto Taxi" />
<NumberSelector bind:value={autoCargoScored} title="Auto Cargo Scored" />
<FieldSelector bind:points={teleopMakes} field={field2022} title="Teleop Makes" drawStyle="triangle" />
<FieldSelector bind:points={teleopMisses} field={field2022} title="Teleop Misses" drawStyle="cross" />
<NumberSelector bind:value={teleopLowerCargoScored} title="Teleop Lower Hub Cargo Scored" />
<NumberSelector bind:value={teleopUpperCargoScored} title="Teleop Upper Hub Cargo Scored" />
<MultipleOptionSelector bind:selected={climbLevel} title="Climb Level" options={["Low", "Middle", "High", "Traversal"]} />
<MultipleOptionSelector bind:selected={defense} title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
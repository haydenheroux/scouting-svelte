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

	/* participant */
	let event: string;
	let matchType: string; // TODO make type
	let matchNumber: number;
	let team: string;

	/* alliance */
	let isRedAlliance: boolean;

	/* starting position */
    interface Point {
        readonly x: number;
        readonly y: number;
    }

	let startingPoint: Array<Point>;

	/* taxi */
	let taxi: boolean;

	/* auto cargo scored */
	let autoCargoScored: string; // TODO make type 

	/* teleop score locations */
	let teleopMakes: Array<Point>;
	let teleopMisses: Array<Point>;

	/* teleop cargo scored */
	let teleopLowerCargoScored: number;
	let teleopUpperCargoScored: number;

	/* endgame climb level */
	let climbLevel: string; // TODO make type

	/* defense */
	let defense: string; // TODO make type

	/* notes */
	let notes: Array<string>;
	
	/* scouter */
	let scouterName: string;

	function handleSubmit() {
		const participant = { // TODO make interface
			event,
			matchType,
			matchNumber,
			team,
			isRedAlliance
		};

		const metrics = {
			startingPoint,
			taxi,
			autoCargoScored,
			teleopMakes,
			teleopMisses,
			teleopLowerCargoScored,
			teleopUpperCargoScored,
			climbLevel,
			defense,
			notes,
			scouterName
		};

		console.log(participant, metrics); // TODO
	}
</script>

<ParticipantSelector bind:event bind:matchType bind:matchNumber bind:team />
<AllianceSelector bind:isRedAlliance />
<FieldSelector bind:points={startingPoint} field={field2022} title="Starting Position" single={true}/>
<BooleanSelector bind:value={taxi} title="Auto Taxi" />
<MultipleOptionSelector bind:selected={autoCargoScored} title="Auto Cargo Scored" options={["0", "1 - 2", "3 - 4", "5 - 6"]} />
<FieldSelector bind:points={teleopMakes} field={field2022} title="Teleop Makes" drawStyle="triangle" />
<FieldSelector bind:points={teleopMisses} field={field2022} title="Teleop Misses" drawStyle="cross" />
<NumberSelector bind:value={teleopLowerCargoScored} title="Teleop Lower Hub Cargo Scored" />
<NumberSelector bind:value={teleopUpperCargoScored} title="Teleop Upper Hub Cargo Scored" />
<MultipleOptionSelector bind:selected={climbLevel} title="Climb Level" options={["Low", "Middle", "High", "Traversal"]} />
<MultipleOptionSelector bind:selected={defense} title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
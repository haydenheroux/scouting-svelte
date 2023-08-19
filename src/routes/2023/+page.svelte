<script lang="ts">
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/components/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/components/AllianceSelector.svelte';
	import FieldSelector from '$lib/components/FieldSelector.svelte';
	import Submit from '$lib/components/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/MultipleOptionSelector.svelte';
	import BooleanSelector from '$lib/components/BooleanSelector.svelte';
	import CubeCone from './CubeCone.svelte';
	import Grid from './Grid.svelte';
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

	/* preloaded game piece */
	let preload: string; // TODO make type

	/* mobility */
	let mobility: boolean;

	/* auto scores */
	let autoScores: Array<Array<boolean>>; // TODO make type

	/* auto charge station */
	let autoChargeStation: string; // TODO make type

	/* substation preference */
	let substationPreference: string; // TODO make type

	/* teleop scores */
	let teleopScores: Array<Array<boolean>>; // TODO make type

	/* endgame charge station */
	let endgameChargeStation: string; // TODO make type

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
			preload,
			mobility,
			autoScores,
			autoChargeStation,
			substationPreference,
			teleopScores,
			endgameChargeStation,
			defense,
			notes,
			scouterName
		};

		console.log(participant, metrics); // TODO
	}
</script>

<ParticipantSelector bind:event bind:matchType bind:matchNumber bind:team />
<AllianceSelector bind:isRedAlliance />
<FieldSelector bind:points={startingPoint} field={field2023} title="Starting Position" single={true}/>
<CubeCone bind:selected={preload} title="Preloaded Game Piece" />
<BooleanSelector bind:value={mobility} title="Mobility" />
<Grid bind:grid={autoScores} title="Auto Scores" />
<MultipleOptionSelector bind:selected={autoChargeStation} title="Auto Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={substationPreference} title="Substation Preference" options={["Single Substation", "Double Substation"]} /> 
<Grid bind:grid={teleopScores} title="Teleop Scores" />
<MultipleOptionSelector bind:selected={endgameChargeStation} title="Endgame Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={defense} title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
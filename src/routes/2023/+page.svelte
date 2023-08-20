<script lang="ts">
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/components/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/components/AllianceSelector.svelte';
	import FieldSelector from '$lib/components/FieldSelector.svelte';
	import Submit from '$lib/components/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/MultipleOptionSelector.svelte';
	import BooleanSelector from '$lib/components/BooleanSelector.svelte';
	import CubeCone from './CubeCone.svelte';
	import GridComponent from './GridComponent.svelte';
	import Notes from '$lib/components/Notes.svelte';
	import type { Point } from '$lib/interfaces/Point';
	import type { MatchType, Participant } from '$lib/types/Thing';
	import type { ChargeStation, GamePiece, Grid, Substation } from './Metrics';
	import type { Defense } from '$lib/types/Metrics';

	/* participant */
	let event: string;
	let matchType: MatchType;
	let matchNumber: number;
	let team: string;

	/* alliance */
	let isRedAlliance: boolean;

	/* starting position */
	let startingPoint: Array<Point>;

	/* preloaded game piece */
	let preload: GamePiece;

	/* mobility */
	let mobility: boolean;

	/* auto scores */
	let autoScores: Grid;

	/* auto charge station */
	let autoChargeStation: ChargeStation;

	/* substation preference */
	let substationPreference: Substation;

	/* teleop scores */
	let teleopScores: Grid;

	/* endgame charge station */
	let endgameChargeStation: ChargeStation;

	/* defense */
	let defense: Defense;

	/* notes */
	let notes: Array<string>;
	
	/* scouter */
	let scouterName: string;

	function handleSubmit() {
		const participant: Participant = {
			event,
			matchType,
			matchNumber,
			teamNumber: Number(team),
			alliance: isRedAlliance ? "Red" : "Blue"
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
<GridComponent bind:grid={autoScores} title="Auto Scores" />
<MultipleOptionSelector bind:selected={autoChargeStation} title="Auto Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={substationPreference} title="Substation Preference" options={["Single Substation", "Double Substation"]} /> 
<GridComponent bind:grid={teleopScores} title="Teleop Scores" />
<MultipleOptionSelector bind:selected={endgameChargeStation} title="Endgame Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={defense} title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
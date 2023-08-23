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
	import { pointToString, type Point } from '$lib/interfaces/Point';
	import { toParticipantQuery, type MatchType, type Participant } from '$lib/types/Participant';
	import { gridToObject, type ChargeStation, type GamePiece, type Grid, type Substation } from './Metrics';
	import type { Defense } from '$lib/types/Metrics';
	import { doPost } from '$lib/util/Fetch';
	import { arrayToObject } from '$lib/util/Array';
	import QRCode from '$lib/components/QRCode.svelte';
	import { scoutedMatches } from '$lib/stores/stores';

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

		const metrics = {
			startingPoint: pointToString(startingPoint[0]),
			preload,
			mobility: mobility.toString(),
			...gridToObject("autoScore", autoScores),
			autoChargeStation,
			substationPreference,
			...gridToObject("teleopScore", teleopScores),
			endgameChargeStation,
			defense,
			...arrayToObject("note", notes),
			scouterName
		};

		// TODO notify user
		doPost(new URL("http://localhost/api/add-metrics"), toParticipantQuery(participant), metrics);

		const scouted = {
			participantQuery: toParticipantQuery(participant),
			metrics
		}

		qrCode = JSON.stringify(scouted);

		scoutedMatches.push(scouted);
	}
</script>

<ParticipantSelector bind:event bind:matchType bind:matchNumber bind:team />
<AllianceSelector bind:isRedAlliance />
<FieldSelector bind:points={startingPoint} field={field2023} name="Starting Position" help="Place where the robot starts the match." single={true}/>
<CubeCone bind:selected={preload} name="Preloaded Game Piece" help="Game piece the robot stats the match with." />
<BooleanSelector bind:value={mobility} name="Mobility" help="The robot fully leaves the community during auto." />
<GridComponent bind:grid={autoScores} name="Auto Scores" help="Nodes where the robot scores during auto." />
<MultipleOptionSelector bind:selected={autoChargeStation} name="Auto Charge Station" help="Interaction between the robot and the charge station during auto." options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={substationPreference} name="Substation Preference" help="The substation the robot most frequently uses during teleop." options={["Single Substation", "Double Substation"]} /> 
<GridComponent bind:grid={teleopScores} name="Teleop Scores" help="Nodes where the robot scores during teleop." />
<MultipleOptionSelector bind:selected={endgameChargeStation} name="Endgame Charge Station" help="Interaction between the robot and the charge station during endgame." options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector bind:selected={defense} name="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} help="Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores." />
<Notes bind:notes />
<Submit on:click={handleSubmit} bind:scouterName />
{#if qrCode.length > 0}
<section>
	<QRCode value="{qrCode}" />
</section>
{/if}
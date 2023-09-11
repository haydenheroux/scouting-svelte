<script lang="ts">
	import { doPost } from '$lib/util/fetch';
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import CubeCone from './CubeCone.svelte';
	import GridComponent from './GridComponent.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import {
		gridToObject,
		type ChargeStation,
		type GamePiece,
		type Grid,
		type Substation,
	} from '$lib/data/metrics/2023';
	import type { Defense } from '$lib/data/metrics/universal';
	import { arrayToObject } from '$lib/util/array';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { storedReports } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import type { Point } from '$lib/types/Point';
	import { participantToSerializedParticipant } from '$lib/adapter';

	/* participant */
	let participant: Participant;

	/* starting position */
	let startingPoint: Array<Point>;

	/* preloaded game piece */
	let preload: GamePiece = 'Cube';

	/* mobility */
	let mobility: boolean;

	/* auto scores */
	let autoScores: Grid;

	/* auto charge station */
	let autoChargeStation: ChargeStation = 'None';

	/* substation preference */
	let substationPreference: Substation;

	/* teleop scores */
	let teleopScores: Grid;

	/* endgame charge station */
	let endgameChargeStation: ChargeStation = 'None';

	/* defense */
	let defense: Defense = 'None';

	/* notes */
	let notes: Array<string>;

	/* scouter */
	let scouterName: string;

	/* QR code */
	let qrCode = '';

	function handleSubmit() {
		const metrics = {
			startingPoint: startingPoint[0].toString(),
			preload,
			mobility: mobility.toString(),
			...gridToObject('autoScore', autoScores),
			autoChargeStation,
			substationPreference,
			...gridToObject('teleopScore', teleopScores),
			endgameChargeStation,
			defense,
			...arrayToObject('note', notes),
			scouterName
		};

		const report = {
			participant: participantToSerializedParticipant(participant),
			metrics
		};

		// TODO notify user
		doPost(new URL('http://localhost/api/add-metrics'), report);

		qrCode = JSON.stringify(report);

		storedReports.set([...storedReports.get(), report]);
	}
</script>

<ParticipantSelector bind:participant />
<FieldSelector
	bind:points={startingPoint}
	field={field2023}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<CubeCone
	bind:selected={preload}
	name="Preloaded Game Piece"
	help="Game piece the robot stats the match with."
/>
<BooleanSelector
	bind:value={mobility}
	name="Mobility"
	help="The robot fully leaves the community during auto."
/>
<GridComponent
	bind:grid={autoScores}
	name="Auto Scores"
	help="Nodes where the robot scores during auto."
/>
<MultipleOptionSelector
	bind:selected={autoChargeStation}
	name="Auto Charge Station"
	help="Interaction between the robot and the charge station during auto."
	options={['None', 'Attempted', 'Dock', 'Engage']}
/>
<MultipleOptionSelector
	bind:selected={substationPreference}
	name="Substation Preference"
	help="The substation the robot most frequently uses during teleop."
	options={['Single Substation', 'Double Substation']}
/>
<GridComponent
	bind:grid={teleopScores}
	name="Teleop Scores"
	help="Nodes where the robot scores during teleop."
/>
<MultipleOptionSelector
	bind:selected={endgameChargeStation}
	name="Endgame Charge Station"
	help="Interaction between the robot and the charge station during endgame."
	options={['None', 'Attempted', 'Dock', 'Engage']}
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

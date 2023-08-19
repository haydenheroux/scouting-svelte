<script>
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	import FieldSelector from '$lib/FieldSelector.svelte';
	import Submit from '$lib/Submit.svelte';
	import MultipleOptionSelector from '$lib/MultipleOptionSelector.svelte';
	import BooleanSelector from '$lib/BooleanSelector.svelte';
	import PreloadedGamePiece from './CubeCone.svelte';
	import Grid from './Grid.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<FieldSelector field={field2023} title="Starting Position" single={true}/>
<PreloadedGamePiece title="Preloaded Game Piece" />
<BooleanSelector title="Mobility" />
<Grid title="Auto Scores" />
<MultipleOptionSelector title="Auto Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector title="Substation Preference" options={["Single Substation", "Double Substation"]} /> 
<Grid title="Teleop Scores" />
<MultipleOptionSelector title="Endgame Charge Station" options={["None", "Attempted", "Dock", "Engage"]} />
<MultipleOptionSelector title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Submit />
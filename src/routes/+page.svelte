<script lang="ts">
	import field2024 from '$lib/images/fields/2024.png';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { participantToSerializedParticipant } from '$lib/adapter';
	import Section from '$lib/components/Section.svelte';
	import { valuesOf } from '$lib/enum';
	import { Trap, Climb, Harmony, HighNotes, MatchMetrics } from '$lib/metrics';
	import type { Participant } from '$lib/participant';
	import { storedParticipant, storedReports } from '$lib/stores';

	// TODO Move to participant selector
	let participant: Participant = storedParticipant.get();

	let metrics: MatchMetrics = new MatchMetrics();

	let qrCode: string = '';

	function handleSubmit() {
		const report = {
			participant: participantToSerializedParticipant(participant),
			metrics: metrics.serialize()
		};

		qrCode = JSON.stringify(report);

		storedReports.set([...storedReports.get(), report]);
	}
</script>

<ParticipantSelector bind:participant />

<Section name="Starting Position" help="Place where the robot starts the match.">
	<FieldSelector bind:points={metrics.startingPoint} field={field2024} single={true} />
</Section>

<Section name="Leave" help="Did the robot fully leave the Wing during auto?">
	<BooleanSelector bind:value={metrics.leave} />
</Section>

<Section name="Coopertition" help="Did the alliance activate Coopertition?">
	<BooleanSelector bind:value={metrics.coopertition} />
</Section>

<Section name="Trap" help="How did the robot interact with the Trap?">
	<MultipleOptionSelector
		bind:selected={metrics.trap}
		options={valuesOf(Trap)}
		fallback={Trap.NONE}
	/>
</Section>

<Section name="Climb" help="How did the robot interact with the Stage?">
	<MultipleOptionSelector
		bind:selected={metrics.climb}
		options={valuesOf(Climb)}
		fallback={Climb.NONE}
	/>
</Section>

<Section name="Harmony" help="Did the robot activate the Harmony bonus?">
	<MultipleOptionSelector
		bind:selected={metrics.harmony}
		options={valuesOf(Harmony)}
		fallback={Harmony.ZERO}
	/>
</Section>

<Section name="High Notes" help="Did the team's human player score any High Notes?">
	<MultipleOptionSelector
		bind:selected={metrics.highNotes}
		options={valuesOf(HighNotes)}
		fallback={HighNotes.NONE}
	/>
</Section>

<Section name="Defense" help="Did the robot play defense?">
	<Notes bind:notes={metrics.defenseNotes} />
</Section>

<Section name="Driving" help="Was the robot being defended?">
	<Notes bind:notes={metrics.drivingNotes} />
</Section>

<Section name="Downtime" help="What did the robot do when they weren't scoring?">
	<Notes bind:notes={metrics.downtimeNotes} />
</Section>

<Section name="Other">
	<Notes bind:notes={metrics.otherNotes} />
</Section>

<Submit on:click={handleSubmit} bind:scouterName={metrics.scouterName} />

{#if qrCode.length > 0}
	<section>
		<QRCode value={qrCode} />
	</section>
{/if}

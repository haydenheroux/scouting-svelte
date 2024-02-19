<script lang="ts">
	import field2024 from '$lib/images/2024.png';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from '$lib/components/Section.svelte';
	import { valuesOf } from '$lib/enum';
	import { Trap, Climb, Harmony, HighNotes, MatchMetrics } from '$lib/metrics';
	import type { Participant } from '$lib/participant';
	import { storedParticipant, serializeAndStore } from '$lib/stores';
	import { DrawStyle } from '$lib/canvas';
	import type { TaggedPoint } from '$lib/point';

	// TODO Move to participant selector
	let participant: Participant = storedParticipant.get();

	let startingPoint: Array<TaggedPoint>;

	let pickupsMakesMisses: Array<TaggedPoint>;

	let metrics: MatchMetrics = new MatchMetrics();

	let qrCode: string = '';

	function handleSubmit() {
		metrics.startingPoint = [startingPoint[0].point];
		metrics.pickups = pickupsMakesMisses.filter((tp) => tp.tag === 'Pickup').map((tp) => tp.point);
		metrics.makes = pickupsMakesMisses.filter((tp) => tp.tag === 'Make').map((tp) => tp.point);
		metrics.misses = pickupsMakesMisses.filter((tp) => tp.tag === 'Miss').map((tp) => tp.point);

		const serialized = serializeAndStore(participant, metrics);

		qrCode = JSON.stringify(serialized);
	}
</script>

<ParticipantSelector bind:participant />

<Section name="Starting Position" help="Place where the robot starts the match.">
	<FieldSelector
		bind:points={startingPoint}
		tags={{ _: DrawStyle.DOT }}
		field={field2024}
		single={true}
	/>
</Section>

<Section name="Leave" help="Did the robot fully leave the Wing during auto?">
	<BooleanSelector bind:value={metrics.leave} />
</Section>

<Section name="Pickups, Makes, Misses">
	<FieldSelector
		bind:points={pickupsMakesMisses}
		field={field2024}
		tags={{ Pickup: DrawStyle.RING, Make: DrawStyle.TRIANGLE, Miss: DrawStyle.CROSS }}
	/>
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

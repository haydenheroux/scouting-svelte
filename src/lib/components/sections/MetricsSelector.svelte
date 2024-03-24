<script lang="ts">
	import field2024 from "$lib/images/2024.png";
	import FieldSelector from "$lib/components/selectors/FieldSelector.svelte";
	import MultipleOptionSelector from "$lib/components/selectors/OptionSelector.svelte";
	import BooleanSelector from "$lib/components/selectors/BooleanSelector.svelte";
	import Notes from "$lib/components/selectors/NotesComposer.svelte";
	import Section from "$lib/components/Section.svelte";
	import { Trap, Climb, Harmony, type Metrics } from "$lib/metrics";
	import ParticipantSelector from "$lib/components/selectors/ParticipantSelector.svelte";
	import NumberSelector from "$lib/components/selectors/NumberSelector.svelte";
	import { createMatchKey, defaultParticipant, driverStationOf, type Participant } from "$lib/api";

	let participant: Participant = defaultParticipant();

	export let metrics: Metrics;

    $: {
		metrics.match = createMatchKey(
			participant.event,
			participant.type,
			participant.set,
			participant.match
		);

		const driverStation = driverStationOf(participant.station);

		metrics.alliance = driverStation.alliance;
		metrics.station = driverStation.station;

		metrics.team = participant.team;
    }
</script>

<ParticipantSelector bind:participant />

<Section name="Starting Position" help="Place where the robot starts the match.">
	<FieldSelector bind:point={metrics.start} field={field2024} />
</Section>

<Section name="Autonomous Scoring">
	<NumberSelector name="Amp Makes" bind:value={metrics.autoAmpMakes} />
	<NumberSelector name="Amp Misses" bind:value={metrics.autoAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" bind:value={metrics.autoSpeakerMakes} />
	<NumberSelector name="Speaker Misses" bind:value={metrics.autoSpeakerMisses} />
</Section>

<Section name="Leave" help="Did the robot fully leave the Wing during auto?">
	<BooleanSelector bind:value={metrics.leave} />
</Section>

<Section name="Teleop Scoring">
	<NumberSelector name="Amp Makes" bind:value={metrics.teleopAmpMakes} />
	<NumberSelector name="Amp Misses" bind:value={metrics.teleopAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" bind:value={metrics.teleopSpeakerMakes} />
	<NumberSelector name="Speaker Misses" bind:value={metrics.teleopSpeakerMisses} />
</Section>

<Section name="Trap" help="How did the robot interact with the Trap?">
	<MultipleOptionSelector
		bind:selected={metrics.trap}
		options={[Trap.NONE, Trap.FAIL, Trap.SUCCESS]}
	/>
</Section>

<Section name="Climb" help="How did the robot interact with the Stage?">
	<MultipleOptionSelector
		bind:selected={metrics.climb}
		options={[Climb.NONE, Climb.FAIL, Climb.SUCCESS]}
	/>
</Section>

<Section name="Harmony" help="Did the robot activate the Harmony bonus?">
	<MultipleOptionSelector
		bind:selected={metrics.harmony}
		options={[Harmony.ZERO, Harmony.ONE, Harmony.TWO]}
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
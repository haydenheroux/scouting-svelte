<script lang="ts">
	import field2024 from "$lib/images/2024.png"
	import FieldSelector from "$lib/components/selectors/FieldSelector.svelte"
	import MultipleOptionSelector from "$lib/components/selectors/OptionSelector.svelte"
	import BooleanSelector from "$lib/components/selectors/BooleanSelector.svelte"
	import Notes from "$lib/components/selectors/NotesComposer.svelte"
	import Section from "$lib/components/Section.svelte"
	import { Trap, Climb, Harmony, type Metrics } from "$lib/metrics"
	import NumberSelector from "$lib/components/selectors/NumberSelector.svelte"
	import {
		driverStationOf,
		type Event,
		type MatchNumber,
		StationEnum,
		getEventByEventCode,
		driverStations,
		stringifyDriverStation,
		createQualificationMatchKey,
		getAllEventCodes
	} from "$lib/api"

	import EventSelector from "../selectors/EventSelector.svelte"

	export let readonly: boolean = false

	export let hideParticipant: boolean = false

	export let metrics: Metrics

	let match: MatchNumber = 1

	$: {
		metrics.match = createQualificationMatchKey(selectedEventCode, match)
	}

	let selectedEventCode: string | null = null

	function previousMatch() {
		if (readonly) return

		if (match > 1) match -= 1
	}

	function nextMatch() {
		if (readonly) return

		match += 1
	}

	let selectedStation: StationEnum = StationEnum.RED_1

	$: {
		const driverStation = driverStationOf(selectedStation)

		metrics.alliance = driverStation.alliance
		metrics.station = driverStation.station
	}
</script>

{#if !hideParticipant}
	<Section name="Select Event">
		<EventSelector {readonly} bind:selectedEventCode eventCodes={getAllEventCodes()} />
	</Section>

	<Section name="Select Match">
		<input type="number" min="1" {readonly} bind:value={match} />
		<div class="split">
			<button class="active" on:click={previousMatch}>Previous Match</button>
			<button class="active" on:click={nextMatch}>Next Match</button>
		</div>
	</Section>

	<Section name="Select Station">
		<select disabled={readonly} bind:value={selectedStation}>
			{#each driverStations as driverStation}
				<option value={driverStation}
					>{stringifyDriverStation(driverStationOf(driverStation))}</option
				>
			{/each}
		</select>
	</Section>

	<Section name="Select Team">
		<input type="number" min="0" {readonly} bind:value={metrics.team} />
	</Section>

	<hr/>
{/if}

<Section name="Starting Position">
	<FieldSelector {readonly} bind:point={metrics.start} field={field2024} />
</Section>

<Section name="Autonomous Scoring">
	<NumberSelector name="Amp Makes" {readonly} bind:value={metrics.autoAmpMakes} />
	<NumberSelector name="Amp Misses" {readonly} bind:value={metrics.autoAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" {readonly} bind:value={metrics.autoSpeakerMakes} />
	<NumberSelector name="Speaker Misses" {readonly} bind:value={metrics.autoSpeakerMisses} />
</Section>

<Section name="Leave">
	<BooleanSelector {readonly} bind:value={metrics.leave} />
</Section>

<Section name="Teleop Scoring">
	<NumberSelector name="Amp Makes" {readonly} bind:value={metrics.teleopAmpMakes} />
	<NumberSelector name="Amp Misses" {readonly} bind:value={metrics.teleopAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" {readonly} bind:value={metrics.teleopSpeakerMakes} />
	<NumberSelector name="Speaker Misses" {readonly} bind:value={metrics.teleopSpeakerMisses} />
</Section>

<Section name="Trap">
	<MultipleOptionSelector
		bind:selected={metrics.trap}
		options={[Trap.NONE, Trap.FAIL, Trap.SUCCESS]}
		{readonly}
	/>
</Section>

<Section name="Climb">
	<MultipleOptionSelector
		bind:selected={metrics.climb}
		options={[Climb.NONE, Climb.FAIL, Climb.SUCCESS]}
		{readonly}
	/>
</Section>

<Section name="Harmony">
	<MultipleOptionSelector
		bind:selected={metrics.harmony}
		options={[Harmony.ZERO, Harmony.ONE, Harmony.TWO]}
		{readonly}
	/>
</Section>

<Section name="Notes">
	<Notes {readonly} bind:notes={metrics.notes} />
</Section>

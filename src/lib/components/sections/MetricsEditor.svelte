<script lang="ts">
	import field2024 from "$lib/images/2024.png";
	import FieldSelector from "$lib/components/selectors/FieldSelector.svelte";
	import MultipleOptionSelector from "$lib/components/selectors/OptionSelector.svelte";
	import BooleanSelector from "$lib/components/selectors/BooleanSelector.svelte";
	import Notes from "$lib/components/selectors/NotesComposer.svelte";
	import Section from "$lib/components/Section.svelte";
	import { Trap, Climb, Harmony, type Metrics } from "$lib/metrics";
	import NumberSelector from "$lib/components/selectors/NumberSelector.svelte";
	import { driverStationOf, type Event, StationEnum, getEventByEventCode, driverStations, stringifyDriverStation, createQualificationMatchKey } from "$lib/api";
	import { storedEvents } from "$lib/stores";
	import EventSelector from "../selectors/EventSelector.svelte";

	export let metrics: Metrics;

	let event: Event | null;
	let match: number = 1;

	$: {
		metrics.match = createQualificationMatchKey(
			event,
			match
		);
	}

	let selectedEventCode: string | null = null;

	$: {
		if (selectedEventCode == null) {
			event = null;
		} else {
			event = getEventByEventCode(selectedEventCode);
		}
	}

	function previousMatch() {
		if (match > 1) match -= 1;
	}

	function nextMatch() {
		match += 1;
	}

	let selectedStation: StationEnum = StationEnum.RED_1;

	$: {
		const driverStation = driverStationOf(selectedStation);

		metrics.alliance = driverStation.alliance;
		metrics.station = driverStation.station;
	}
</script>

<Section name="Select Event">
	<EventSelector
		bind:selectedEventCode
		eventCodes={storedEvents.get().map((event) => event.code)}
	/>
</Section>

<Section name="Select Match">
	<input type="number" min="1" bind:value={match} />
	<div class="split">
		<button class="active" on:click={previousMatch}>Previous Match</button>
		<button class="active" on:click={nextMatch}>Next Match</button>
	</div>
</Section>

<Section name="Select Station">
	<select bind:value={selectedStation}>
		{#each driverStations as driverStation}
			<option value={driverStation}>{stringifyDriverStation(driverStationOf(driverStation))}</option
			>
		{/each}
	</select>
</Section>

<Section name="Select Team">
	<input type="number" min="0" bind:value={metrics.team} />
</Section>

<Section name="Starting Position">
	<FieldSelector bind:point={metrics.start} field={field2024} />
</Section>

<Section name="Autonomous Scoring">
	<NumberSelector name="Amp Makes" bind:value={metrics.autoAmpMakes} />
	<NumberSelector name="Amp Misses" bind:value={metrics.autoAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" bind:value={metrics.autoSpeakerMakes} />
	<NumberSelector name="Speaker Misses" bind:value={metrics.autoSpeakerMisses} />
</Section>

<Section name="Leave">
	<BooleanSelector bind:value={metrics.leave} />
</Section>

<Section name="Teleop Scoring">
	<NumberSelector name="Amp Makes" bind:value={metrics.teleopAmpMakes} />
	<NumberSelector name="Amp Misses" bind:value={metrics.teleopAmpMisses} />
	<hr />
	<NumberSelector name="Speaker Makes" bind:value={metrics.teleopSpeakerMakes} />
	<NumberSelector name="Speaker Misses" bind:value={metrics.teleopSpeakerMisses} />
</Section>

<Section name="Trap">
	<MultipleOptionSelector
		bind:selected={metrics.trap}
		options={[Trap.NONE, Trap.FAIL, Trap.SUCCESS]}
	/>
</Section>

<Section name="Climb">
	<MultipleOptionSelector
		bind:selected={metrics.climb}
		options={[Climb.NONE, Climb.FAIL, Climb.SUCCESS]}
	/>
</Section>

<Section name="Harmony">
	<MultipleOptionSelector
		bind:selected={metrics.harmony}
		options={[Harmony.ZERO, Harmony.ONE, Harmony.TWO]}
	/>
</Section>

<Section name="Notes">
	<Notes bind:notes={metrics.notes} />
</Section>

<script lang="ts">
	import {
		DriverStation,
		MatchKey,
		MatchType,
		Event,
		StationEnum,
		driverStations,
		type Participant
	} from '$lib/api';
	import Section from '$lib/components/Section.svelte';
	import { valuesOf } from '$lib/enum';

	let formData: FormData = getDefaultFormData();

	export let participant: Participant = transform(formData);

	function transform(selected: FormData): Participant {
		return {
			match: new MatchKey(selected.event, selected.type, selected.set, selected.match),
			driverStation: DriverStation.of(selected.station),
			team: selected.team
		};
	}

	type FormData = {
		event: Event | null;
		type: MatchType;
		set: number;
		match: number;
		station: StationEnum;
		team: number | null;
	};

	// TODO
	function getDefaultFormData(): FormData {
		return {
			event: getDefaultEvent(),
			type: MatchType.QUALIFICATION,
			set: 1,
			match: 1,
			station: StationEnum.RED_1,
			team: null
		};
	}

	$: {
		participant = transform(formData);
	}

	// TODO
	function getStoredEvents(): Event[] {
		return [new Event('2024necmp', 'New England FIRST District Championship 2024')];
	}

	function getDefaultEvent(): Event | null {
		return null;
	}

	function clearEvent() {
		formData.event = getDefaultEvent();
	}

	function previousMatch() {
		if (formData.match > 1) formData.match -= 1;
	}

	function nextMatch() {
		formData.match += 1;
	}
</script>

<Section name="Select Event">
	<select bind:value={formData.event}>
		{#each getStoredEvents() as event}
			{#if event.name}
				<option value={event}>{event.name}</option>
			{:else}
				<option value={event}>{event.code}</option>
			{/if}
		{/each}
	</select>
	<button class="active" on:click={clearEvent}>Clear</button>
</Section>

<Section name="Select Match">
	<div>
		<!-- TODO qualification only option? -->
		<label for="type">Type</label>
		<select id="type" bind:value={formData.type}>
			{#each valuesOf(MatchType) as matchType}
				<option value={matchType}>{matchType}</option>
			{/each}
		</select>
	</div>
	<div class="split">
		{#if formData.type != 'Qualification'}
			<div>
				<label for="set">Set</label>
				<input id="set" type="number" min="1" bind:value={formData.set} />
			</div>
		{/if}
		<div>
			<label for="match">Match</label>
			<input id="match" type="number" min="1" bind:value={formData.match} />
		</div>
	</div>
	<div class="split">
		<button class="active" on:click={previousMatch}>Previous Match</button>
		<button class="active" on:click={nextMatch}>Next Match</button>
	</div>
</Section>

<Section name="Select Station">
	<select bind:value={formData.station}>
		{#each driverStations as driverStation}
			<option value={driverStation}>{DriverStation.of(driverStation).toString()}</option>
		{/each}
	</select>
</Section>

<Section name="Select Team">
	<input type="number" min="0" bind:value={formData.team} />
</Section>

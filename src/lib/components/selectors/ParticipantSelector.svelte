<script lang="ts">
	import {
		driverStationOf,
		MatchType,
		driverStations,
		stringifyDriverStation,
		type Participant,
		defaultParticipant
	} from "$lib/api";
	import Section from "$lib/components/Section.svelte";
	import { storedEvents } from "$lib/stores";
	import EventSelector from "./EventSelector.svelte";

	export let participant: Participant = defaultParticipant();

	function previousMatch() {
		if (participant.match > 1) participant.match -= 1;
	}

	function nextMatch() {
		participant.match += 1;
	}
</script>

<Section name="Select Event">
	<EventSelector bind:event={participant.event} events={storedEvents.get()} />
</Section>

<Section name="Select Match">
	<div>
		<label for="type">Type</label>
		<select id="type" bind:value={participant.type}>
			{#each [MatchType.QUALIFICATION] as matchType}
				<option value={matchType}>{matchType}</option>
			{/each}
		</select>
	</div>
	<div class="split">
		{#if participant.type != MatchType.QUALIFICATION}
			<div>
				<label for="set">Set</label>
				<input id="set" type="number" min="1" bind:value={participant.set} />
			</div>
		{/if}
		<div>
			<label for="match">Match</label>
			<input id="match" type="number" min="1" bind:value={participant.match} />
		</div>
	</div>
	<div class="split">
		<button class="active" on:click={previousMatch}>Previous Match</button>
		<button class="active" on:click={nextMatch}>Next Match</button>
	</div>
</Section>

<Section name="Select Station">
	<select bind:value={participant.station}>
		{#each driverStations as driverStation}
			<option value={driverStation}>{stringifyDriverStation(driverStationOf(driverStation))}</option
			>
		{/each}
	</select>
</Section>

<Section name="Select Team">
	<input type="number" min="0" bind:value={participant.team} />
</Section>

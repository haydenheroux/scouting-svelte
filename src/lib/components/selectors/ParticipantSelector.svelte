<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { valuesOf } from '$lib/enum';
	import { type Participant, Alliance, Station, MatchType } from '$lib/participant';
	import { storedParticipant } from '$lib/stores';
	import NumberSelector from './NumberSelector.svelte';

	export let participant: Participant;

	$: {
		updateStoredParticipant(participant);
	}

	/**
	 * Updates the stored participant.
	 */
	function updateStoredParticipant(participant: Participant) {
		storedParticipant.set(participant);
	}

	/**
	 * Sets the participant to the previous match.
	 */
	function previousMatch() {
		if (participant.match > 1) participant.match -= 1;
	}

	/**
	 * Sets the participant to the next match.
	 */
	function nextMatch() {
		participant.match += 1;
	}
</script>

<Section name="Select Match">
	<div>
		<div class="split">
			<div>
				<label for="type">Type</label>
				<select id="type" bind:value={participant.type}>
					{#each valuesOf(MatchType) as matchType}
						<option value={matchType}>{matchType}</option>
					{/each}
				</select>
			</div>
			{#if participant.type != 'Qualification'}
				<div>
					<label for="set">Set</label>
					<input id="set" type="number" placeholder="1" min="1" bind:value={participant.set} />
				</div>
			{/if}
			<div>
				<label for="match">Match</label>
				<input id="match" type="number" placeholder="1" min="1" bind:value={participant.match} />
			</div>
		</div>
	</div>
	<div class="split">
		<button class="active" on:click={previousMatch}>Previous Match</button>
		<button class="active" on:click={nextMatch}>Next Match</button>
	</div>
</Section>

<Section name="Select Station">
	<div class="split">
		<button
			on:click={() => (participant.alliance = Alliance.BLUE)}
			class:blue={participant.alliance == Alliance.BLUE}>Blue Alliance</button
		>
		<button
			on:click={() => (participant.alliance = Alliance.RED)}
			class:red={participant.alliance == Alliance.RED}>Red Alliance</button
		>
	</div>
	<div class="split">
		<button
			on:click={() => (participant.station = Station.ONE)}
			class:active={participant.station == Station.ONE}>1</button
		>
		<button
			on:click={() => (participant.station = Station.TWO)}
			class:active={participant.station == Station.TWO}>2</button
		>
		<button
			on:click={() => (participant.station = Station.THREE)}
			class:active={participant.station == Station.THREE}>3</button
		>
	</div>
</Section>

<Section name="Select Team">
	<NumberSelector bind:value={participant.team} />
</Section>

<style>
	.red,
	.blue {
		color: var(--clr-foreground);
	}

	.red {
		background-color: var(--clr-red);

		border-color: var(--clr-red);
	}

	.blue {
		background-color: var(--clr-blue);

		border-color: var(--clr-blue);
	}
</style>

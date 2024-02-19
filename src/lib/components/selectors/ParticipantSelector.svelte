<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import type { Participant } from '$lib/types/Participant';
	import { Alliance, MatchType, Station } from '$lib/types/Participant';
	import { valuesOf } from '$lib/util/enum';

	// TODO Attempt to get stored participant
	export let participant: Participant = {
		type: MatchType.QUALIFICATION,
		set: 0,
		match: 1,
		alliance: Alliance.BLUE,
		station: Station.ONE
	} as Participant;

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

<Section name="Select Match">
	<div>
		<div class="split">
			<div>
				<label for="type">Type</label>
				<select id="type" bind:value={participant.type}>
					<option value="Qualification">Qualification</option>
					<option value="Quarterfinal">Quarterfinal</option>
					<option value="Semifinal">Semifinal</option>
					<option value="Final">Final</option>
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

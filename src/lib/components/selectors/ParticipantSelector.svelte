<script lang="ts">
	import { participantToSerializedParticipant } from '$lib/adapter';
	import { getMatchCode } from '$lib/api/Serialized';
	import Section from '$lib/components/Section.svelte';
	import { getTeamAndAllianceOrNull, storedParticipant } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';

    // Defaults the participant to the stored participant. Attempts to autofill.
    export let participant = attemptAutofillTeamAndAlliance(storedParticipant.get(), true);

    // Whenever the participant is updated, attempt to autofill, then store the updated participant.
    $: participant, attemptAutofillTeamAndAllianceThenStore();

    // Allows the user to manually override autofilling.
    let manuallyOverriding: boolean = false;

    // Whenever the manual override is changed, attempt to autofill, then store the updated participant.
    $: manuallyOverriding, attemptAutofillTeamAndAllianceThenStore();

    /**
     * Attempts to automatically set a participant's team and alliance fields depending on the participant's event and match fields.
     * 
     * Mutates the provided participant.
     * 
     * @param participant The participant to mutate.
     * @param manual If true, then the participant is not mutated.
     * @returns The participant with mutated team and alliance fields. 
     */
    function attemptAutofillTeamAndAlliance(participant: Participant, manual: boolean): Participant {
        if (manual) return participant;

        const event = participant.event;
        const match = getMatchCode(participantToSerializedParticipant(participant));
        
        const teamAndAllianceOrNull = getTeamAndAllianceOrNull(event, match);

        // TODO Null team and alliance if not in schedule?
        if (teamAndAllianceOrNull == null) return participant;

        participant.team = teamAndAllianceOrNull.team;
        participant.alliance = serializedAllianceToSerialAlliance(teamAndAllianceOrNull.alliance);

        return participant;
    }

    /**
     * Attempts to autofill the participant then stores.
     * 
     * @see attemptAutofillTeamAndAlliance
     */
    function attemptAutofillTeamAndAllianceThenStore() {
        participant = attemptAutofillTeamAndAlliance(participant, manuallyOverriding);

        storedParticipant.set(participant);
    }

    /**
     * Sets the participant to the previous match.
     * 
     * Guards against invalid matches.
     * Attemps to autofill the participant.
     */
    function previousMatch() {
        if (participant.match > 1) participant.match -= 1;

        participant = attemptAutofillTeamAndAlliance(participant, manuallyOverriding);
    }

    /**
     * Sets the participant to the next match.
     * 
     * Guards against invalid matches.
     * Attemps to autofill the participant.
     */
    function nextMatch() {
        participant.match += 1;

        participant = attemptAutofillTeamAndAlliance(participant, manuallyOverriding);
    }


	function serializedAllianceToSerialAlliance(alliance: string): import("$lib/types/Participant").Alliance | null {
		throw new Error('Function not implemented.');
	}
</script>

<Section name="Select Event">
    <div>
        <label for="event">Event Code</label>
        <input id="event" type="text" placeholder="2023mawne" bind:value={participant.event}>
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
                </select>
            </div>
            {#if participant.type != "Qualification"}
                <div>
                    <label for="set">Set</label>
                    <input id="set" type="number" placeholder="1" min="1" bind:value={participant.set}>
                </div>
            {/if}
            <div>
                <label for="match">Match</label>
                <input id="match" type="number" placeholder="1" min="1" bind:value={participant.match}>
            </div>
        </div>
    </div>
    <div class="split">
        <button class="active" on:click={previousMatch}>Previous Match</button>
        <button class="active" on:click={nextMatch}>Next Match</button>
    </div>
</Section>

<Section name="Select Team">
    <div>
        <label for="team">Team</label>
        <input id="team" type="number" placeholder="5112" bind:value={participant.team}>
    </div>
    <div class="split">
        <button on:click={() => participant.alliance = "Red"} class:red={participant.alliance == "Red"}>Red Alliance</button>
        <button on:click={() => participant.alliance = "Blue"} class:blue={participant.alliance == "Blue"}>Blue Alliance</button>
    </div>
    <button on:click={() => manuallyOverriding = !manuallyOverriding} class:active={manuallyOverriding}>Manual Override</button>
</Section>

<style>
.red, .blue {
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
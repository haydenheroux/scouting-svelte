<script lang="ts">
	import Section from '../Section.svelte';
	import { getTeamAndAllianceOrNull, participantStore } from '$lib/stores';
	import { serialize, type Participant } from '$lib/types/Participant';
	import { deserializeAlliance, getMatchCode } from '$lib/types/Serialized';

    export let participant = autofill(participantStore.get());

    $: participant, autofillAndStore();

    function previousMatch() {
        const storedParticipant = participantStore.get();

        if (storedParticipant.match > 1) storedParticipant.match -= 1;

        participant = autofill(storedParticipant);
    }

    function nextMatch() {
        const storedParticipant = participantStore.get();

        storedParticipant.match += 1;

        participant = autofill(storedParticipant);
    }

    function autofill(participant: Participant): Participant {
        const eventCode = participant.event;
        const matchCode = getMatchCode(serialize(participant));
        
        const teamAndAllianceOrNull = getTeamAndAllianceOrNull(eventCode, matchCode);

        if (teamAndAllianceOrNull == null) return participant;

        participant.team = teamAndAllianceOrNull.team;
        participant.alliance = deserializeAlliance(teamAndAllianceOrNull.alliance);

        return participant;
    }

    function autofillAndStore() {
        participant = autofill(participant);

        participantStore.set(participant);
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
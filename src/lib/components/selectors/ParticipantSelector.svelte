<script lang="ts">
	import Section from '../Section.svelte';
	import { globalParticipant, schedule } from '$lib/stores';
	import { serialize, type Participant } from '$lib/types/Participant';
	import { deserializeAlliance, getMatchCode } from '$lib/types/Serialized';

    export let participant = globalParticipant.get();

    $: participant && globalParticipant.set(participant);

    globalParticipant.subscribe(value => participant = value);

    function previousMatch() {
        const participant = globalParticipant.get();
        if (participant.matchNumber > 1) participant.matchNumber -= 1;

        updateParticipant(participant);
    }

    function nextMatch() {
        const participant = globalParticipant.get();
        participant.matchNumber += 1;

        updateParticipant(participant);
    }

    function updateParticipant(participant: Participant) {
        const matchCode = getMatchCode(serialize(participant));
        
        const teamNumberAndAllianceOrNull = schedule.get()[matchCode] ?? null;

        if (teamNumberAndAllianceOrNull != null) {
            participant.teamNumber = teamNumberAndAllianceOrNull.teamNumber;
            participant.alliance = deserializeAlliance(teamNumberAndAllianceOrNull.alliance);
        }

        globalParticipant.set(participant);
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
                <select id="type" bind:value={participant.matchType}>
                    <option value="Qualification">Qualification</option>
                    <option value="Quarterfinal">Quarterfinal</option>
                    <option value="Semifinal">Semifinal</option>
                    <option value="Final">Final</option>
                </select>
            </div>
            {#if participant.matchType != "Qualification"}
                <div>
                    <label for="set">Set</label>
                    <input id="set" type="number" placeholder="1" min="1" bind:value={participant.setNumber}>
                </div>
            {/if}
            <div>
                <label for="match">Match</label>
                <input id="match" type="number" placeholder="1" min="1" bind:value={participant.matchNumber}>
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
        <input id="team" type="number" placeholder="5112" bind:value={participant.teamNumber}>
    </div>
    <div class="split">
        <button on:click={() => participant.alliance = "Red"} class:red={participant.alliance == "Red"}>Red Alliance</button>
        <button on:click={() => participant.alliance = "Blue"} class:blue={participant.alliance == "Blue"}>Blue Alliance</button>
    </div>
</Section>

<style>
.red {
    background-color: var(--clr-red);
    color: var(--clr-neutral-800);
}

.blue {
    background-color: var(--clr-blue);
    color: var(--clr-neutral-800);
}
</style>
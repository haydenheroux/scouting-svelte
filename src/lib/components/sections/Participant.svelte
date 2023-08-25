<script lang="ts">
	import Section from '../Section.svelte';
	import type { Participant } from "$lib/types/Participant";

    export let participant: Participant = {
        event: "",
        matchType: "Qualification",
        setNumber: 1,
        matchNumber: 1,
        teamNumber: 1,
        alliance: "Red",
    }
</script>

<Section name="Select Participant">
    <div>
        <label for="event">Event Code</label>
        <input id="event" type="text" placeholder="2023mawne" bind:value={participant.event}>
    </div>
    <div>
        <div class="split">
            <div>
                <label for="type">Type</label>
                <select bind:value={participant.matchType}>
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
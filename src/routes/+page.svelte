<script lang="ts">
    import Section from '$lib/components/Section.svelte';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import { globalParticipant, schedule } from '$lib/stores';
	import { serialize, type Participant } from '$lib/types/Participant';
	import { toMatchCode } from '$lib/types/Serialized';

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
        const matchCode = toMatchCode(serialize(participant));
        
        const newTeamNumber = schedule.get()[matchCode];
        participant.teamNumber = newTeamNumber === undefined ? 1000 : newTeamNumber;

        globalParticipant.set(participant);
    }
</script>

<ParticipantSelector />
<Section name="Matches">
    <button class="active" on:click={previousMatch}>Previous Match</button>
    <button class="active" on:click={nextMatch}>Next Match</button>
</Section>
<script lang="ts">
	import QRCode  from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from "$lib/components/Section.svelte";
    import { storedMatches } from "$lib/stores";
	import { getMatchCode } from '$lib/api/Serialized';

    let matches = storedMatches.get();
</script>

{#each matches as match}
    <Section name={`${match.participant.event} ${getMatchCode(match.participant)} - Team ${match.participant.teamNumber}`}>
        <QRCode showable={true} value={JSON.stringify(match)}/>
    </Section>
{/each}
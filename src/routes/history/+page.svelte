<script lang="ts">
	import QRCodeDisplay from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from "$lib/components/Section.svelte";
    import { storedMatches } from "$lib/data/stores";
	import { getMatchCode } from '$lib/api';

    let matches = storedMatches.get();
</script>

{#each matches as match}
    <Section name={`${match.participant.event} ${getMatchCode(match.participant)} - Team ${match.participant.teamNumber}`}>
        <QRCodeDisplay showable={true} value={JSON.stringify(match)}/>
    </Section>
{/each}
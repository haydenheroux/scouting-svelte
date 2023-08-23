<script lang="ts">
	import QRCode  from '$lib/components/sections/QRCode.svelte';
	import Section from "$lib/components/Section.svelte";
    import { scoutedMatches } from "$lib/stores/stores";
	import { toMatchCode } from "$lib/types/Serial";

    let matches = scoutedMatches.get();
</script>

{#each matches as match}
<Section name={`${match.participantQuery.event} ${toMatchCode(match.participantQuery)} - Team ${match.participantQuery.teamNumber}`}>
    <QRCode value={JSON.stringify(match)}/>
</Section>
{/each}
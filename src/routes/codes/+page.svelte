<script lang="ts">
	import QRCode  from '$lib/components/sections/QRCodeDisplay.svelte';
	import Section from "$lib/components/Section.svelte";
    import { scoutedMatches } from "$lib/stores";
	import { getString } from "$lib/types/Serialized";

    let matches = scoutedMatches.get();
</script>

{#each matches as match}
    <Section name={getString(match.participant)}>
        <QRCode showable={true} value={JSON.stringify(match)}/>
    </Section>
{/each}
<script lang="ts">
	import QRCode  from '$lib/components/QRCode.svelte';
	import Metric from "$lib/components/Metric.svelte";
    import { scoutedMatches } from "$lib/stores/stores";
	import { toMatchCode } from "$lib/types/Serial";

    let matches = scoutedMatches.get();
</script>

{#each matches as match}
<Metric name={`${match.participantQuery.event} ${toMatchCode(match.participantQuery)} - Team ${match.participantQuery.teamNumber}`}>
    <QRCode value={JSON.stringify(match)}/>
</Metric>
{/each}
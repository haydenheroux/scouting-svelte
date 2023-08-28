<script lang="ts">
	import Schedule from "$lib/components/sections/Schedule.svelte";
    import ScheduleGetter from "$lib/components/sections/ScheduleGetter.svelte";
	import { schedulesStore, schedulesPresent } from "$lib/stores";

    let hasSchedules = false;

    // TODO Reactivity seems to break here?
    schedulesStore.subscribe(_ => hasSchedules = schedulesPresent());
</script>

{#if hasSchedules}
    <Schedule />
{:else}
    <ScheduleGetter />
{/if}
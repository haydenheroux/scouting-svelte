<script lang="ts">
	import Schedule from "$lib/components/sections/Schedule.svelte";
    import ScheduleGetter from "$lib/components/sections/ScheduleGetter.svelte";
	import { schedule, type MatchSchedule } from "$lib/stores";

    let hasSchedule = false;

    schedule.subscribe(value => hasSchedule = scheduleHasMatches(value));

    function scheduleHasMatches(schedule: MatchSchedule): boolean {
        return Object.keys(schedule).length > 0;
    }
</script>

{#if hasSchedule}
    <Schedule />
{:else}
    <ScheduleGetter />
{/if}
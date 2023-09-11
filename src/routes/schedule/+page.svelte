<script lang="ts">
	import Schedule from '$lib/components/sections/Schedule.svelte';
	import ScheduleGetter from '$lib/components/sections/ScheduleGetter.svelte';
	import { storedSchedules, type EventSchedules } from '$lib/data/stores';

	let hasSchedules = false;

	// TODO Reactivity seems to break here?
	storedSchedules.subscribe((schedules) => (hasSchedules = scheduleHasMatches(schedules)));

	function scheduleHasMatches(schedule: EventSchedules): boolean {
		return Object.keys(schedule).length > 0;
	}
</script>

{#if hasSchedules}
	<Schedule />
{:else}
	<ScheduleGetter />
{/if}

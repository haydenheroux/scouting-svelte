<script lang="ts">
	import { getEventByEventCode, type Event, type TBAEventCode } from "$lib/api";

	export let selectedEventCode: TBAEventCode | null;

	export let eventCodes: Array<TBAEventCode>;
</script>

<select bind:value={selectedEventCode}>
	{#each eventCodes as eventCode}
		{@const event = getEventByEventCode(eventCode)}
		{#if event && event.name.length > 0}
			<option value={eventCode}>{event.name}</option>
		{:else if eventCode }
			<option value={eventCode}>{eventCode}</option>
		{/if}
	{/each}
	<option>Unknown Event</option>
</select>

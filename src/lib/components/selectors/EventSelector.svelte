<script lang="ts">
	import { getEventByEventCode, type TBAEventCode } from "$lib/api"
	import { onMount } from "svelte"

	export let readonly: boolean = false

	export let eventCodes: Array<TBAEventCode | null>

	export let selectedEventCode: TBAEventCode | null

	onMount(() => {
		if (eventCodes.length > 0) {
			selectedEventCode = eventCodes[0]
		} else {
			selectedEventCode = null
		}
	})
</script>

<select disabled={readonly} bind:value={selectedEventCode}>
	{#each eventCodes as eventCode}
		{#if eventCode}
			{@const event = getEventByEventCode(eventCode)}
			{#if event && event.name && event.name.length > 0}
				<option value={eventCode}>{event.name}</option>
			{:else if eventCode}
				<option value={eventCode}>{eventCode}</option>
			{/if}
		{:else}
			<option value={null}>Unknown Event</option>
		{/if}
	{/each}
</select>

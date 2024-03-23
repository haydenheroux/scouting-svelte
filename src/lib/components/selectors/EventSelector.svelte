<script lang="ts">
	import { storedEvents } from "$lib/stores";
	import type { Event } from "$lib/api";

	export let event: Event | null;
</script>

<select bind:value={event}>
	{#each storedEvents.get() as event}
		{#if event.name}
			<option value={event}>{event.name}</option>
		{:else}
			<option value={event}>{event.code}</option>
		{/if}
	{/each}
</select>

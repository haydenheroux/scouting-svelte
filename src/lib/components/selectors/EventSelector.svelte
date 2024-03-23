<script lang="ts">
	import type { Event } from "$lib/api";

	export let event: Event | null;

	export let events: Array<Event>;
</script>

<select bind:value={event}>
	{#each events as event}
		{#if event.name}
			<option value={event}>{event.name}</option>
		{:else}
			<option value={event}>{event.code}</option>
		{/if}
	{/each}
</select>

<script lang="ts">
	import { createEvent as createAndStoreEvent } from "$lib/api"
	import { storeEvent } from "$lib/stores"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	let eventCode: string
	let eventName: string

	function createEvent() {
		if (eventCode.length == 0) {
			return
		}

		const newEvent = createAndStoreEvent(eventCode, eventName)

		storeEvent(newEvent)

		eventCode = ""
		eventName = ""

		dispatch("create")
	}
</script>

<label for="eventCode">Event Code</label>
<input id="eventCode" type="text" bind:value={eventCode} />

<label for="eventName">Event Name</label>
<input id="eventName" type="text" bind:value={eventName} />

<button class="primary" on:click={createEvent}>Create Event</button>

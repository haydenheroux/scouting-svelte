<script lang="ts">
	export let notes: Array<string> = []

	export let readonly: boolean = false

	function add() {
		if (readonly) return

		notes = ["", ...notes]
	}

	function remove(index: number) {
		if (readonly) return

		notes.splice(index, 1)
		notes = notes
	}
</script>

<div>
	<input type="text" {readonly} bind:value={notes[0]} />
	{#if !readonly}
		<button class="primary" on:click={add}>
			<span class="material-symbols-rounded">done</span>
		</button>
	{/if}
</div>
{#each notes.slice(1) as note, index}
	<div>
		<input class="inactive" type="text" bind:value={note} />
		{#if !readonly}
			<button class="primary" on:click={() => remove(index + 1)}>
				<span class="material-symbols-rounded">close</span>
			</button>
		{/if}
	</div>
{/each}

<style>
	div {
		display: flex;
		flex-direction: row;

		gap: var(--section-gap);
	}

	.inactive {
		color: var(--clr-neutral-300);
	}

	button {
		height: var(--section-input-height);
		width: var(--section-input-height);
	}
</style>

<script lang="ts">
	export let value = 0;

	export let name = "";

	export let readonly: boolean = false;

	function minus() {
		if (readonly) return;

		if (value > 0) value--;
	}

	function plus() {
		if (readonly) return;

		value++;
	}
</script>

<div>
	{#if name.length > 0}
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{name}</label>
	{/if}
	<div class="split">
		<button class="primary" on:click={minus}
			><span class="material-symbols-rounded">remove</span></button
		>
		<input type="number" min="0" {readonly} bind:value />
		<button class="primary" on:click={plus}>
			<span class="material-symbols-rounded"> add </span>
		</button>
	</div>
</div>

<style>
	div.split {
		display: flex;
		flex-direction: row;

		gap: var(--section-gap);
	}

	button {
		height: var(--section-input-height);
		width: var(--section-input-height);
	}
</style>

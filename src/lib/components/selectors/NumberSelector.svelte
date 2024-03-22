<script lang="ts">
	export let value = 0;

	export let name = "";

	function minus() {
		if (value > 0) value--;
	}

	function plus() {
		value++;
	}
</script>

<div>
	{#if name.length > 0}
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{name}</label>
	{/if}
	<div class="split">
		<button class="primary minus" on:click={minus}>-</button>
		<input type="number" min="0" bind:value />
		<button class="primary plus" on:click={plus}>+</button>
	</div>
</div>

<style>
	div.split {
		display: flex;
		flex-direction: row;

		gap: var(--section-gap);
	}

	.minus,
	.plus {
		font-size: var(--fs-300);
		font-weight: var(--fw-main);

		width: 2.5rem;
	}
</style>

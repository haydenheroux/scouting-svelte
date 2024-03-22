<script lang="ts">
	let showing = false;

	export let subject = "";
</script>

<div class="vertical">
	<button class="active" on:click={() => (showing = !showing)}
		>{showing ? `Hide ${subject}` : `Show ${subject}`}</button
	>
	{#if showing}
		<slot />
	{/if}
</div>

<style>
	.vertical {
		display: flex;
		flex-direction: column;
		gap: var(--layout-gap);
	}
</style>

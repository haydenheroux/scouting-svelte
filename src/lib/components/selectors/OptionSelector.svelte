<script lang="ts">
	export let options: Array<string>;
	export let selected: string;

	export let readonly: boolean = false;
</script>

<div class="split">
	{#each options as option}
		<button
			on:click={() => {
				if (readonly) return;

				selected = option;
			}}
			class:active={selected == option}>{option}</button
		>
	{/each}
</div>

<script lang="ts">
	export let options: Array<string>;
	export let fallback: string;
	export let selected: string;
</script>

<div class="split">
	{#each options as option}
		<button
			on:click={() => (selected = selected != option ? option : fallback)}
			class:active={selected == option}>{option}</button
		>
	{/each}
</div>

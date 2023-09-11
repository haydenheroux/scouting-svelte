<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	export let name: string;
	export let help: string;

	export let value = false;

	export let negative = 'No';
	export let positive = 'Yes';
</script>

<Section {name} {help}>
	<div class="split">
		<button on:click={() => (value = false)} class:active={value === false}>{negative}</button>
		<button on:click={() => (value = true)} class:active={value}>{positive}</button>
	</div>
</Section>

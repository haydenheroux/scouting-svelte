<script lang="ts">
	import Section from '../Section.svelte';

	export let scouterName = '';
</script>

<Section name="Submit">
	<div>
		<label for="scouter">Scouter Name</label>
		<input id="scouter" type="text" bind:value={scouterName} />
	</div>
	<button class="primary" on:click>Generate QR Code</button>
</Section>
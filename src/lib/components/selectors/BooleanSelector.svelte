<script lang="ts">
	export let value = false;

	export let negative = "No";
	export let positive = "Yes";
</script>

<div class="split">
	<button on:click={() => (value = false)} class:active={value === false}>{negative}</button>
	<button on:click={() => (value = true)} class:active={value}>{positive}</button>
</div>

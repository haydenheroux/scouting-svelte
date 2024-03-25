<script lang="ts">
	export let value = false;

	export let negative = "No";
	export let positive = "Yes";

	export let readonly: boolean = false;
</script>

<div class="split">
	<button
		on:click={() => {
			if (readonly) return;

			value = false;
		}}
		class:active={value === false}>{negative}</button
	>
	<button
		on:click={() => {
			if (readonly) return;

			value = true;
		}}
		class:active={value}>{positive}</button
	>
</div>

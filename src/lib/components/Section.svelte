<script lang="ts">
	export let name: string
</script>

<section>
	<div class="header">
		<h2>{name}</h2>
	</div>
	<slot />
</section>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
</style>

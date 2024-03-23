<script lang="ts">
	export let name: string;
	export let help = "";

	const showHelp = false;
</script>

<section>
	<div class="header">
		<h2>{name}</h2>
		{#if help.length > 0 && showHelp}
			<div class="help">
				<span class="icon material-symbols-rounded"> help_center </span>
				<div class="body">
					{help}
				</div>
			</div>
		{/if}
	</div>
	<slot />
</section>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.help {
		position: relative;
		width: fit-content;

		font-family: var(--ff-main);
		font-weight: var(--fw-main);
		font-size: var(--fs-400);
	}

	.help span {
		color: var(--clr-border);

		aspect-ratio: 1;
		height: var(--section-input-height);
		width: var(--section-input-height);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.body {
		background-color: var(--clr-background);
		color: var(--clr-muted);

		font-family: var(--ff-main);
		font-weight: var(--fw-main);
		font-size: var(--fs-100);

		border: 1px solid var(--clr-border);
		border-radius: var(--radius-element);

		visibility: hidden;

		width: max-content;
		/* TODO: max-width: 24em; */

		position: absolute;
		top: 0;
		right: calc(100% + var(--section-gap));

		padding-inline: var(--button-padding-inline);
		padding-block: var(--button-padding-block);
	}

	.icon:hover + .body,
	.icon:active + .body {
		visibility: visible;
	}
</style>

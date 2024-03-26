<script lang="ts">
	import {
		Alliance,
		stationNumbers,
		parseMatchKey,
		type TBAEventCode,
		getMetricsByEventCode,
		sortMetricsByMatchAllianceStation
	} from "$lib/api"
	import { Modal, Content, Trigger } from "sv-popup"
	import MetricsQrCode from "./MetricsQRCode.svelte"

	export let eventCode: TBAEventCode | null
</script>

{#each [...sortMetricsByMatchAllianceStation(getMetricsByEventCode(eventCode))] as [matchKey, stationsByAlliance]}
	{@const match = parseMatchKey(matchKey)}
	<b>{match?.type} {match?.match}</b>
	{#each [...stationsByAlliance] as [alliance, metricsByStation]}
		<div class="split">
			{#each stationNumbers as station}
				{@const metrics = metricsByStation.get(station)}
				{#if metrics}
					<button class={alliance === Alliance.RED ? "red" : "blue"}>
						<Modal small button={false}>
							<Content>
								<MetricsQrCode {metrics} />
							</Content>
							<Trigger>
								<p>{metrics.team}</p>
							</Trigger>
						</Modal>
					</button>
				{:else}
					<button>?</button>
				{/if}
			{/each}
		</div>
	{/each}
{/each}

<style>
	/* TODO extend active button */
	.red,
	.blue {
		color: var(--clr-foreground);
	}

	.red {
		background-color: var(--clr-red);
		border-color: var(--clr-red);
	}

	.blue {
		background-color: var(--clr-blue);
		border-color: var(--clr-blue);
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

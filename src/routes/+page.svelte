<script lang="ts">
	import field2024 from '$lib/images/fields/2024.png';
	import ParticipantSelector from '$lib/components/selectors/ParticipantSelector.svelte';
	import FieldSelector from '$lib/components/selectors/FieldSelector.svelte';
	import Submit from '$lib/components/sections/Submit.svelte';
	import MultipleOptionSelector from '$lib/components/selectors/OptionSelector.svelte';
	import BooleanSelector from '$lib/components/selectors/BooleanSelector.svelte';
	import Notes from '$lib/components/selectors/NotesComposer.svelte';
	import QRCode from '$lib/components/sections/QRCodeDisplay.svelte';
	import { getMetricsOrNull, storedReports } from '$lib/data/stores';
	import type { Participant } from '$lib/types/Participant';
	import { participantToSerializedParticipant } from '$lib/adapter';
	import { Metrics2024 } from '$lib/data/metrics/2024';

	let participant: Participant;

	let metrics: Metrics2024 = new Metrics2024();

	let qrCode: string = '';

	$: participant &&
		(() => {
			const metricsOrNull = getMetricsOrNull(participant);

			if (metricsOrNull) metrics = Metrics2024.fromMetrics(metricsOrNull);
		})();

	function handleSubmit() {
		const report = {
			participant: participantToSerializedParticipant(participant),
			metrics: metrics.flatten()
		};

		qrCode = JSON.stringify(report);

		storedReports.set([...storedReports.get(), report]);
	}
</script>

<ParticipantSelector bind:participant />
<FieldSelector
	bind:points={metrics.startingPoint}
	field={field2024}
	name="Starting Position"
	help="Place where the robot starts the match."
	single={true}
/>
<BooleanSelector
	bind:value={metrics.leave}
	name="Leave"
	help="Did the robot fully leave the Wing during auto?"
/>
<BooleanSelector
	bind:value={metrics.coopertition}
	name="Coopertition"
	help="Did the alliance activate Coopertition?"
/>
<MultipleOptionSelector
	bind:selected={metrics.trap}
	name="Trap"
	help="How did the robot interact with the Trap?"
	options={['None', 'Failed', 'Success']}
/>
<MultipleOptionSelector
	bind:selected={metrics.climb}
	name="Climb"
	help="How did the robot interact with the Stage?"
	options={['None', 'Failed', 'Success']}
/>
<MultipleOptionSelector
	bind:selected={metrics.harmony}
	name="Harmony"
	help="Did the robot activate the Harmony bonus?"
	options={['0', '+1', '+2']}
/>
<MultipleOptionSelector
	bind:selected={metrics.highNotes}
	name="High Notes"
	help="Did the team's human player score any High Notes?"
	options={['None', '0', '1', '2', '3']}
/>
<Notes bind:notes={metrics.defenseNotes} name="Defense" help="Did the robot play defense?" />
<Notes bind:notes={metrics.drivingNotes} name="Driving" help="Was the robot being defended?" />
<Notes
	bind:notes={metrics.downtimeNotes}
	name="Downtime"
	help="What did the robot do when they weren't scoring?"
/>
<Notes bind:notes={metrics.otherNotes} name="Other" />
<Submit on:click={handleSubmit} bind:scouterName={metrics.scouterName} />
{#if qrCode.length > 0}
	<section>
		<QRCode value={qrCode} />
	</section>
{/if}

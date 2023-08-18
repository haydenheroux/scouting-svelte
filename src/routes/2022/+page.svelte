<script>
	import field2022 from '$lib/images/fields/2022.jpg';
	// @ts-ignore
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	// @ts-ignore
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	// @ts-ignore
	import StartingPosition from '$lib/StartingPosition.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<StartingPosition field={field2022} />
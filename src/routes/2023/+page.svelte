<script>
	import field2023 from '$lib/images/fields/2023.jpg';
	// @ts-ignore
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	// @ts-ignore
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	// @ts-ignore
	import FieldSelector from '$lib/FieldSelector.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<FieldSelector field={field2023} title="Starting Position"/>
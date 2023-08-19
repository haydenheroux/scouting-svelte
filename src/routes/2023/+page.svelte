<script>
	import field2023 from '$lib/images/fields/2023.jpg';
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	import FieldSelector from '$lib/FieldSelector.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<FieldSelector field={field2023} title="Starting Position" single={true}/>
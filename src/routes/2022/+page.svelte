<script>
	import field2022 from '$lib/images/fields/2022.jpg';
	// @ts-ignore
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	// @ts-ignore
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	// @ts-ignore
	import FieldSelector from '$lib/FieldSelector.svelte';
	// @ts-ignore
	import BooleanSelector from '$lib/BooleanSelector.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<FieldSelector field={field2022} title="Starting Position" single={true}/>
<BooleanSelector  title="Auto Taxi" />
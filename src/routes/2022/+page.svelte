<script>
	import field2022 from '$lib/images/fields/2022.jpg';
	import ParticipantSelector from '$lib/ParticipantSelector.svelte';
	import AllianceSelector from '$lib/AllianceSelector.svelte';
	import FieldSelector from '$lib/FieldSelector.svelte';
	import BooleanSelector from '$lib/BooleanSelector.svelte';
	import MultipleOptionSelector from '$lib/MultipleOptionSelector.svelte';
	import NumberSelector from '$lib/NumberSelector.svelte';
	import Submit from '$lib/Submit.svelte';
</script>

<ParticipantSelector />
<AllianceSelector />
<FieldSelector field={field2022} title="Starting Position" single={true}/>
<BooleanSelector title="Auto Taxi" />
<MultipleOptionSelector title="Auto Cargo Scored" options={["0", "1 - 2", "3 - 4", "5 - 6"]} />
<NumberSelector title="Teleop Lower Hub Cargo" />
<NumberSelector title="Teleop Upper Hub Cargo" />
<FieldSelector field={field2022} title="Teleop Makes" drawStyle="triangle" />
<FieldSelector field={field2022} title="Teleop Misses" drawStyle="cross" />
<MultipleOptionSelector title="Climb Level" options={["Low", "Middle", "High", "Traversal"]} />
<MultipleOptionSelector title="Defense" options={["None", "Attempted", "Effective", "Very Effective"]} />
<Submit />
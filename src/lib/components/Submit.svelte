<script lang="ts">
	import Metric from "./Metric.svelte";

    export let scouterName = "";
</script>

<Metric name="Submit">
    <div>
        <label for="scouter">Scouter Name</label>
        <input id="scouter" type="text" placeholder="Scouter Name" bind:value={scouterName}>
    </div>
    <button class="primary" on:click>Submit</button>
</Metric>
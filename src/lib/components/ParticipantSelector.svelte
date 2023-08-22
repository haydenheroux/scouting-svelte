<script lang="ts">
	import Metric from './Metric.svelte';
	import type { MatchType } from "$lib/types/Participant";

    export let event = "";
    export let matchType: MatchType = "Qualification";
    export let matchNumber = 1;
    export let team = "";
</script>

<Metric name="Select Participant">
    <div>
        <label for="event">Event Code</label>
        <input id="event" type="text" placeholder="2023mawne" bind:value={event}>
    </div>
    <div>
        <label for="match">Match</label>
        <div class="split">
            <select bind:value={matchType}>
                <option value="Qualification">Qualification</option>
                <option value="Quarterfinal">Quarterfinal</option>
                <option value="Semifinal">Semifinal</option>
                <option value="Final">Final</option>
            </select>
            <input id="match" type="number" placeholder="1" min="1" bind:value={matchNumber}>
        </div>
    </div>
    <div>
        <label for="team">Team</label>
        <input id="team" type="text" placeholder="5112" bind:value={team}>
    </div>
</Metric>
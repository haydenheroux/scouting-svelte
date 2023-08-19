<script lang="ts">
    export let event = "";
    export let matchType = "qualification";
    export let matchNumber = 1;
    export let team = "";
</script>

<section>
    <h2>Select Participant</h2>
    <div>
        <label for="event">Event</label>
        <input id="event" type="text" placeholder="Event" bind:value={event}>
    </div>
    <div>
        <label for="match">Match</label>
        <div class="split">
            <select bind:value={matchType}>
                <option value="qualification">Qualification</option>
                <option value="quarterfinal">Quarterfinal</option>
                <option value="semifinal">Semifinal</option>
                <option value="final">Final</option>
            </select>
            <input id="match" type="number" placeholder="1" min="1" bind:value={matchNumber}>
        </div>
    </div>
    <div>
        <label for="team">Team</label>
        <input id="team" type="text" placeholder="5112" bind:value={team}>
    </div>
</section>
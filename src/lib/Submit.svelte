<script lang="ts">
    export let scouterName = "";
</script>

<section>
    <h2>Submit</h2>
    <div>
        <label for="scouter">Scouter Name</label>
        <input id="scouter" type="text" placeholder="Scouter Name" bind:value={scouterName}>
    </div>
    <button class="primary" on:click>Submit</button>
</section>
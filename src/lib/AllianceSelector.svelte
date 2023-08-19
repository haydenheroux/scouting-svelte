<script lang="ts">
    export let isRedAlliance = true;
</script>

<section>
    <h2>Select Alliance</h2>
    <div class="split">
        <button on:click={(e) => isRedAlliance = true} class:red={isRedAlliance}>Red Alliance</button>
        <button on:click={(e) => isRedAlliance = false} class:blue={!isRedAlliance}>Blue Alliance</button>
    </div>
</section>

<style>
.red {
    background-color: var(--clr-red);
    color: var(--clr-neutral-800);
}

.blue {
    background-color: var(--clr-blue);
    color: var(--clr-neutral-800);
}
</style>
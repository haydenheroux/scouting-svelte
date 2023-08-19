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
button { /* inactive button */
    background-color: var(--clr-neutral-900);
    color: var(--clr-neutral-300);

    border: 1px solid var(--clr-neutral-700);
}

.red {
    background-color: #E11D48;
    color: var(--clr-neutral-800);
}

.blue {
    background-color: #2563EB;
    color: var(--clr-neutral-800);
}
</style>
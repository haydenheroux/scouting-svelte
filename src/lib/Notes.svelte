<script lang="ts">
    let note= "";

    export let notes: Array<string> = [];

    function add() {
        notes = [...notes, note]
    }

    function remove(index: number) {
        notes.splice(index, 1)
        notes = notes;
    }
</script>

<section>
    <h2>Notes</h2>
    <div>
        <input type="text" placeholder="" bind:value={note}>
        <button class="primary add" on:click={add}>+</button>
    </div>
    {#each notes as note, index}
        <div>
            <input class="inactive" type="text" bind:value={note}>
            <button class="primary remove" on:click={e => remove(index)}>-</button>
        </div>
    {/each}
</section>

<style>
div {
    display: flex;
    flex-direction: row;

    gap: var(--section-gap);
}

.inactive {
    color: var(--clr-neutral-300);
}
</style>
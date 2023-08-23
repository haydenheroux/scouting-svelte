<script lang="ts">
	import Section from "../Section.svelte";

    let note = "";

    export let notes: Array<string> = [];

    function add() {
        notes = [...notes, note];
        note = "";
    }

    function remove(index: number) {
        notes.splice(index, 1);
        notes = notes;
    }
</script>

<Section name="Notes">
    <div>
        <input type="text" placeholder="" bind:value={note}>
        <button class="primary add" on:click={add}>+</button>
    </div>
    {#each notes as note, index}
        <div>
            <input class="inactive" type="text" bind:value={note}>
            <button class="primary remove" on:click={_ => remove(index)}>-</button>
        </div>
    {/each}
</Section>

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
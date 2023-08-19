<script lang="ts">
    export let title: string;
    export let options: Array<string>;
    export let selected = "";
</script>

<section>
    <h2>{title}</h2>
    <div class="split">
        {#each options as option}
            <button on:click={(e) => selected = option} class:active={selected == option}>{option}</button>
        {/each}
    </div>
</section>

<style>
button {
    background-color: var(--clr-neutral-900);
    color: var(--clr-neutral-300);

    border: 1px solid var(--clr-neutral-700);
}

.active {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-900);
}
</style>
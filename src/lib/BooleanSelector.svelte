<script lang="ts">
    export let title: string;
    export let value = false;

    export let negative = "No";
    export let positive = "Yes";
</script>

<section>
    <h2>{title}</h2>
    <div class="split">
        <button on:click={(e) => value = false} class:active={!value}>{negative}</button>
        <button on:click={(e) => value = true} class:active={value}>{positive}</button>
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
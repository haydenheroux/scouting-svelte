<script lang="ts">
    export let title: string;
    export let value: boolean | null = null;

    export let negative = "No";
    export let positive = "Yes";
</script>

<section>
    <h2>{title}</h2>
    <div class="split">
        <button on:click={(e) => value = false} class:active={value === false}>{negative}</button>
        <button on:click={(e) => value = true} class:active={value}>{positive}</button>
    </div>
</section>
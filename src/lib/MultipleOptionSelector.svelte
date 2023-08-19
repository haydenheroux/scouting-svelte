<script lang="ts">
    export let title: string;
    export let options: Array<string>;
    export let selected = "";
</script>

<section>
    <h2>{title}</h2>
    <div class="split">
        {#each options as option}
            <button on:click={(e) => selected = (selected != option) ? option : ""} class:active={selected == option}>{option}</button>
        {/each}
    </div>
</section>
<script lang="ts">
    export let src: string;
    export let alt: string;

    let isFullscreen = false;

    function toggle() {
        isFullscreen = !isFullscreen;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img on:click={toggle} {src} {alt} />
{#if isFullscreen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img class="fullscreen" on:click={toggle} {src} {alt} />
{/if}

<style>
.fullscreen {
    object-fit: contain;

    max-width: 100%;
    max-height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;

    margin: auto;
}
</style>
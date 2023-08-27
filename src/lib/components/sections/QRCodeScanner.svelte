<script lang="ts">
	import { browser } from "$app/environment";
    import { Html5Qrcode, type Html5QrcodeResult } from "html5-qrcode";
	import Section from "../Section.svelte";

    export let name: string;
    export let help = "";

    export let value: string = "";

    let scanner: Html5Qrcode | null = null;

    let scanning = true; // Keeps scanner element present so it can be selected

    function handleScan(text: string, result: Html5QrcodeResult) {
        if (!scanner) return;

        value = text;

        scanning = false;

        scanner.clear();
    }

    function open() {
        scanning = true;

        if (!browser || scanner) return;

        scanner = new Html5Qrcode("scanner");

        const camera = { facingMode: "environment" };
        const config = { fps: 10 }; 

        scanner.start(camera, config, handleScan, (e) => {});
    }
</script>

<Section {name} {help}>
    {#if scanning}
       <div id="scanner"></div>
    {/if}
	<button class="active" on:click={open}>Open Scanner</button>
</Section>

<style>
#scanner {
    width: 100%;

    display: flex;
    justify-content: center;
}
</style>
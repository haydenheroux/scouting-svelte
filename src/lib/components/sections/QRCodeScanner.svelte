<script lang="ts">
	import { browser } from "$app/environment";
    import { Html5QrcodeScanner } from "html5-qrcode";
	import { onMount } from "svelte";

    let reader: Html5QrcodeScanner | null = null;

    onMount(() => {
    if (browser) {
        reader = new Html5QrcodeScanner("scanner", {fps: 10, qrbox: {width: 250, height: 250}}, false);
        reader.render((t, r) => console.log(t, r), e => console.warn(e));
    }});
</script>

<section>
    <div id="scanner"></div>
</section>

<style>
#scanner {
    width: 100%;
}
</style>
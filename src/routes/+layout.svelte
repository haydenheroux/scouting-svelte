<script>
	import "./styles.css"

	import Header from "./Header.svelte"
	import Footer from "./Footer.svelte"
</script>

<div class="app">
	<Header />

	<main>
		<div class="container">
			<slot />
		</div>
	</main>

	<Footer />
</div>

<script>
	import { base } from "$app/paths";
	import NavLink from "$lib/components/NavLink.svelte";
</script>

<header>
	<div class="container">
		<nav>
			<a href="{base}/"><em>scout</em></a>
			<NavLink href="{base}/events">events</NavLink>
			<NavLink href="{base}/view">view</NavLink>
		</nav>
	</div>
</header>

<script>
	import { base } from "$app/paths"
	import NavLink from "$lib/components/NavLink.svelte"
</script>

<header>
	<div class="container">
		<nav>
			<NavLink href="{base}/"><em>scout</em></NavLink>
			<NavLink href="{base}/events">events</NavLink>
			<NavLink href="{base}/view">view</NavLink>
		</nav>
	</div>
</header>

<script>
	import NavLink from '$lib/components/NavLink.svelte';

	import { base } from '$app/paths';
</script>

<header>
	<div class="container">
		<nav>
			<a href="{base}/"><em>scout</em></a>
			<NavLink href="{base}/status/">status</NavLink>
			<NavLink href="{base}/matches/">matches</NavLink>
		</nav>
	</div>
</header>

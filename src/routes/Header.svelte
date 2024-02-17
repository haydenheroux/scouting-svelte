<script>
	import NavLink from '$lib/components/NavLink.svelte';

	import { base } from '$app/paths';
</script>

<header>
	<div class="container">
		<nav>
			<a href="{base}/"><em>scouting-svelte</em></a>
			<NavLink href="{base}/history">History</NavLink>
			<NavLink href="{base}/schedule">Schedule</NavLink>
		</nav>
	</div>
</header>

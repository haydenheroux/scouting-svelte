<script lang="ts">
	import { page } from "$app/stores"

	export let href: string
</script>

<a {href} class:active={$page.url.pathname === href || $page.url.pathname === href + "/"}>
	<slot />
</a>

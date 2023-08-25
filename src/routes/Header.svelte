<script>
    import NavLink from '$lib/components/NavLink.svelte';

    import { base } from '$app/paths';
</script>

<header>
    <div class="container">
        <nav>
            <a href="{base}/"><em>scouting-svelte</em></a>
            <NavLink href="{base}/2024">2024</NavLink>
            <NavLink href="{base}/2023">2023</NavLink>
            <NavLink href="{base}/2022">2022</NavLink>
            <NavLink href="{base}/data">Data</NavLink>
        </nav>
    </div>
</header>
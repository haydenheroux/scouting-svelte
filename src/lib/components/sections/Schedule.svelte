<script lang="ts">
	import { schedulesStore } from "$lib/stores";
    import Section from "../Section.svelte";

    function clear() {
        schedulesStore.clear();
    }
</script>

{#each Object.entries(schedulesStore.get()) as [eventCode, matchToTeamAndAlliance]}
<Section name={eventCode}>
    <table>
        <thead>
            <tr>
                <th>Match</th>
                <th>Team</th>
                <th>Alliance</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(matchToTeamAndAlliance) as [match, teamAndAlliance]}
                <tr>
                    <td>{match}</td>
                    <td>{teamAndAlliance.team}</td>
                    {#if teamAndAlliance.alliance == "red"}
                        <td class="red">{teamAndAlliance.alliance}</td>
                    {:else if teamAndAlliance.alliance == "blue"}
                        <td class="blue">{teamAndAlliance.alliance}</td>
                    {:else}
                        <td>{teamAndAlliance.alliance}</td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
    <button class="active" on:click={clear}>Clear</button>
</Section>
{/each}

<style>
table tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin-bottom: 0.7rem;
}

th {
    font-size: var(--fs-300);
    font-family: var(--ff-heading);
    font-weight: var(--fw-heading);

    text-align: left;
}

.red, .blue {
    font-size: var(--fs-200);

    text-transform: capitalize;

    border-radius: var(--radius-element);

    display: flex;
    align-items: center;
    justify-content: center;
}

.red {
    background-color: var(--clr-red);
}

.blue {
    background-color: var(--clr-blue);
}
</style>
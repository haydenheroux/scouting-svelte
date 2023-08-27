<script lang="ts">
	import { schedule } from "$lib/stores";
    import Section from "../Section.svelte";
</script>

<Section name="Schedule">
<table>
    <thead>
        <tr>
            <th>Match</th>
            <th>Team</th>
            <th>Alliance</th>
        </tr>
    </thead>
{#each Object.entries(schedule.get()) as [match, participant]}
<tr>
    <td>{match}</td>
    <td>{participant.teamNumber}</td>
    {#if participant.alliance == "red"}
        <td class="red">{participant.alliance}</td>
    {:else if participant.alliance == "blue"}
        <td class="blue">{participant.alliance}</td>
    {:else}
        <td>{participant.alliance}</td>
    {/if}
</tr>
{/each}
</table>
</Section>

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
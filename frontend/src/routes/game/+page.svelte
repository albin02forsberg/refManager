<script lang="ts">
    export let data;
</script>

<div class="prose mb-12">
    <h1>Matcher</h1>

    <p>Nedan kan du se föreningens kommande matcher, och vilken/vilka domare som är tillsatta.</p>
</div>

<div class="prose mb-12">
    <h2>Lägg till ny match</h2>

    <a href="/game/create">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Lägg till ny match
        </button>
    </a>
</div>

<table class="min-w-full divide-y divide-grap-200">
    <thead>
        <tr>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Datum
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Hemmalag
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Bortalag
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                HD
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                AD1
            </th>
        </tr>
    </thead>
    <tbody>
        {#each data.games as game}
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <!-- Format date to yyyy-mm-dd hh:mm -->
                    {game.date}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {game.teamHome}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {game.teamAway}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {game.hd}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {game.ad1}
                </td>
            </tr>
        {/each}
    </tbody>
    </table>    

<script lang="ts">
    // Define data for the table
    export let data
</script>

<div class="prose mb-12">
    <h1>Domare</h1>

    <p>
        Nedan hittar du kontaktuppgifter till alla domare i Mullsjö IF,
        respektive vilken nivå domarna dömer på.
    </p>
</div>

<!-- Add new referee -->

<div class="prose mb-12">
    <h2>Lägg till ny domare</h2>

    <a href="/referee/create">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Lägg till ny domare
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
                Namn
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Telefonnummer
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Epost
            </th>
            <th
                scope="col"
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wideer"
            >
                Nivå
            </th>
        </tr>
    </thead>
    <tbody>
        {#await data}
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Loading...</div>
                </td>
            </tr>
        {:then data}
            {#each data.referees as referee}
                <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                            <a href="/referee/{referee.id}">
                                {referee.firstName} {referee.lastName}
                            </a>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{referee.phone}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{referee.email}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{referee.level}</div>
                    </td>
                </tr>
            {/each}
        {/await}
    </tbody>
</table>

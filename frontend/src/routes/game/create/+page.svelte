<script lang="ts">
    let errors = [];
    let dateTime = ""
    let team = ""
    let opponent = ""
    const handleSubmit = () => {
        errors = [];
        if (dateTime === "") {
            errors.push("Du måste ange datum och tid");
        }
        if (team === "") {
            errors.push("Du måste ange lag");
        }
        if (opponent === "") {
            errors.push("Du måste ange motståndare");
        }
        if (errors.length === 0) {
            console.log("No errors");
        }

        if(errors.length > 0) {
            return;
        }

        const f = fetch("http://localhost:8080/game/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dateTime,
                team,
                opponent,
            }),
        });

        f.then((res) => {
            if (res.status === 200) {
                console.log("Success");
            } else {
                console.log("Error");
            }
        });
    }
</script>

<div class="prose mb-12">
    <h1>Lägg till ny match</h1>

    <p>
        Nedan lägger du till en ny match i systemet. Notera att vanliga seriematcher, som är importerade
        i laget.se inte behöver läggas till här, utan kommer automatiskt upp i systemet.
    </p>

    <p>
        Efter matchen är inlagd kommer admin tillsätta domare till matchen.
    </p>
</div>

<form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    on:submit={handleSubmit}
>
    {#if errors.length > 0}
        <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <ul class="list-disc list-inside">
                {#each errors as error}
                    <li>{error}</li>
                {/each}
            </ul>
        </div>
    {/if}
    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-bold mb-2">
            Datum och tid
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateTime"
            type="datetime-local"
            placeholder="Datum och tid"
            bind:value={dateTime}
        />
    </div>
    <div class="mb-4">
        <label for="team" class="block text-gray-700 font-bold mb-2">
            Lag
        </label>
        <select name="team" id="team" bind:value={team}>
            <option value="1">Lag 1</option>
            <option value="2">Lag 2</option>
            <option value="3">Lag 3</option>
        </select>
    </div>
    <div class="mb-4">
        <label for="opponent" class="block text-gray-700 font-bold mb-2">
            Motståndare
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Motståndare"
            bind:value={opponent}
        />
    </div>
    <div class="mb-4">
        <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Lägg till
        </button>
    </div>
</form>

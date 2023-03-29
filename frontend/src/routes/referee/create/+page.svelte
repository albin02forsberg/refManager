<script>
    let firstName = "";
    let lastName = "";
    let email = "";
    let phone = "";

    let errors = [];

    const handleSubmit = () => {
        // Handle errors
        errors = [];

        if (firstName === "") {
            errors.push("Förnamn måste anges");
        }

        if (lastName === "") {
            errors.push("Efternamn måste anges");
        }

        if (email === "") {
            errors.push("Epost måste anges");
        }

        if (phone === "") {
            errors.push("Telefonnummer måste anges");
        }

        if (errors.length > 0) {
            return;
        }

        // Send data to backend

        fetch("http://localhost:8080/referee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    // Redirect to referee list
                    window.location.href = "/referee";
                } else {
                    // Handle error
                    errors.push("Något gick fel");
                }
            })
            .catch((error) => {
                // Handle error
                errors.push("Något gick fel");
            });
    };
</script>

<div class="prose mb-12">
    <h1>Lägg till ny domare</h1>
    <p>
        Här lägger du till en ny domare i systemet. Fyll i alla fält och klicka
        på "Lägg till".
    </p>

    <p>
        Efter en domare är inlagd i systemet kan denna skapa ett konto med
        eposten angiven nedan.
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
            Förnamn
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Förnamn"
            bind:value={firstName}
        />
    </div>
    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-bold mb-2">
            Efternamn
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Efternamn"
            bind:value={lastName}
        />
    </div>
    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-bold mb-2">
            Epost
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Epost"
            bind:value={email}
        />
    </div>
    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-bold mb-2">
            Telefonnummer
        </label>
        <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Telefonnummer"
            bind:value={phone}
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

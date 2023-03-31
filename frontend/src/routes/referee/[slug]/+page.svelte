<script>
    /** @type {import('./$types').PageData} */
    export let data

    console.log("Page data: ")
    console.log(data)
</script>

{#if data}
    <div class="prose mb-12">
        <h1>{data.referee.firstName} {data.referee.lastName}</h1>
    </div>
    <div class="prose">
        <h2>Senaste matcher</h2>
    </div>
{/if}


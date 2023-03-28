<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<main class="p-12 px-44 bg-slate-100 text-gray-50 h-screen">
    <slot />
</main>

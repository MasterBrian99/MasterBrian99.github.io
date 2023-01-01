<script lang="ts">
	import Hero from '../lib/components/Hero/Hero.svelte';
	import '../app.css';
	import About from '$lib/components/About/About.svelte';
	import Projects from '$lib/components/Projects/Projects.svelte';
</script>

<main class="w-full h-full">
	<Hero />
	<div class="w-full h-full z-50">
		<About />
		<Projects />
	</div>
</main>

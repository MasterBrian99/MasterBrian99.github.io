<script>
	import { onMount } from 'svelte';
	import { loadFull } from 'tsparticles';

	/**
	 * @type {typeof import("svelte-particles").default}
	 */
	let ParticlesComponent;

	onMount(async () => {
		const module = await import('svelte-particles');
		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			number: {
				value: 355,
				density: {
					enable: true,
					value_area: 789.1476416322727
				}
			},
			color: {
				value: '#ffffff'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.48927153781200905,
				random: false,
				anim: {
					enable: true,
					speed: 0.2,
					opacity_min: 0,
					sync: false
				}
			},
			size: {
				value: 2,
				random: true,
				anim: {
					enable: true,
					speed: 2,
					size_min: 0,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 0.2,
				random: true,
				straight: false,
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		retina_detect: true,
		fullScreen: false
	};
	let spanClass =
		' text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-emerald-500   font-extrabold';
	let letterItem = ['I', 'D', 'E', 'A', 'S', '', 'T', 'O', '', 'L', 'I', 'F', 'E'];
	// @ts-ignore
	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};
	// @ts-ignore
	let particlesInit = async (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};
</script>

<section class="h-full w-full min-h-screen bg-black text-white relative">
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
	<div class="overflow-x-hidden absolute z-10  w-full h-full min-h-screen">
		<div class="gradient-circle-l gradient-circle" />
		<div class="gradient-circle-r gradient-circle" />
	</div>
	<div
		class="effect-shine w-full h-full flex justify-center items-center min-h-screen flex-col waviy"
	>
		<h1 class="text-8xl font-extrabold text-white">Code to bring</h1>
		<h1 class=" animate-text-hero mt-6">
			{#each letterItem as item, index}
				{#if item.length == 0}
					<span class="ml-4">&nbsp;</span>
				{:else}
					<span style={`--i: ${index + 1}`} class={'spanClass'}>
						{item}
					</span>
				{/if}
			{/each}
		</h1>
	</div>
</section>

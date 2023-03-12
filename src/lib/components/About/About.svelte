<script lang="ts">
	import HeaderText from '$lib/common/HeaderText/HeaderText.svelte';
</script>

<section class="w-full max-h-full bg-black pb-12">
	<HeaderText title={'About Me'} />

	<div
		class="w-full h-full flex md:flex-col xl:flex-row lg:flex-row md:items-center sm:flex-col sm:items-center flex-col items-center container justify-between  mx-auto text-white px-10 xl:px-60 lg:px-20 md:px-20 sm:px-10"
	>
		<div
			class="xl:w-80 lg:w-96 md:w-48 sm:w-36 w-36 xl:mr-12  lg:mr-12 md:mr-2 sm:mr-0 mr-0 xl:mb-0 lg:mb-0 md:mb-10 sm:mb-10 mb-10"
		>
			<img
				src="https://picsum.photos/200/300.webp"
				alt="cutest kitten"
				class="rounded-full xl:w-80 lg:w-72 md:w-48 sm:w-36 w-36 xl:h-80 lg:h-72 md:h-48 sm:h-36 h-36   rounded-corners-gradient-borders"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-2xl">
				A Web Designer and Software Engineer from Sri Lanka who loves design and the internet Sphere
			</h2>
			<div class="py-6">
				<p class="text-lg">
					I am a programmer with good knowledge of frontend and backend techniques.I love spending
					time on fixing little details and optimizing web apps.
				</p>
				<p class="text-lg">
					There’s nothing I enjoy more than designing and developing good websites for nice people.
					It really is that simple. I’ve spent many years trying to perfect what I do and while I’ll
					never be perfect, I do my best to come close. If you’ve got a project you’d like to work
					on with me just get in touch and we can get to work!
				</p>
			</div>
		</div>
	</div>
</section>

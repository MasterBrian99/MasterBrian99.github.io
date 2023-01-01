<script lang="ts">
	import HeaderText from '$lib/common/HeaderText/HeaderText.svelte';
</script>

<section class="w-full max-h-full bg-black pb-12">
	<HeaderText title={'About Me'} />

	<div class="w-full h-full flex container justify-between  mx-auto text-white px-60">
		<div class="w-96 ">
			<img
				src="https://picsum.photos/200/300.webp"
				alt="cutest kitten"
				class="rounded-full w-80 h-80 rounded-corners-gradient-borders"
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

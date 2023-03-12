<script lang="ts">
	import HeaderText from '$lib/common/HeaderText/HeaderText.svelte';
	import MinimalProjectCard from '$lib/common/ProjectCard/MinimalProjectCard.svelte';
	import ProjectCard from '$lib/common/ProjectCard/ProjectCard.svelte';
</script>

<section class="w-full max-h-full bg-black pb-12 min-h-screen">
	<div class="h-full w-full">
		<HeaderText
			title="My  Recent Web Design &
    Some Past Projects."
		/>

		<div class="flex justify-center flex-col">
			<div class="text-white  mx-auto px-60 grid grid-cols-3	 gap-5">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
			<div class="h-full w-full">
				<HeaderText title="Other Noteworthy Projects" />
				<div class=" text-white  container mx-auto px-44 grid grid-cols-3	 gap-4">
					<MinimalProjectCard />
					<MinimalProjectCard />
					<MinimalProjectCard />
					<MinimalProjectCard />
				</div>
			</div>
		</div>
	</div>
</section>

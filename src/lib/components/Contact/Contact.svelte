<script lang="ts">
	import HeaderText from '$lib/common/HeaderText/HeaderText.svelte';
	import githubIcon from '../../../assets/icons8-github(2).svg';
	import mastodonIcon from '../../../assets/icons8-mastodon.svg';
	import gmailIcon from '../../../assets/icons8-gmail-logo.svg';
</script>

<section class="w-full max-h-full bg-black pb-12  text-white">
	<HeaderText title="Get In Touch" />

	<div class="flex justify-center text-white ">
		<img src={githubIcon} alt="" class="w-12 rounded-full" />
		<img src={mastodonIcon} alt="" class="w-12 rounded-full" />
		<img src={gmailIcon} alt="" class="w-12 rounded-full" />
	</div>
</section>

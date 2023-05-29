<script>
	export let color = '';
</script>

<span class="inline-flex items-center">
	{#each [1, 2, 3] as dot}
		<span class="w-2 h-2 rounded-full inline-block mx-[2px] dot{dot} {color}" />
	{/each}
</span>

<style>
	.dot1 {
		animation-name: blink;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}

	.dot2 {
		animation-name: blink;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
		animation-delay: 0.2s;
	}

	.dot3 {
		animation-name: blink;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
		animation-delay: 0.4s;
	}

	@keyframes blink {
		0% {
			opacity: 0.2;
		}
		20% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}
</style>

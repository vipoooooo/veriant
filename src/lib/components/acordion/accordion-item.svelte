<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getAccordionOption } from './context';

	export let open = false;

	const componentId = crypto.randomUUID();
	const { collapse, activeComponentId } = getAccordionOption();

	function setActive() {
		$activeComponentId = componentId;
	}

	function toggleOpen() {
		open = !open;
	}

	function handleClick() {
		collapse ? setActive() : toggleOpen();
	}

	$: open && collapse && setActive();
	$: isActive = $activeComponentId == componentId;
	$: isOpen = collapse ? isActive : open;

	export let itemStyle = '';
	export let questionStyle = '';
	export let titleStyle = '';
	export let iconStyle = '';
	export let contentStyle = '';
</script>

<div class={itemStyle}>
	<button
		on:click={handleClick}
		class="flex gap-2.5 py-4 items-center justify-between w-full {questionStyle}"
		aria-expanded={isOpen}
		aria-controls="accordions-{componentId}"
	>
		<div class={titleStyle}>
			<slot name="title" />
		</div>
		<ion-icon
			name="chevron-forward-outline"
			class={iconStyle}
			class:open={isOpen}
			class:close={!isOpen}
		/>
	</button>
	{#if isOpen}
		<div
			transition:slide|local
			class={contentStyle}
			role="region"
			aria-hidden={!isOpen}
			aria-labelledby="accordion-{componentId}"
		>
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.open {
		transform: rotate(90deg);
		transition: transform 0.3s ease;
	}

	.close {
		transform: rotate(0deg);
		transition: transform 0.3s ease;
	}
</style>

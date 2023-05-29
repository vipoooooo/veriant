<script lang="ts">
	import Loading from '$lib/components/loading/loading.svelte';
	import { Accordion, AccordionItem } from '../lib/components/acordion';

	const items = [
		{
			title: 'Question 1',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'Question 2',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'Question 3',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'Question 4',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'Question 5',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	];
</script>

<div class="flex justify-center items-center w-screen h-screen">
	<div class="w-96">
		<Accordion rootStyle="w-full border-b border-seperator-dark-noTran">
			{#each items as item}
				<AccordionItem
					itemStyle="w-full border-t border-seperator-dark-noTran text-label-dark-pri text-base text-left"
					titleStyle="text-left font-medium"
					iconStyle="text-label-dark-pri text-[20px] shrink-0 visible"
					contentStyle="pb-4"
				>
					<svelte:fragment slot="title">{item.title}</svelte:fragment>
					<svelte:fragment slot="content">{item.content}</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
	<Loading color="bg-white" />
</div>

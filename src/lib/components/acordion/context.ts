import { writable } from 'svelte/store';
import type { AccordionOption, ActiveId, ActiveIdContext, CollapseContext } from './type';
import { getContext, setContext } from 'svelte';

const activeComponentId = writable<ActiveId>(null);

export function setAccordionOption({ collapse }: AccordionOption) {
	setContext<CollapseContext>('collapse', collapse);
	setContext<ActiveIdContext>('active', activeComponentId);
}

export function getAccordionOption() {
	const collapse = getContext<CollapseContext>('collapse');
	const activeComponentId = getContext<ActiveIdContext>('active');

	return { collapse, activeComponentId };
}

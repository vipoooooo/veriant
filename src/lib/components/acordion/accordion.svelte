<script lang="ts">
	import { setAccordionOption } from './context';

	export let collapse = false;
	export let rootStyle = '';

	setAccordionOption({ collapse });
</script>

<div class={rootStyle}>
	<slot />
</div>

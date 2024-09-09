<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { autoModeWatcher, storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}
</svelte:head>
<div class="ml-4 mr-4">
	<header>Marlborough Badminton</header>
	<main>
		<slot />
	</main>
</div>

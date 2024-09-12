<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';

  import Logo from '../components/Logo.svelte';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="ml-4 mr-4">
  <header>
    <div class="relative flex justify-center pt-1 pb-1">
      <Logo />
      <div class="absolute right-0">
        <LightSwitch />
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
</div>

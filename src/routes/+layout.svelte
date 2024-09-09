<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="ml-4 mr-4">
  <header>
    <div class="flex items-center justify-between pt-1 pb-1">
      <h1>Marlborough Badminton</h1>
      <LightSwitch />
    </div>
  </header>
  <main>
    <slot />
  </main>
</div>

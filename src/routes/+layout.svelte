<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';

  import Logo from '../components/Logo.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="ml-4 mr-4">
  <header>
    <div class="relative flex justify-center pt-1 pb-1">
      <Logo />
    </div>
  </header>

  <main>
    <slot />
  </main>

  <aside>
    <Sidebar />
  </aside>
</div>

<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';

  import Logo from '../components/Logo.svelte';
  import Navigation from '../components/Navigation.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  import type { MenuItem } from '../types';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  const menuItems: MenuItem[] = [
    {
      name: 'History',
      route: '/history'
    },
    {
      name: 'Committee',
      route: '/committee'
    }
  ];
</script>

<div class="ml-4 mr-4">
  <header>
    <div class="relative flex justify-center pt-1 pb-1">
      <Logo />
    </div>
  </header>

  <main>
    <div class="flex p-2">
      <nav class="hidden md:block w-64">
        <Navigation {menuItems} />
      </nav>
      <div class="p-2">
        <slot />
      </div>
    </div>
  </main>

  <Sidebar>
    <Navigation {menuItems} />
  </Sidebar>
</div>

<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Menu } from 'lucide-svelte';

  let isOpen = false;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-40" on:click={toggleOpen} aria-hidden="true" />

  <div
    class="fixed top-0 left-0 w-64 bg-gray-100 dark:bg-gray-800 h-full shadow-lg z-50 p-6 transform"
    in:fly={{ x: -300, duration: 300 }}
    out:fly={{ x: -300, duration: 300 }}
    on:click={toggleOpen}
    aria-hidden="true"
  >
    <div class="pt-16">
      <slot></slot>
    </div>
  </div>
{/if}

<button class="absolute left-2 top-2 p-3 z-50" on:click={toggleOpen}>
  <Menu class="w-10 h-10" />
</button>

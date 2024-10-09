<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Menu, CircleX } from 'lucide-svelte';

  let isOpen = false;
  const openLabel = 'Open menu';
  const closeLabel = 'Close menu';
  let buttonLabel = openLabel;

  const toggleOpen = () => {
    isOpen = !isOpen;
    buttonLabel = isOpen ? closeLabel : openLabel
  };
</script>

<button 
  class="md:hidden absolute left-2 top-2 p-3 z-30" 
  on:click={toggleOpen} 
  aria-label={buttonLabel} 
  aria-controls="mobile-nav"
  aria-expanded={isOpen}
>
  {#if isOpen}
    <CircleX class="w-10 h-10" />
  {:else}
    <Menu class="w-10 h-10" />
  {/if}
</button>

<nav class="md:hidden">
  <div 
    hidden={!isOpen} 
    class="fixed inset-0 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-10" 
    on:click={toggleOpen} 
    aria-hidden="true" 
  />

  {#if isOpen}
    <div
      id="mobile-nav"
      class="fixed top-0 left-0 w-64 bg-gray-100 dark:bg-gray-800 h-full shadow-lg z-20 p-6 transform"
      in:fly={{ x: -300, duration: 300 }}
      out:fly={{ x: -300, duration: 300 }}
      role="dialog"
    >
      <div class="pt-16">
        <slot></slot>
      </div>
    </div>
  {/if}
</nav>

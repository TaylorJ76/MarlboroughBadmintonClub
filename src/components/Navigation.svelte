<script lang="ts">
  import type { MenuItem } from '../types';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  export let menuItems: MenuItem[] = [];
</script>

<nav>
  <ul>
    {#each menuItems as item}
      <li>
        <button
          class="flex items-center p-2"
          on:click={() => {
            console.log(base + item.route);
            goto(base + item.route);
          }}
        >
          <svelte:component this={item.icon} class="mr-2 w-5 h-5" />
          <span>{item.name}</span>
        </button>
      </li>
    {/each}
  </ul>
</nav>

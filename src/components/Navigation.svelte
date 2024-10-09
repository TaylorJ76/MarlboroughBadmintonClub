<script lang="ts">
  import type { MenuItem } from '../types';
  import { base } from '$app/paths';
  export let menuItems: MenuItem[] = [];
</script>

<ul>
  {#each menuItems as item}
    <li>
      <button class="flex items-center p-2" on:click={() => goto(base + item.route)}>
        <span>{item.name}</span>
      </button>
    </li>
  {/each}
</ul>

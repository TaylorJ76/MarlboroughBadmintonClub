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
        <a class="flex items-center p-2" href={base + item.route} on:click={(e) => { e.preventDefault(); goto(base + item.route); }}>
          <span>{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
